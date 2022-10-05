const router = require('express').Router();
const dinos = require('./dinos');

router.get('/', (req, res) => {
    res.render('index')
});

router.use('/dinos', dinos);

module.exports = router;