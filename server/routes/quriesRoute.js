const express = require('express')
const router = express.Router();
const { findOne, getData1, find, findWithFilter, findById, updateOne, updateMany, findOneAndUpdate, findByIdAndUpdate,
    replaceOne, findOneAndReplace, deleteOne, deleteMany, deleteManyWithCondition, findByIdAndDelete, findOneAndDelete, findByIdAndRemove, insertMany,
    create, save, createWithArray } = require("../controller/quriesController")


router.get('/find', find)
router.get('/findOne', findOne)
router.get('/findWithFilter', findWithFilter)
router.get('/findById', findById)

router.post('/insertMany', insertMany)
router.post('/create', create)
router.post('/save', save)
router.post('/createWithArray', createWithArray)


router.put('/updateOne', updateOne)
router.put('/updateMany', updateMany)
router.put('/findOneAndUpdate', findOneAndUpdate)
router.put('/findByIdAndUpdate', findByIdAndUpdate)
router.put('/findOneAndReplace', findOneAndReplace)
router.put('/replaceOne', replaceOne)

router.delete('/deleteOne', deleteOne)
router.delete('/deleteMany', deleteMany)
router.delete('/deleteManyWithCondition', deleteManyWithCondition)
router.delete('/findByIdAndDelete', findByIdAndDelete)
router.delete('/findOneAndDelete', findOneAndDelete)
router.delete('/findByIdAndRemove', findByIdAndRemove)

router.get('/getData1', getData1)





module.exports = router 