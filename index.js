const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
// app.use(cors());
const PORT = process.env.PORT || 3000;

// pages are parameters that are numbers. If you do not pass a page you get everything. Each page contains 100 deals
app.get("/", (_, res) => {
  const options = {
    method: "GET",
    url: "https://developer.woot.com/feed/Home",
    headers: {
      "x-api-key": `${process.env.VITE_AUTHKEY}`,
      "content-type": "application/json",
    },
  };

  axios
    .request(options)
    .then((response) => {
      const payload = response.data.Items;
      res.json(payload);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
