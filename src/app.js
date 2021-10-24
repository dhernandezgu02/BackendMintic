const express = require("express");
const cors = require("cors");
// import exphbs from "express-handlebars";
// import path from "path";
// import session from "express-session";
// import methodOverride from "method-override";
// import flash from "connect-flash";
// import passport from "passport";
// import morgan from "morgan";
// import MongoStore from "connect-mongo";

// import { createAdminUser } from "./libs/createUser";
const config = require("./config");

const productsRoutes = require("./routes/products.routes");
const userRoutes = require("./routes/users.routes");
const salesRoutes = require("./routes/sales.routes");
// import "./config/passport";

// Initializations
const app = express();
// createAdminUser();

// settings
app.set("port", config.PORT);
// app.set("views", path.join(__dirname, "views"));
// app.engine(
//   ".hbs",
//   exphbs({
//     defaultLayout: "main",
//     layoutsDir: path.join(app.get("views"), "layouts"),
//     partialsDir: path.join(app.get("views"), "partials"),
//     extname: ".hbs",
//   })
// );
// app.set("view engine", ".hbs");

// middlewares
app.use(cors());
app.use(express.json());
// app.use(morgan("dev"));
// app.use(express.urlencoded({ extended: false }));
// app.use(methodOverride("_method"));
// app.use(
//   session({
//     secret: "secret",
//     resave: true,
//     saveUninitialized: true,
//     store: MongoStore.create({ mongoUrl: config.MONGODB_URI }),
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash());

// Global Variables
// app.use((req, res, next) => {
//   res.locals.success_msg = req.flash("success_msg");
//   res.locals.error_msg = req.flash("error_msg");
//   res.locals.error = req.flash("error");
//   res.locals.user = req.user || null;
//   next();
// });

// routes
app.use(productsRoutes);
app.use(userRoutes);
app.use(salesRoutes);
// static files
// app.use(express.static(path.join(__dirname, "public")));

// app.use((req, res) => {
//   res.render("404");
// });

module.exports = app;
