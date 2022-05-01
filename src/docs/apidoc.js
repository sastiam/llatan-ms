const { createClient, createClientBody, kpiClients, listClients } = require('./client');

const apiDocumentation = {
    openapi: '3.0.1',
    info: {
      version: '1.0.0',
      title: 'Llatan MS - Documentacion',
      description: 'Microservicios de clientes',
      termsOfService: 'https://llatan.pe/terms',
      contact: {
        name: 'sastiam',
        email: 'email@sastiam.me',
        url: 'https://sastiam.me',
      },
      license: {
        name: 'Apache 2.0',
        url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000/api/',
        description: 'Local Server',
      },
      {
        url: process.env.APP_URL + '/api/',
        description: 'Cloud server'
      }
    ],
    paths: {
        '/crearCliente': {
          post: createClient,
        },
        '/kpideclientes': {
            get: kpiClients
        },
        '/listclients': {
            get: listClients
        }
      },
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
        schemas: {
            createClientBody,
        },
      },
  };
  
module.exports = apiDocumentation;