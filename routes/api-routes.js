var db = require("../models");
const uuidv4 = require("uuid/v4");
const multer = require("multer");
const axios = require("axios");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, __dirname + "/../uploads/");
  },
  filename: function(req, file, cb) {
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    cb(null, file.fieldname + "-" + Date.now() + "." + extension);
  }
});

const upload = multer({ storage: storage });

module.exports = function(app) {
  app.get("/api/memes/", function(req, res) {
    db.Meme.findAll({}).then(function(dbMeme) {
      res.json(dbMeme);
      app.post("/upload", upload.single("file"), async (req, res) => {
        try {
          const image = req.file;

          if (!image) {
            res.status(400).send({
              status: false,
              data: "No file is selected."
            });
          } else {
            res.send({
              status: true,
              message: "File is uploaded.",
              data: {
                name: image.filename,
                mimetype: image.mimetype,
                size: image.size
              }
            });
          }
        } catch (err) {
          res.status(500).send(err);
        }
      });

      app.post("/download", async (req, res) => {
        const url = req.body.link;
        const fileName = "file-" + new Date().getTime() + ".png";
        const newFilePath = path.join(__dirname, "/../uploads/" + fileName);
        const writer = fs.createWriteStream(newFilePath);

        const response = await axios({
          url: url,
          method: "GET",
          responseType: "stream"
        });

        response.data.pipe(writer);

        res.json({
          path: fileName
        });
      });
      // const http = require("http");
      // const fs = require("fs");
      // const imageId = uuidv4();
      // const fileName = __dirname + "/../uploads/" + imageId + ".png";

      // const file = fs.createWriteStream(fileName, "base64");
      // const request = http.get(req.body.link, function(response) {
      //   response.pipe(file);
      //   console.log(imageId + ".png");

      //   res.json({
      //     url: imageId + ".png"
      //   });
      // });

      app.get("/api/memes/", function(req, res) {
        db.Meme.findAll({}).then(function(dbMeme) {
          res.json(dbMeme);
        });
      });

      // app.post("/api/memes", function(req, res) {
      //   console.log(req.body);
      //   db.Meme.create({
      //     IMG: req.body.convMeme
      //   })
      //     .then(function(dbMeme) {
      //       res.json(dbMeme);
      //     });
      // });

      app.post("/api/memes/", (req, res) =>
        db.Meme.create({
          img: req.body.img
        }).then(result => res.json(result))
      );
    });
  });
};
