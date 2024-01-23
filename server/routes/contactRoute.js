const express = require("express");
const router = express.Router();
const { getContacts, getContact, createContact, editContact, deleteContact } = require('../controller/contactController');
const auth = require("../middleware/auth");

router.get("/", auth, getContacts);

router.post("/", auth, createContact);

router.route("/:id").get(getContact);

router.route("/:id").put(editContact);

router.route("/:id").delete(deleteContact);




module.exports = router;