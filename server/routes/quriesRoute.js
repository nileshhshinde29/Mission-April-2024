const express = require('express')
const router = express.Router();
const { insertDoc, getData, getData1 } = require("../controller/quriesController")


router.put('/insertDoc', insertDoc)
router.get('/getData', getData)
router.get('/getData1', getData1)





module.exports = router