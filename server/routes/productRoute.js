const express = require('express')
const router = express.Router();
const { getProducts, createProduct, getProductsByCategory } = require('../controller/productController')
const auth = require('../middleware/auth')
const upload = require('../middleware/multer')

router.get('/get-users-product', auth, getProducts)
// router.post('/create-product', auth, createProduct)
router.post("/create-product", auth, upload.array('images', 5), createProduct)

router.post('/get-product-by-category-id', auth, getProductsByCategory)



module.exports = router