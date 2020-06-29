const express = require("express");
const app = express();
const bodyParserMiddleWare = express.json();
const { PORT } = require("./config/constants");
const cors = require("cors");

app.use(bodyParserMiddleWare);
app.use(cors());

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}

app.listen(PORT, console.log(`server running on ${PORT}`));
