const express = require("express");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();

router.get("/", (_, res) => {
  const options = {
    url: "https://developer.woot.com/feed/Home",
    method: "GET",
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
      console.log(error, error.response);
    });
});

module.exports = router;
