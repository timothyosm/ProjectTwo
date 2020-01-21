var db = require("../models");

module.exports = function(app) {

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
