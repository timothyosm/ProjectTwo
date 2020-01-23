var db = require("../models");
const uuidv4 = require("uuid/v4");

module.exports = function(app) {
  app.get("/plsdownload", (req, res) => {
    const http = require("http");
    const fs = require("fs");
    const imageId = uuidv4();
    const fileName = "" + imageId + ".png";

    const file = fs.createWriteStream(fileName, "base64");
    const request = http.get(req.body.link, function(response) {
      response.pipe(file);
      res.json({
        imageId
      });
    });

  app.get("/api/memes/", function(req, res) {
    db.Meme.findAll({})
      .then(function(dbMeme) {
        res.json(dbMeme);
      });
  });

  app.post("/api/memes", function(req, res) {
    console.log(req.body);
    db.Meme.create({
      IMG: req.body.downloadLink
    })
      .then(function(dbMeme) {
        res.json(dbMeme);
      });
  });

};
