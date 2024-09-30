const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.SERVER_PORT;
const BASE_URL = process.env.BASE_URL;

app.use(cors());

app.get("/api/fruits", async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/fruit/all`);
    res.json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message || "An unknown error occurred" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
  console.log(`Using BASE_URL: ${BASE_URL}`);
});
