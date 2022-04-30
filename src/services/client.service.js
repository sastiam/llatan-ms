const Joi = require('joi');
const {Client} = require('../models');

const ClientSchema = Joi.object({
    name: Joi.string().min(4).max(30).required(),
    lastName: Joi.string().min(4).max(50).required(),
    age: Joi.number().min(1).max(100).required()
});

const createNewClient = async (user) => {

    try {
        let {error} = ClientSchema.validate(user);

        if(error) {
            throw new Error(error?.details[0]?.message)
        }

        let newClient = await Client.create(user);

        return newClient;

    } catch (error) {
        
        throw error;
    }

};

module.exports = {
    createNewClient
}