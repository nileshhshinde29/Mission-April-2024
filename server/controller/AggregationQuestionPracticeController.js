const Aggregation = require('../model/AggregationQuestionPracticeSchema')





async function Question1() {
    /* Retrieve all documents from the "users" collection. */

    const temp = await Aggregation.aggregate([{ $match: {} }])
    return temp
}

async function Question2() {
    /* Retrieve the users sorted by age in ascending order.*/

    const temp = await Aggregation.aggregate([{ $sort: { age: 1 } }])
    return temp
}

async function Question3() {
    /* Find users aged 30 and above.*/

    const temp = await Aggregation.aggregate([{ $match: { age: { $gt: 30 } } }])
    return temp
}

async function Question4() {
    /*Count the total number of users.*/

    const temp = await Aggregation.aggregate([{ $count: "totalUsers" }])
    const temp1 = await Aggregation.aggregate([{ $group: { _id: null, "totalUsersUsingGroup": { $sum: 1 } } }])
    temp.push(temp1[0])
    return { temp }
}

async function Question5() {
    /*Find the user with the highest age*/

    const temp = await Aggregation.aggregate([{ $group: { _id: null, maxuser: { $max: "$age" } } }])
    return { temp }
}
async function Question6() {
    /*Retrieve only the names of all users.*/

    const temp = await Aggregation.aggregate([{ $group: { _id: null, name: { $push: "$name" } } }])
    const temp1 = await Aggregation.aggregate([{ $project: { _id: 0, name: 1 } }])
    return {
        using$group: temp,
        using$project: temp1
    }
}

async function Question7() {
    /*Retrieve the hobbies of the user with the lowest age.*/

    const temp = await Aggregation.aggregate([{ $sort: { age: 1 } }, { $limit: 1 }, { $project: { _id: 0, hobbies: 1 } }])
    return { temp }
}

async function Question8() {
    /*Find users who enjoy both "reading" and "running" as hobbies.*/

    const temp = await Aggregation.aggregate([{ $match: { hobbies: { $all: ["reading", "running"] } } }])
    return { temp }
}

async function Question9() {
    /*Count the total number of hobbies across all users.*/

    const temp = await Aggregation.aggregate([{ $unwind: "$hobbies" }, { $group: { _id: null, uniqueHobbies: { $addToSet: "$hobbies" } } }, { $unwind: "$uniqueHobbies" }, { $count: "Total unique hobbies" }])
    return { temp }
}

async function Question10() {
    /*Find users whose names contain the letter 'a'*/

    const temp = await Aggregation.aggregate([{ $match: { $or: [{ "name": { $regex: 'gary', $options: 'i' } }] } }])  // $options 'i' is for case-insensitive
    return { temp }
}

async function Question11() {
    /*Sort users by city and then by age in descending order*/

    const temp = await Aggregation.aggregate([{ $sort: { 'city': 1, age: -1 } }])
    return { temp }
}

async function Question12() {
    /*Find the youngest user*/

    const temp = await Aggregation.aggregate([{ $sort: { age: -1 } }, { $limit: 1 }])
    return { temp }
}

async function Question13() {
    /*Retrieve users who have at least one hobby*/

    const temp = await Aggregation.aggregate([{ $match: { hobbies: { $exists: true, $ne: [] } } }]) // Matches documents where hobbies field exists and is not an empty array
    return { temp }
}


async function Question14() {
    /*Count the number of users in each city.*/

    const temp = await Aggregation.aggregate([{ $group: { _id: '$city', Users: { $push: "$name" } } }])
    return { temp }
}

async function Question15() {
    /*Find users whose age is an even number.*/

    const temp = await Aggregation.aggregate([{
        $match: {
            $expr: {
                $eq: [
                    { $mod: ["$age", 2] },
                    0
                ]
            }
        }
    }])
    return { temp }
}

/* Intermediate */

async function Question16() {
    /*Calculate the average age of users*/

    const temp = await Aggregation.aggregate([{ $group: { _id: null, averageAge: { $avg: "$age" } }, }])
    return { temp }
}

async function Question17() {

    /*Project only the names and ages of users.*/

    const temp = await Aggregation.aggregate([{ $project: { _id: 0, name: 1, age: 1 } }])
    return { temp }
}

async function Question18() {

    /*Group users by city and find the average age in each city.*/

    const temp = await Aggregation.aggregate([{ $group: { _id: "$city", avg: { $avg: "$age" } } }])
    return { temp }
}






const AggregationFunction = async (req, res) => {

    const result = await Question18()

    res.status(200).json(result);

}


module.exports = { AggregationFunction }

/* 
$match: This stage filters the documents to pass only those that match the specified condition to the next stage in the pipeline.

$expr: Allows the use of aggregation expressions inside the $match stage.

$eq: Compares two values for equality. In this case, it compares the result of the $mod expression to 0.

$mod: Returns the remainder of the division of the first expression by the second 

*/