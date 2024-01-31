const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { response } = require('../app');

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
            const accessToken = jwt.sign({
                user: {
                    email, id: user.id
                }
            }, process.env.SECRET_JWT_KEY, { expiresIn: "1d" })

            const refreshToken = jwt.sign({
                user: {
                    email, id: user.id
                }
            }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1m' });

            // Assigning refresh token in http-only cookie 
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
            });

            // return res.status(200).json(accessToken)
            return res.render('Home', { accessToken: accessToken })
        }
    } catch (error) {
        return res.status(500).json({ 'server error': error })
    }

}
const temp = async (req, res) => {
    res.send('hello');
};


const self = asyncHandler(async (req, res) => {
    res.send(req.user);
});

module.exports = { register, login, self, temp }
