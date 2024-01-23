//@desc get all contacts
//@route Get api/contact
//@access Public

const asyncHandler = require('express-async-handler')
const Contact = require('../model/contactModel')

const getContacts = asyncHandler(async (req, res) => {
    try {
        const contact = await Contact.findById('649971a43f11042eeac37092')
        console.log(contact);

    } catch (error) {
        console.error(error);
    }
    // console.log(req.user);
    // const contacts = await Contact.find()
    // res.status(200).json(contacts);
})

const createContact = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    const contactExist = await Contact.findOne({ email })
    if (contactExist) {
        return res.status(400).json({ message: 'This user already exist' })
    }
    if (!name || !email || !password) {
        res.status(400);
        throw new Error('validation error')
    }
    const contact = await Contact.create({
        name, email,
        password,
        user_id: req.user.id
    })
    res.status(200).json(contact)
})



const getContact = asyncHandler(async (req, res, next) => {

    try {

        let contact = await Contact.findById(req.params.id)
        return res.status(200).json(contact)
    }
    catch {
        return res.status(404);
    }

})

const editContact = async (req, res) => {

    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        return res.status(404).json("not Found")
    }
    try {
        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        return res.status(200).json('Successfully updated')

    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteContact = async (req, res) => {

    const contact = await Contact.findById(req.params.id);
    try {
        if (!contact) {
            return res.status(404).json("Not Found");
        }

        await Contact.deleteOne({ _id: req.params.id });
        return res.status(200).json('Successfully deleted');
    } catch (error) {
        return res.status(500).json(error);
    }
};



module.exports = { getContacts, getContact, createContact, editContact, deleteContact, }

