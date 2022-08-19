const express = require("express");

const indexRouter = require("./routes/index");
const livrosRouter = require("./routes/livros.routes");


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/livros", livrosRouter);

app.listen(3333, () => console.log('Opaaa'))

module.exports = app;
