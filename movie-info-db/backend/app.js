const express = require("express");
const app = express();
var axios = require("axios").default;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

const apiRequest = (type, query) => {
  var options = {
    method: "GET",
    url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/${type}/${query}`,
    headers: {
      "x-rapidapi-key": "520ff9fcb9msh01dba9dfa51d70ep1f1f81jsn3f24cfb4b9bb",
      "x-rapidapi-host":
        "imdb-internet-movie-database-unofficial.p.rapidapi.com",
    },
  };
  return axios.request(options);
};

app.use("/search", (req, res, next) => {
  apiRequest(req.query.type, req.query.searchQuery)
    .then((result) => {
      console.log(result.data);
      res.status(200).json(result.data.titles);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = app;
