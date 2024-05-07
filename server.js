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
import {
  getAllInvoices,
  getInvoiceById,
  addInvoice,
  updateInvoice,
  deleteInvoice,
} from "./Controllers/FactureController.js";
import {
  getAllSuppliers,
  getSupplierById,
  addSupplier,
  updateSupplier,
  deleteSupplier,
} from "./Controllers/supplierController.js";
import {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} from "./Controllers/ProduitController.js";

import { format } from "path";
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

  ////////////////////////////////777

  app.get("/show/products", (req, res) => {
    try {
      getAllProducts().then((products) => {
        res.status(200).json({ products });
        console.log("showing products");
      });
    } catch (error) {
      console.log("Deletion failed");
      console.error(error.message);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the product" });
    }
  });

  // get a uniqe product using the id
  app.get("/show/product/:id", (req, res) => {
    try {
      getProductById(req.params.id).then((product) => {
        res.status(200).json({ product });
        console.log("showing product");
      });
    } catch (error) {
      console.log("Deletion failed");
      console.error(error.message);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the product" });
    }
  });

  // POST

  //   create a new product

  app.post("/create/product", async (req, res) => {
    try {
      addProduct(req.body).then((newProduct) => {
        res.status(200).json({ newProduct });
        console.log("Creating new product");
      });
    } catch (error) {
      console.log("Deletion failed");
      console.error(error.message);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the product" });
    }
  });

  //PUT

  // update a product

  app.put("/update/product/:id", async (req, res) => {
    try {
      updateProduct(req.params.id, req.body).then((updatedProduct) => {
        res.status(200).json({ updatedProduct });
        console.log("Updating product");
      });
    } catch (error) {
      console.log("Deletion failed");
      console.error(error.message);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the product" });
    }
  });

  //DELETE
  app.delete("/delete/product/:id", async (req, res) => {
    try {
      deleteProduct(req.params.id).then((deletedProduct) => {
        res.status(200).json({ deletedProduct });
        console.log("Product is deleted");
      });
    } catch (error) {
      console.log("Deletion failed");
      console.error(error.message);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the product" });
    }
  });

  ///////////////////////////////////////////////

  app.get("/show/suppliers", (req, res) => {
    try {
      getAllSuppliers().then((suppliers) => {
        res.status(200).json({ suppliers });
        console.log("showing suppliers");
      });
    } catch (error) {
      console.log("Deletion failed");
      console.error(error.message);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the supplier" });
    }
  });

  // get a uniqe supplier using the id
  app.get("/show/supplier/:id", (req, res) => {
    try {
      getSupplierById(req.params.id).then((supplier) => {
        res.status(200).json({ supplier });
        console.log("showing supplier");
      });
    } catch (error) {
      console.log("Deletion failed");
      console.error(error.message);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the supplier" });
    }
  });

  // POST

  // create a new supplier
  app.post("/create/supplier", async (req, res) => {
    try {
      addSupplier(req.body).then((newSupplier) => {
        res.status(200).json({ newSupplier });
        console.log("Creating new supplier");
      });
    } catch (error) {
      console.log("Deletion failed");
      console.error(error.message);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the supplier" });
    }
  });

  // PUT

  // update a supplier
  app.put("/update/supplier/:id", async (req, res) => {
    try {
      updateSupplier(req.params.id, req.body).then((updatedSupplier) => {
        res.status(200).json({ updatedSupplier });
        console.log("Updating supplier");
      });
    } catch (error) {
      console.log("Deletion failed");
      console.error(error.message);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the supplier" });
    }
  });

  // DELETE
  app.delete("/delete/supplier/:id", async (req, res) => {
    try {
      deleteSupplier(req.params.id).then((deletedSupplier) => {
        res.status(200).json({ deletedSupplier });
        console.log("Supplier is deleted");
      });
    } catch (error) {
      console.log("Deletion failed");
      console.error(error.message);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the supplier" });
    }
  });

  ////////////////////////////////////////////////////////////

  app.get("/show/invoices", (req, res) => {
    try {
      getAllInvoices().then((invoices) => {
        res.status(200).json({ invoices });
        console.log("showing invoices");
      });
    } catch (error) {
      console.log("Deletion failed");
      console.error(error.message);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the invoice" });
    }
  });

  // get a uniqe invoice using the id
  app.get("/show/invoice/:id", (req, res) => {
    try {
      getInvoiceById(req.params.id).then((invoice) => {
        res.status(200).json({ invoice });
        console.log("showing invoice");
      });
    } catch (error) {
      console.log("Deletion failed");
      console.error(error.message);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the invoice" });
    }
  });

  // POST

  // create a new invoice
  app.post("/create/invoice", async (req, res) => {
    try {
      addInvoice(req.body).then((newInvoice) => {
        res.status(200).json({ newInvoice });
        console.log("Creating new invoice");
      });
    } catch (error) {
      console.log("Deletion failed");
      console.error(error.message);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the invoice" });
    }
  });

  // PUT

  // update a invoice
  app.put("/update/invoice/:id", async (req, res) => {
    try {
      updateInvoice(req.params.id, req.body).then((updatedInvoice) => {
        res.status(200).json({ updatedInvoice });
        console.log("Updating invoice");
      });
    } catch (error) {
      console.log("Deletion failed");
      console.error(error.message);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the invoice" });
    }
  });

  // DELETE
  app.delete("/delete/invoice/:id", async (req, res) => {
    try {
      deleteInvoice(req.params.id).then((deletedInvoice) => {
        res.status(200).json({ deletedInvoice });
        console.log("Invoice is deleted");
      });
    } catch (error) {
      console.log("Deletion failed");
      console.error(error.message);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the invoice" });
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
