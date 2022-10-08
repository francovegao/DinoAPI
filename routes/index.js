const router = require('express').Router();
const { getDinoNames, getDino, getDinoByLetter } = require('../controllers/dinos');
const dinos = require('./dinos');
const users = require('./users');

router.get('/', (req, res) => {
    res.render('index')
});

router.use('/dinos', dinos);
router.use('/dinos/aleatorio/', getDinoNames);
router.use('/dinos/nombre/:name', getDinoNames);
router.use('/dinos/id/:id', getDino);
router.use('/dinos/letras/:name', getDinoByLetter);
router.use('/users', users)

module.exports = router;