const { Router } = require('express');

const { connexion, inscription, getAll, getOne } = require('../controllers/userCtrl');
const router = Router();

router.post('/register', inscription)
router.post('/login', connexion)
router.get('/users/get_all', getAll)
router.get('/users/get_one/:id', getOne)

module.exports = router;