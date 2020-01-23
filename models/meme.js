module.exports = function(sequelize, DataTypes) {
  var Meme = sequelize.define("Meme", {
    img: {
      type: DataTypes.BLOB,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return Meme;
};
