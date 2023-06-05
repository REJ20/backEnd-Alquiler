const { Router } = require('express');
const db = require ('../db');
const clientController = require ('../controllers/clientController');
const userController = require('../controllers/userController');

const router = Router();

router.get('/', (req, res) => {
    res.send('Hola Trolito, este es un get Method');
});

router.get('/client', clientController.findAllClient);
//router.get('/client', userController.getClient);
router.post('/client', clientController.createClient);
router.put('/client/eliminate/:id', clientController.deleteClient);
router.put('/client/:id', clientController.updateClient); 

module.exports = router;