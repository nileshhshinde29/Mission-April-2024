
const Product = require('../model/productModel')

const getProducts = async (req, res) => {
    console.log(req.user.user.id)
    try {
        Product.find({ added_by: req.user.user.id })
            .populate('added_by', 'username')
            .then((products) => {
                res.status(200).json(products);
            })
    } catch (error) {
        res.status(400).json({ message: 'Something went wrong!' })
    }
}

const createProduct = async (req, res) => {
    try {
        let images = [];

        if (req.files?.length > 0) {
            images = req.files.map((file) => {
                return { img: file.filename };
            });
        }


        const { productName, productDetails, category } = req.body

        if (!productName || !productDetails || !category) {
            res.status(400);
            throw new Error('validation error')
        }
        const product = await Product.create({
            images,
            productName,
            productDetails,
            added_by: req.user.user.id,
            category_id: category,

        })
        console.log(images)

        res.status(200).json(product)
    } catch (error) {
        res.status(400).json(error)
    }
}

const getProductsByCategory = async (req, res) => {
    const { category } = req.body;
    console.log(req.body)
    try {
        Product.find({ category_id: category })
            .populate('added_by', 'username')
            .populate('category_id', 'categoryName')
            .then((products) => {
                res.status(200).json(products);
            })
    } catch (error) {
        res.status(400).json({ message: 'Something went wrong!' })
    }
}

const getProductsAddedByUser = async (req, res) => {
    const { category } = req.body;
    try {
        Product.find({ category_id: category, added_by: req.user.user.id })
            .populate('added_by', 'username')
            .populate('category_id', 'categoryName')
            .then((products) => {
                res.status(200).json(products);
            })
    } catch (error) {
        res.status(400).json({ message: 'Something went wrong!' })
    }
}

module.exports = { getProducts, createProduct, getProductsByCategory }