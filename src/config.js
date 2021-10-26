// const { config } = require("dotenv");
// config();

const configurations = {
  PORT: process.env.PORT || 4000,
  // MONGODB_HOST: process.env.MONGODB_HOST || "localhost",
  // MONGODB_DATABASE: process.env.MONGODB_DB || "products-app",
  // MONGODB_URI: `mongodb://${process.env.MONGODB_HOST || "localhost"}/${
  //   process.env.MONGODB_DATABASE || "products-app"
  // }`,
  MONGODB_HOST: "192.168.0.4",
  MONGODB_DATABASE: "products-app",
  MONGODB_URI: `mongodb://${"192.168.0.4"}/${"products-app"}`,
};

module.exports = configurations;
