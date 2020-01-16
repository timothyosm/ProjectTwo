module.exports = function (sequelize, DataTypes) {
  var Meme = sequelize.define("Meme", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    ttext: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    btext: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    userid: {
      type: DataTypes.STRING,
      defaultValue: "Personal"
    }
  });
  return Meme;
};
