const router = require('express').Router();
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