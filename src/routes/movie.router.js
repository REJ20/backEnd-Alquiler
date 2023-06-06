const { Router } = require('express');
const movieController = require ('../controllers/movie.controller');

const router = Router();

router.get('/movie', movieController.findAllMovie);
router.get('/movie/:id', movieController.findOneMovie);
router.post('/movie', movieController.createMovie);
router.put('/movie/:id', movieController.updateMovie);

module.exports = router;