const internalServerError = {
  description: "Internal Server Error",
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          message: {
            type: "string",
            example: "Internal Server Error",
          },
        },
      },
    },
  },
};

const invalidUserData = {
  description: "Invalid Data provided",
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          message: {
            type: "string",
            example: "The fields field1, field2 and field3 are required",
          },
        },
      },
    },
  },
};

const clientResponse = {
  id: {
    type: "number",
    example: "1",
  },
  name: {
    type: "string",
    example: "John",
  },
  lastName: {
    type: "string",
    example: "Doek",
  },
  dateBirth: {
    type: "string",
    example: "2000-03-20",
  },
  age: {
    type: "number",
    example: "22",
  },
  createdAt: {
    type: "string",
    example: "2021-04-30T19:40:59.495Z",
  },
  updatedAt: {
    type: "string",
    example: "2021-04-30T19:40:59.495Z",
  },
};

const createClient = {
  tags: ["Clients"],
  description: "Crear un nuevo cliente",
  operationId: "createClient",
  security: [
    {
      bearerAuth: [],
    },
  ],
  requestBody: {
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/createClientBody",
        },
      },
    },
    required: true,
  },
  responses: {
    200: {
      description: "Client creado!",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: clientResponse,
          },
        },
      },
      500: internalServerError,
      422: invalidUserData,
    },
  },
};

const createClientBody = {
  type: "object",
  properties: {
    name: {
      type: "string",
      example: "John",
    },
    lastName: {
      type: "string",
      example: "Doek",
    },
    dateBirth: {
      type: "string",
      example: "03-20-2000",
    },
  },
};

const kpiClients = {
    tags: ['Clients'],
    description: "Promedio de edad y desviacion estandar",
    operationId: "kpiClients",
    security: [
        {
          bearerAuth: [],
        },
      ],
    requestBody: {},
    responses: {
        '200': {
            description: 'Obtain data successfully',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            average: {
                                type: "number",
                                example: 22
                            },
                            "standardDeviation": {
                                type: "number",
                                example: 4.3
                            }
                        }
                    }
                }
            }
        },
        '500': internalServerError
    }
};

const listClients = {
  tags: ['Clients'],
  description: 'Retrieve all clients',
  operationId: 'listaClients',
  security: [
    {
      bearerAuth: [],
    },
  ],
  responses: {
    '200': {
      description: 'Clients retrieved successfully!',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                client: {
                  type: "object",
                  example: clientResponse
                },
                "posibleDeathDate": {
                  type: "string",
                  example: "2079-03-20T00:00:00.000Z"
                }
              },
            },
          },
        },
      },
    },
    '500': internalServerError,
  },
};




module.exports = { createClient, createClientBody, kpiClients, listClients };
