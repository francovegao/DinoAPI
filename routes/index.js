const router = require('express').Router();
const { getDinoNames } = require('../controllers/dinos');
const { getDino } = require('../controllers/dinos');
const dinos = require('./dinos');

router.get('/', (req, res) => {
    res.render('index')
});

router.use('/dinos', dinos);
router.use('/dinos/random/', getDinoNames);
router.use('/dinos/n/:name', getDinoNames);
router.use('/dinos/i/:id', getDino);

module.exports = router;