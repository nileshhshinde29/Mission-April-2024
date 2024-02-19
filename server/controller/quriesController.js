const { async } = require("rxjs");
const QueriesPractice = require("../model/queriesSchema")

/* ---------------- GET ----------- */

const find = async (req, res) => {
    try {
        const data = await QueriesPractice.find()
        res.status(200).json(data)
    } catch (error) { console.log(error); res.status(400).json(error) }

}

const findWithFilter = async (req, res) => {
    try {
        const data = await QueriesPractice.find({ 'name.first': "Pallavi" })
        res.status(200).json(data)
    } catch (error) { console.log(error); res.status(400).json(error) }

}

const findOne = async (req, res) => {
    try {
        const data = await QueriesPractice.findOne({ 'name.first': "Pallavi" })
        res.status(200).json(data)
    } catch (error) { console.log(error); res.status(400).json(error) }

}

const findById = async (req, res) => {
    try {
        // const data = await QueriesPractice.findById({ _id: "65c1e76da9354f03a9df1adb" }) 
        const data = await QueriesPractice.findById("65c1e76da9354f03a9df1adb")   // working same with both
        res.status(200).json(data)
    } catch (error) { console.log(error); res.status(400).json(error) }

}

/* ---------------POST --------------------------- */


async function create(req, res) {
    let newData = {
        id: 1,
        name: { first: 'Gauri', last: 'Gavali' },
        gender: 'F', occupation: "Mechanical Engineer",
        likes: ['vaporizing', 'talking'],
        marks: 20,
        age: 22,
        amount: 22,
        np: 2,
    }
    try {
        let data = await QueriesPractice.create(newData)
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json('something went wrong')
    }
}

async function createWithArray(req, res) {
    let newData = [
        { id: 1, name: { first: 'Gauri', last: 'Gavali' }, gender: 'F', occupation: "Mechanical Engineer", likes: ['vaporizing', 'talking'], marks: 20, age: 22, amount: 22, np: 2, },
        { id: 1, name: { first: 'Saudagar', last: 'Shevale' }, gender: 'F', occupation: "Mechanical Engineer", likes: ['vaporizing', 'talking'], marks: 20, age: 22, amount: 22, np: 2, }
    ]
    try {
        let data = await QueriesPractice.create(newData)
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json('something went wrong')
    }
}

async function save(req, res) {

    const queriesPractice = new QueriesPractice({
        id: 1,
        name: { first: 'Rahul', last: 'Patil' },
        gender: 'M', occupation: "Mechanical Engineer",
        likes: ['reading', 'talking'],
        marks: 24,
        age: 22,
        amount: 22,
        np: 2,
    })


    try {
        let data = await queriesPractice.save()
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json('something went wrong')
    }
}



async function insertMany(req, res) {
    let a = [
        { id: 1, name: { first: 'Pallavi', last: 'Gaganthade' }, gender: 'F', occupation: "Mechanical Engineer", likes: ['vaporizing', 'talking'], marks: 20, age: 22, amount: 22, np: 2, },
        { id: 2, name: { first: 'Pabalo', last: 'Eschobar' }, gender: 'M', occupation: "Design Engineer", likes: ['vaporizing', 'talking'], marks: 40, age: 21, amount: 10, np: 2 },
        { id: 3, name: { first: 'Aniket', last: 'Pokharkar' }, gender: 'M', occupation: "Software Engineer", likes: ['vaporizing', 'talking'], marks: 50, age: 18, amount: 15, np: 3 },
        { id: 4, name: { first: 'Avadhut', last: 'Patil' }, gender: 'M', occupation: "Instrumentation Engineer", likes: ['vaporizing', 'talking'], marks: 60, age: 20, amount: 10, np: 3 },
        { id: 4, name: { first: 'Atul', last: 'Misal' }, gender: 'M', occupation: "Instrumentation Engineer", likes: ['vaporizing', 'talking'], marks: 60, age: 20, amount: 10, np: 3 },
        { id: 4, name: { first: 'Mayuri', last: 'Jadhav' }, gender: 'F', occupation: "Instrumentation Engineer", likes: ['vaporizing', 'talking'], marks: 60, age: 20, amount: 10, np: 3 }
    ]

    try {
        const data = await QueriesPractice.insertMany(a)
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json('something went wrong')
    }
}

/* ------------------ UPDATE --------------------- */


const updateOne = async (req, res) => {
    try {
        const data = await QueriesPractice.updateOne({ "name.first": 'Pallavi' }, { occupation: 'House wife' });
        res.status(200).json(data)
    } catch (error) { console.log(error); res.status(400).json(error) }
}

const updateMany = async (req, res) => {
    try {
        const data = await QueriesPractice.updateMany({ "name.first": 'Pallavi' }, { occupation: 'House wife' });
        res.status(200).json(data)
    } catch (error) { console.log(error); res.status(400).json(error) }
}

const findOneAndUpdate = async (req, res) => {
    try {
        const data = await QueriesPractice.findOneAndUpdate({ "name.first": 'Pallavi' }, { occupation: 'House wife' });
        res.status(200).json(data)
    } catch (error) { console.log(error); res.status(400).json(error) }
}

const findByIdAndUpdate = async (req, res) => {
    try {
        const data = await QueriesPractice.findByIdAndUpdate({ "name.first": 'Pallavi' }, { occupation: 'House wife' });
        res.status(200).json(data)
    } catch (error) { console.log(error); res.status(400).json(error) }
}

const findOneAndReplace = async (req, res) => {
    try {
        const data = await QueriesPractice.findOneAndReplace({ "name.first": 'Pallavi' }, { occupation: 'House wife' });
        res.status(200).json(data)
    } catch (error) { console.log(error); res.status(400).json(error) }
}

const replaceOne = async (req, res) => {
    try {
        const data = await QueriesPractice.replaceOne({ "name.first": 'Pallavi' }, { occupation: 'House wife' });
        res.status(200).json(data)
    } catch (error) { console.log(error); res.status(400).json(error) }
}

/* ------------DELETE------------ */




const deleteOne = async (req, res) => {
    try {
        const data = await QueriesPractice.deleteOne({ "name.first": 'Pallavi' })
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json('.......')
    }
}

const deleteMany = async (req, res) => {
    try {
        const data = await QueriesPractice.deleteMany()
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json('.......')
    }
}
const deleteManyWithCondition = async (req, res) => {
    try {
        const data = await QueriesPractice.deleteMany({ "name.first": 'Pallavi' })
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json('.......')
    }
}

const findByIdAndDelete = async (req, res) => {
    try {
        const data = await QueriesPractice.findByIdAndDelete({ _id: "65c21e81ef6919a8429364a2" })
        // const data = await QueriesPractice.findByIdAndDelete("65c21e81ef6919a8429364a2") // work with both
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json('.......')
    }
}

const findOneAndDelete = async (req, res) => {
    try {
        const data = await QueriesPractice.findOneAndDelete({ "name.first": 'Pallavi' })
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json('.......')
    }
}

const findByIdAndRemove = async (req, res) => {
    try {
        const data = await QueriesPractice.findByIdAndRemove("65c21fbbcee32cdc5fc1921c")
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


module.exports = {
    create, save, createWithArray, insertMany, findOne, getData1, find, findWithFilter, findById,
    updateOne, updateMany, findOneAndUpdate, findByIdAndUpdate,
    findOneAndReplace, replaceOne, deleteOne, deleteMany, deleteManyWithCondition, findByIdAndDelete, findOneAndDelete, findByIdAndRemove
}

/*

findOne :   find one returns single object if not present then it returns null. IF multiple entries present then return first entry.
find():     find returns list of all data. We can pass condition, then it returns all entries that satisfies that condition.
            If cond'n has not found then it will return empty array.
findById(): return null if not present.

updateOne():returns insights like { modifiedCount:26 }
updateMany(): returns insights like { modifiedCount:26 }
findOneAndUpdate(): returns object of data;
findByIdAndUpdate(): returns object of data;
replaceOne(): return insight, replace first doc which satisfies condition. replace all doc with provided one instead of _id.
findOneAndReplace(); return data obj, replace first doc which satisfies condition. replace all doc with provided one instead of _id.
deleteOne():  delete only one doc based on condition.
deleteMany(): delete all docs
deleteMany({name:'pallavi'}): delete all doc with name pallavi
findByIdAndDelete();
findOneAndDelete():
findByIdAndRemove()





*/

// Model.deleteMany()
// Model.deleteOne()
// Model.findByIdAndDelete()
// Model.findByIdAndRemove()
// Model.findOneAndDelete()
