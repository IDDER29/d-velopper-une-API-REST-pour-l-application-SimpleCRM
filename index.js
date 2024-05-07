import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// import { afficherClientById, afficherClients, ajouterClient,modifierClient,supprimerClient } from "./Controllers/ClientController";

import express from "express";
const app = express();
app.use(express.json());

async function main() {
  app.get("/", async (req, res) => {
    res.send("Hello World");

    /*
    const user = await prisma.user.create({
      data: {
        email: "achraf@gmail.com",
        first_name: "achraaf",
        last_name: "elhajoui",
        password: "123",
        role: "kolshi",
        username: "nadi",
      },
    });
    console.log(user);
    */
  });

  app.get("/create/companie", async (req, res) => {
    const createCompanies = await prisma.company.create({
      data: {
        name: `Company  2`,
        address_line1: `Address Line 2`,
        city: `City 2`,
        capital: parseInt((1).toString().repeat(6)),
        number_of_employees: 50 + 2,
        responsible_first_name: `Responsible  2`,
        responsible_last_name: `Name 2`,
        phone_number: `555-${("0" + 2).slice(-2)}${"5678".repeat(2)}`,
        email: `company${2}@example.com`,
        postal_code: "80000",
      },
    });
    console.log(createCompanies);
  });

  app.get("/companies", async (req, res) => {
    try {
      const companys = await prisma.company.findMany();
      res.status(200).json({
        companys: companys,
      });

      console.log("nice bro ");
    } catch (error) {
      console.log("not nice bruhh");
      console.error(error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app.get("/users", async (req, res) => {
    try {
      const Users = await prisma.user.findMany();
      res.status(200).json({
        users: Users,
      });

      console.log("nice bro ");
    } catch (error) {
      console.log("not nice bruhh");
      console.error(error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/users/first_name/:name", async (req, res) => {
    try {
      const Users = await prisma.user.findMany({
        where: {
          first_name: req.params.name,
        },
      });

      res.status(200).json({
        users: Users,
      });

      console.log("nice bro ");
    } catch (error) {
      console.log("not nice bruhh");
      console.error(error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/users/creatNewUser", async (req, res) => {
    try {
      const { email, first_name, last_name, password, role, username } =
        req.body;

      const user = await prisma.user.create({
        data: { email, first_name, last_name, password, role, username },
      });

      console.log(req.body);

      res.json(user);
    } catch (error) {
      console.log("not nice bruuhh");
      console.error(error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.put("/users/edit/userNmae/:userName", async (req, res) => {
    const { userName } = req.params;
    const { first_name, last_name, password, role } = req.body;

    try {
      const updatedUser = await prisma.user.update({
        where: { username: userName },
        data: { first_name, last_name, password, role },
      });

      res.json(updatedUser);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while updating the user" });
    }
  });

  app.delete("/users/delete/userName/:userName", async (req, res) => {
    const { userName } = req.params; // changed id to userName

    try {
      const deletedUser = await prisma.user.delete({
        where: { username: userName }, // changed id to username
      });

      res.json(deletedUser);
      console.log("Deletion successful");
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
