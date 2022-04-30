const Joi = require('joi');
const {Client} = require('../models');

const ClientSchema = Joi.object({
    name: Joi.string().min(4).max(30).required(),
    lastName: Joi.string().min(4).max(50).required(),
    dateBirth: Joi.date().required()
});

const createNewClient = async (user) => {

    try {
        let {error} = ClientSchema.validate(user);

        if(error) {
            throw new Error(error?.details[0]?.message)
        }

        let newClient = await Client.create({...user, dateBirth: new Date(user.dateBirth)});

        return newClient;

    } catch (error) {
        
        throw error;
    }

};

const kpiClients = async () => {
    try {
        
        let clients = await Client.findAll();

        let ageClients = clients.map(client => client.age);

        let averageAge = ageClients.reduce((prev, curr) => prev + parseInt(curr, 10), 0);

        return {
            "average": averageAge,
            "standard deviation": standardDev(ageClients) 
        }

    } catch (error) {
        throw error;
    }
}

const listClients = async () => {
    try {
        
        let clients = await Client.findAll();

        let clientsWithPosibleDeath = clients.map(client => { return {
            client,
            posibleDeathDate: posibleDeathDate(client.dateBirth)
        }});

        return clientsWithPosibleDeath;

    } catch (error) {
        throw error;
    }
};


let standardDev = (ages) => {

    let mean = ages.reduce((acc, curr) => acc + curr, 0) / ages.length;

    ages = ages.map(ag => (ag - mean) ** 2);

    let sum = ages.reduce((acc, curr) => acc + curr, 0);

    return Math.sqrt(sum / ages.length);

};

let posibleDeathDate = (dateBirth) => {

    let posibleDeath = new Date(dateBirth);

    posibleDeath.setFullYear(posibleDeath.getFullYear() + 79);
                
    return posibleDeath;

};

module.exports = {
    createNewClient,
    kpiClients,
    listClients
}