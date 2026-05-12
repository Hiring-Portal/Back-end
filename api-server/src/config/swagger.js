const swaggerJsdoc = require("swagger-jsdoc");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "careers.udugiri.com - Hiring Portal API",
      version: "1.0.0",
      description: "Production-ready SaaS Hiring Portal backend API",
    },

    servers: [
      {
        url: "http://localhost:8080",
        description: "Local Development Server",
      },
    ],
  },

  apis: [path.join(__dirname, "../routes/*.js")],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;