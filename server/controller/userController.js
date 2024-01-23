const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const register = async (req, res) => {

    const { name, email, password } = req.body

    const emailExist = await User.findOne({ email });

    try {
        if (emailExist) {
            return res.status(400).json('email already exist!')
        }
        if (!name || !email || !password) {
            return res.status(400).json('validation error')
        }
        const hashedPassword = await bcrypt.hash(password, 10)

        const contact = await User.create({
            name,
            email,
            password: hashedPassword
        })
        return res.status(200).json(contact)
    } catch (error) {
        return res.status(500).json({ 'server error': error })
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json('validation error')
    }
    const user = await User.findOne({ email })
    if (!user) {
        return res.status(400).json('user not exist')
    }

    try {
        if (user && (await bcrypt.compare(password, user.password))) {
            const accessToken = await jwt.sign({
                user: {
                    email, id: user.id
                }
            }, process.env.SECRET_JWT_KEY, { expiresIn: "1d" })

            return res.status(200).json(accessToken)
        }
    } catch (error) {
        return res.status(500).json({ 'server error': error })
    }

}


// const login = asyncHandler(async (req, res) => {

//     const { email, password } = req.body;
//     console.log(req.body)
//     if (!email || !password) {
//         return res.status(400).json('All fields are mandatory!')
//     }

//     const user = await User.findOne({ email: email })
//     console.log(user)
//     if (!user) {
//         return res.status(400).json('Please provide valid information')
//     }



//     try {
//         if (user && (await bcrypt.compare(password, user.password))) {
//             console.log('accessToken');
//             const accessToken = await jwt.sign({
//                 user: {
//                     email, id: user.id
//                 }
//             }, process.env.SECRET_JWT_KEY, { expiresIn: "1d" }
//             )
//             return res.status(200).json(accessToken)
//         }

//     } catch (error) {
//         return res.status(500).json({ 'server error': error })
//     }



// })

const self = asyncHandler(async (req, res) => {
    res.send(req.user);
});

module.exports = { register, login, self }
