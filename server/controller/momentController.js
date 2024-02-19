const Moment = require('../model/momentSchema')

const createMoment = async (req, res) => {

    const { title, description, date, content } = req.body

    const newMoment = { title, description, date, content }

    try {
        const moment = await Moment.create(newMoment)
        return res.status(200).json(moment)
    } catch (error) {
        return res.status(400).json(error)

    }

}

const getAllMoments = async (req, res) => {

    try {
        const allMoments = await Moment.find()
        return res.status(200).json(allMoments)
    } catch (error) {
        return res.status(400).json(error)

    }
}
const getMomentByID = async (req, res) => {

    try {
        const moment = await Moment.find({ _id: req.params.id })
        return res.status(200).json(moment)
    } catch (error) {
        return res.status(400).json(error)

    }
}

const updateMoment = async (req, res) => {

    try {
        const moment = await Moment.findOneAndUpdate({ _id: req.params.id }, req.body)
        return res.status(200).json(moment)
    } catch (error) {
        return res.status(400).json(error)

    }
}


module.exports = { createMoment, getAllMoments, getMomentByID, updateMoment }