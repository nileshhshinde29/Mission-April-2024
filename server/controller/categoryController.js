const Category = require('../model/categoryModel')

const getCategories = async (req, res) => {
    try {
        const categories = await Category.find()
        res.status(200).json(categories);
    } catch (error) {
        res.status(400).json(error);
    }
    // console.log(req.user);
    // const contacts = await Contact.find()
    // res.status(200).json(contacts);
}

const createCategory = async (req, res) => {
    const { categoryName } = req.body
    console.log(categoryName)
    const categoryExists = await Category.findOne({ categoryName })
    if (categoryExists) {
        return res.status(400).json({ message: 'This user already exist' })
    }
    if (!categoryName) {
        res.status(400);
        throw new Error('validation error')
    }
    const category = await Category.create({
        categoryName,
        user_id: req.user.id
    })
    res.status(200).json(category)
}

module.exports = { createCategory, getCategories }
