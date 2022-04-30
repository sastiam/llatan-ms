const { Router} = require("express");
const router = Router();

const client = require('./client.route');

router.use('/api', client);


module.exports = router;