import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import express, { json } from "express";
import {
  getAllClients,
  addClient,
  getClientById,
  updateClient,
  deleteClient,
} from "./Controllers/client-controller.js";
import {
  getAllCompanys,
  addCompany,
  getCompanyById,
  updateCompany,
  deleteCompany,
} from "./Controllers/company-controller.js";
const app = express();
app.use(express.json());

async function main() {
  // for Companies
  // get the list of companies
  app.get("/show/companys", (req, res) => {
    getAllCompanys()
      .then((companies) => {
        res.status(200).json({ companies });
        console.log("showing companies");
      })
      .catch((error) => {
        console.log("Failed to fetch companies");
        console.error(error.message);
        res.status(500).json({ error: "An error occurred" });
      });
  });
  // show a unique company using the id
  app.get("/show/company/:id", (req, res) => {
    getCompanyById(req.params.id)
      .then((company) => {
        res.status(200).json({ company });
        console.log("showing company");
      })
      .catch((error) => {
        console.log("Failed to fetch company");
        console.error(error.message);
        res.status(500).json({ error: "An error occurred" });
      });
  });
  // create a new company
  app.post("/create/company", async (req, res) => {
    addCompany(req.body)
      .then((newCompany) => {
        res.status(200).json({ newCompany });
        console.log("Creating new company");
      })
      .catch((error) => {
        console.log("Failed to create company");
        console.error(error.message);
        res.status(500).json({ error: "An error occurred" });
      });
  });
  // update a company
  app.put("/update/company/:id", async (req, res) => {
    try {
      updateCompany(req.params.id, req.body).then((company) => {
        res.status(200).json({ company });
        console.log("Updating company");
      });
    } catch (error) {
      console.log("Failed to update company");
      console.error(error.message);
      res.status(500).json({ error: "An error occurred" });
    }
  });
  // delete a company
  app.delete("/delete/company/:id", async (req, res) => {
    const id = req.params.id;
    try {
      deleteCompany(id).then((company) => {
        res.status(200).json({ company });
        console.log("Deleting company");
      });
    } catch (error) {
      console.log("Failed to delete company");
      console.error(error.message);
      res.status(500).json({ error: "An error occurred" });
    }
  });

  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  // for Clients
  // GET
  // get the list of clients
  app.get("/show/clients", (req, res) => {
    try {
      getAllClients().then((Users) => {
        res.status(200).json({ users: Users });
        console.log("showing clients");
      });
    } catch (error) {
      console.log("Deletion failed");
      console.error(error.message);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the user" });
    }
  });

  // get a uniqe clinet using the id
  app.get("/show/client/:id", (req, res) => {
    try {
      getClientById(req.params.id).then((client) => {
        res.status(200).json({ client });
        console.log("showing client");
      });
    } catch (error) {
      console.log("Deletion failed");
      console.error(error.message);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the user" });
    }
  });

  // POST

  //   creat a new client

  app.post("/create/client", async (req, res) => {
    try {
      addClient(req.body).then((newClient) => {
        res.status(200).json({ newClient });
        console.log("Creat new client");
      });
    } catch (error) {
      console.log("Deletion failed");
      console.error(error.message);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the user" });
    }
  });

  //PUt

  // update a client

  app.put("/update/client/:id", async (req, res) => {
    try {
      updateClient(req.params.id, req.body).then((updatedClient) => {
        res.status(200).json({ updatedClient });
        console.log("Creat new client");
      });
    } catch (error) {
      console.log("Deletion failed");
      console.error(error.message);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the user" });
    }
  });

  //DELETE
  app.delete("/delete/client/:id", async (req, res) => {
    try {
      deleteClient(req.params.id).then((deletedClient) => {
        res.status(200).json({ deletedClient });
        console.log("Client is deleted");
      });
    } catch (error) {
      console.log("Deletion failed");
      console.error(error.message);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the user" });
    }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
app.listen(3000);
