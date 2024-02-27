const { Router } = require('express');
const multer = require ('../middlewares/multer')
const passport = require('passport')

const { createOne, getAll } = require('../controllers/dietCtrl');
const router = Router();

router.post('/new', multer, createOne)
router.get('/get_all', getAll)

module.exports = router;