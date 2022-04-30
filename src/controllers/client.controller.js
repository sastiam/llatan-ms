
const {ClientService} = require('../services');


const createNewClient = async (req, res, next) => {
    try {
        
        let client = await ClientService.createNewClient(req.body); 

        res.status(200).json(client);

    } catch (err) {
        next(err);
    }
}


module.exports = {
    createNewClient
}