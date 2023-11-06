const express = require("express");
const bodyParser = require("body-parser");




const app = express();


if(process.env.NODE_ENV != "PRODUCTION"){
    require("dotenv").config({path: "Backend/config/config.env"});
}

// using middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// importing routes
const postRoutes = require("./routes/postRouter");
const authRoutes = require("./routes/AuthRouter");

// using routes
app.use("/api/v1", postRoutes);
app.use("/api/v1", authRoutes);
module.exports = app;