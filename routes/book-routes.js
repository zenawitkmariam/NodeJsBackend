const express = require('express');
const router = express.Router();
const booksController = require("../controllers/book-controller")

router.get("/",booksController.getAll);
router.post("/",booksController.addBook);

module.exports = router;