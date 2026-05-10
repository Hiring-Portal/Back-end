const swaggerJsdoc = require("swagger-jsdoc");

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
        url: process.env.API_BASE_URL || "http://localhost:8080",
        description: "Development Server",
      },
    ],
  },

  apis: ["./src/routes/**/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;