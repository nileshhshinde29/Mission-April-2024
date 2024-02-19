const express = require("express");
const router = express.Router();
// const auth = require("../middleware/auth");
const { AggregationFunction } = require('../controller/AggregationQuestionPracticeController')

router.get("/AggregationFunction", AggregationFunction);



module.exports = router;