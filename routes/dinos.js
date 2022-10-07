// Llamamos al Router de Express
const router = require('express').Router();

// Llamamos a las funciones
const {
        getDino,
        getDinos,
        createDino,
        updateDino,
        deleteDino
}= require('../controllers/dinos')

router.get('/', getDinos);
router.get('/:id', getDino);
router.post('/', createDino);
router.patch('/:id', updateDino);
router.delete('/:id', deleteDino);

module.exports = router;