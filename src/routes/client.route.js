const { Router } = require('express');
const db = require ('../db');
const clientController = require ('../controllers/clientController');
const userController = require('../controllers/userController');

const router = Router();

router.get('/client', clientController.findAllClient);
//router.get('/client', userController.getClient);
router.post('/client', clientController.createClient);
router.put('/client/:id', clientController.updateClient);
router.delete('/client/:id', clientController.deleteClient); 

module.exports = router;