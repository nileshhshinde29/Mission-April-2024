const mongoose = require('mongoose')

const momentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    date: {

    },
    content: {
        type: String,
        required: true,
    }
}, { timestamps: true })

module.exports = mongoose.model('Moment', momentSchema)