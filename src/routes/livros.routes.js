const express = require("express");
const livrosController = require("../controllers/livrosController");

const livroRouter = express.Router();

livroRouter.get("/", livrosController.index);
livroRouter.put("/:id", livrosController.update); 

module.exports = livroRouter;