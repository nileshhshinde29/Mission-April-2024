const express = require('express')
const { createMoment, getAllMoments, getMomentByID, updateMoment } = require('../controller/momentController')
const router = express.Router()

router.post('/create-moment', createMoment)
router.get('/get-moments', getAllMoments)
router.get('/get-moment-by-id/:id', getMomentByID)
router.post('/update-moment/:id', updateMoment)


module.exports = router
