const { async } = require("rxjs");
const QueriesPractice = require("../model/queriesSchema")

async function insertDoc(req, res) {
    console.log('practice1')
    let a = [
        { id: 1, name: { first: 'Pallavi', last: 'gaganthade' }, gender: 'F', occupation: "Mechanical Engineer", likes: ['vaporizing', 'talking'], marks: 20, age: 22, amount: 22, np: 2, },
        // { id: 2, name: { first: 'Pabalo', last: 'Eschobar' }, gender: 'M', occupation: "Design Engineer", likes: ['vaporizing', 'talking'], marks: 40, age: 21, amount: 10, np: 2 },
        // { id: 3, name: { first: 'Aniket', last: 'Pokharkar' }, gender: 'M', occupation: "Software Engineer", likes: ['vaporizing', 'talking'], marks: 50, age: 18, amount: 15, np: 3 },
        // { id: 4, name: { first: 'Saurabh', last: 'Patil' }, gender: 'M', occupation: "Instrumentation Engineer", likes: ['vaporizing', 'talking'], marks: 60, age: 20, amount: 10, np: 3 }
    ]

    try {
        const data = await QueriesPractice.insertMany(a)
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json('something went wrong')
    }
}

const getData = async (req, res) => {
    try {
        const data = await QueriesPractice.findOne({ 'name.first': /Pallavi/ })
        console.log(data.fullName)
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json('.......')
    }
}

const getData1 = async (req, res) => {

    try {
        const data = await QueriesPractice.find()
        // const person = await QueriesPractice.findOne({ 'name.last': 'Kamble' }, 'name occupation');
        // const person = await QueriesPractice.findOne({ 'name.last': 'Kamble' }).select('name occupation');

        /*  const person = await QueriesPractice.
             find({
                 occupation: /Engineer/, // includes engineer or not.
                 'name.last': 'Patil',
                 age: { $gt: 17, $lt: 66 },
                 likes: { $in: ['vaporizing', 'talking'] }
             }).
             limit(10).
             sort({ occupation: -1 }).
             select({ name: 1, occupation: 1, age: 1, }).
             exec(); */


        // Using query builder
        /*  const person = await QueriesPractice.
             find({ occupation: /Engineer/ }).
             where('name.last').equals('Patil').
             where('age').gt(17).lt(66).
             where('likes').in(['vaporizing', 'talking']).
             limit(10).
             sort('-occupation').
             select('name occupation').
             exec(); */

        /* const person = await QueriesPractice.updateMany(
            { occupation: /Design/ }, // Match documents where the occupation is 'Engineer'
            { $set: { age: 31, maritalStatus: 'Married' } },// Set the age field to 30 for the matched documents
        ); */

        // const person = await QueriesPractice.updateOne(
        //     { 'name.first': 'Nilesh' }, // Match documents where the occupation is 'Engineer'
        //     { $set: { maritalStatus: 'Single' } },// Set the age field to 30 for the matched documents
        // );

        // const person = await QueriesPractice.findOneAndUpdate({ 'occupation': /Mechanical/ }, { age: 522 }, { new: true })


        res.status(200).json(person)
    } catch (error) {
        res.status(400).json({ 'mesage': error })
    }

}


module.exports = { insertDoc, getData, getData1 }
