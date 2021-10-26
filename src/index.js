const app = require("./app");
require("./database");
console.log(app.get("env"));

// Server is listening
app.listen(app.get("port"));

console.log("Server on port", app.get("port"));
console.log("Environment:", process.env.NODE_ENV);
