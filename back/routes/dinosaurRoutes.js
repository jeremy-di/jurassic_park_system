const { Router } = require('express');
const multer = require ('../middlewares/multer')
const passport = require('passport')

const { createOne, getAll, getOne, updateOne, deleteOne } = require('../controllers/dinosaurCtrl');
const router = Router();

router.get('/get_all', getAll)
router.get('/get_one/:id', getOne)
router.use(passport.authenticate("jwt", {session : false}))
router.post('/new', multer, createOne)
router.put('/update/:id', multer, updateOne)
router.delete('/delete/:id', deleteOne)

module.exports = router;