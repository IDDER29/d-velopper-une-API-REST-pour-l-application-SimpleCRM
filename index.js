import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

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

  app.put("/users/userNmae/:userName", async (req, res) => {
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

  app.delete("/", function (req, res) {
    res.send("Hello World");
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
