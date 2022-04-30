const { Router} = require('express');
const router = Router();

const { client } = require('../controllers');

router.post("/crearcliente", client.createNewClient);


module.exports = router;