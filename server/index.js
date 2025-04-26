const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const contact = require("./models/contacts");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello from the server");
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new contact({ name, email, message });
    await newContact.save();
    res.status(200).send("Contact saved successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving contact");
  }
});

app.get("/api/contacts", async (req, res) => {
  try {
    const contacts = await contact.find();
    res.status(200).send(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching contacts");
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
