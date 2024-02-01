const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 3001; // Choose any available port
app.use(
  cors({
    origin: "*",
    methods: "GET,POST",
  })
);

// Define a route to proxy the API request
app.get("/api/content", async (req, res) => {
  console.log("first");
  try {
    const response = await axios.get(
      "https://www.bmc.com/bin/contentapi/content?rootPath=/content/bmc/language-masters/en/customers&product_interest=981173424,244922277,215078746,163366495,940824846,499579858,507778250,145457443,762200338,794729560,248677372,174236796,180034581,438283521,788612595,004182175,549295455,113394324,642178370,212041549&sortCriteria=recommended&category=rc"
    );
    const data = response.data;
    console.log("data", response, data);
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
