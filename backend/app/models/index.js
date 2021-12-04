const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.books = require("./books.model.js")(mongoose);
db.hostal = require("./hostal.model.js")(mongoose);
db.tutorial = require("./tutorial.model.js")(mongoose);
db.users = require("./users.model.js")(mongoose);
module.exports = db;