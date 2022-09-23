const router = require('express').Router();
const dinos = require('./dinos');

router.get('/', (req, res) => {
    res.json({'info': 'Welcome to DinoAPI!'})
});

router.use('/dinos', dinos);

module.exports = router;