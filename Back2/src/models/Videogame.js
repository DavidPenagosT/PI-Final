const {DataTypes}=require("sequelize");
const {dataConnection,existTable}=require("../connections/database/connect");


      const videoGames = dataConnection.define('videoGames', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  plataformas: {
    type: DataTypes.STRING,
  },
  imagen: {
    type: DataTypes.BLOB("medium"),
  },
  fechaLanzamiento: {
    type: DataTypes.DATE,
  },
  rating: { 
    type: DataTypes.STRING,
  }
 
},{ timestamps: false,});

existTable(videoGames);

module.exports={videoGames}