module.exports = function(sequelize, DataTypes) {
  var Meme = sequelize.define("Meme", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },
    img: DataTypes.TEXT('long'),
    
    score: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });
  return Meme;
};
