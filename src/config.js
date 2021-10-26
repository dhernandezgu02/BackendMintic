// const { config } = require("dotenv");
// config();

const configurations = {
  PORT: process.env.PORT || 4000,
  // MONGODB_HOST: process.env.MONGODB_HOST || "localhost",
  // MONGODB_DATABASE: process.env.MONGODB_DB || "products-app",
  // MONGODB_URI: `mongodb://${process.env.MONGODB_HOST || "localhost"}/${
  //   process.env.MONGODB_DATABASE || "products-app"
  // }`,
  MONGODB_HOST: "cluster0.qi5g7.mongodb.net",
  MONGODB_DATABASE: "products-app",
  MONGODB_URI: `mongodb+srv://daniel:daniel1234@cluster0.qi5g7.mongodb.net/products-app?retryWrites=true&w=majority`,
};

module.exports = configurations;
