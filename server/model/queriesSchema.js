const mongoose = require('mongoose')

const queriesPractice = mongoose.Schema({

    name: {
        first: {
            type: String,
            get: capitalizeFirstLetter
        },
        last: {
            type: String,
            get: capitalizeFirstLetter
        },
    },
    gender: { type: String, enum: ['M', 'F'], },
    occupation: { type: String, },
    marks: { type: Number, },
    likes: { type: Array },
    age: { type: Number, },
    amount: { type: Number, },
    np: { type: Number, },
    maritalStatus: { type: String, },
},
    {
        timestamps: true
    }
)

queriesPractice.virtual('fullName').get(function () {
    console.log('hii')
    return `${this.name.first} ${this.name.last}`;
});
function capitalizeFirstLetter(v) {
    // Convert 'bob' -> 'Bob'
    return v.charAt(0).toUpperCase() + v.substring(1);
}


module.exports = mongoose.model('QueriesPractice', queriesPractice)