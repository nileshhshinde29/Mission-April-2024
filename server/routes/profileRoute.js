const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth')
const upload = require('../middleware/multer')
const { createProfile, getProfile, getLookupProfile } = require("../controller/profileController")


router.get('/get-profile', auth, getProfile)
// router.post('/create-product', auth, createProduct)
router.post("/create-profile", auth, upload.array('image', 1), createProfile)
router.get('/get-lookup-profile', auth, getLookupProfile)


// router.post('/get-product-by-category-id', auth, getProductsByCategory)



module.exports = router