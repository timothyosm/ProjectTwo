var express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var db = require("./models");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(express.static("uploads"));

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
