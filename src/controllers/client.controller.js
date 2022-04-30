
const {ClientService} = require('../services');


const createNewClient = async (req, res, next) => {
    try {
        
        let client = await ClientService.createNewClient(req.body); 

        res.status(200).json(client);

    } catch (err) {
        next(err);
    }
}

const kpiClients = async (req, res, next) => {
    try {
        
        let kpi = await ClientService.kpiClients();

        res.status(200).json(kpi);

    } catch (error) {
        next(error);
    }
}

const listClients = async (req, res, next) => {
    try {
        
        let clients = await ClientService.listClients();

        res.status(200).json(clients);

    } catch (error) {
        next(error);
    }
}


module.exports = {
    createNewClient,
    kpiClients,
    listClients
}