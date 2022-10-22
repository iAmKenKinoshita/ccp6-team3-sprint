const express = require("express");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`listening on port : ${PORT}`);
});

module.exports = app;
