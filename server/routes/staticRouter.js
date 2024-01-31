const express = require('express')
const router = express.Router()

router.get('/home', async (req, res) => {
    return res.render('Home')
})


module.exports = router; 