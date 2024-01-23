const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { createCategory, getCategories } = require('../controller/categoryController')

router.get("/get-categories", auth, getCategories);

router.post("/create-category", auth, createCategory);

// router.route("/:id").get(getContact);

// router.route("/:id").put(editContact);

// router.route("/:id").delete(deleteContact);




module.exports = router;