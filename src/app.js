const express = require("express");
const routes = require("./routes");
const logger = require("morgan");
const path = require("path");
const session = require("express-session");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(session({
    secret: 'my first social network project',
    resave: false,
    saveUninitialized: true,
}))


//Rotas
app.use("/", routes);

//Servidor
app.listen(4000, () => console.log(`🚀 Server run on port 4000`));
