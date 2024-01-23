const mongoose = require('mongoose')

const profileSchema = mongoose.Schema({

    profilePicture: {
        type: String,
    },
    name: {
        type: String,
    },
    address: {
        type: String,
    },
    mobileNo: {
        type: String,
    },
    gender: {
        type: String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Profile', profileSchema)