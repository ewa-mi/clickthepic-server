const express = require("express");
const app = express();
const bodyParserMiddleWare = express.json();
const { PORT } = require("./config/constants");
const cors = require("cors");
const loggerMiddleWare = require("morgan");
const authRouter = require("./routers/auth");
const cardRouter = require("./routers/card");

app.use(bodyParserMiddleWare);
app.use(loggerMiddleWare("dev"));
app.use(cors());

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}

app.use("/", authRouter);
app.use("/card", cardRouter);

app.listen(PORT, console.log(`server running on ${PORT}`));
