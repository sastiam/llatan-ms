const { Router} = require('express');
const router = Router();

const { client } = require('../controllers');

router.post("/crearcliente", client.createNewClient);
router.get("/kpideclientes", client.kpiClients);
router.get("/listclients", client.listClients);


module.exports = router;