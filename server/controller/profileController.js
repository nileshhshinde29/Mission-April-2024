const { async } = require("rxjs");
const Profile = require("../model/profileModel")

const createProfile = async (req, res) => {

    const { name, address, gender } = req.body
    const profilePicture = await req.files[0]?.filename;
    console.log(req.files.filename)

    if (!name || !address || !gender) {
        res.status(400).json({ "message": "Please provide all information" })
    }

    try {
        const profile = await Profile.create({
            profilePicture,
            name,
            address,
            gender,
            userId: req.user.user.id
        })

        res.status(200).json(profile)

    } catch (error) {
        res.status(400).json({ message: "Something went wrong" })

    }

}

const getProfile = async (req, res) => {
    const profile = await Profile.findOne({ userId: req.user.user.id }).populate("userId", 'username')
    if (!profile) {
        res.status(404).json({ message: 'not found' })
    }
    res.status(200).json(profile)
}

const getLookupProfile = async (req, res) => {

    const newProfile = await Profile.aggregate([
        {
            $lookup: {
                from: "users",
                localField: "name",
                foreignField: "username",
                as: "userInfo"
            }
        }
    ])

    if (!newProfile) {
        res.status(404).json({ message: 'not found' })
    }
    res.status(200).json(newProfile)

}

module.exports = { createProfile, getProfile, getLookupProfile }