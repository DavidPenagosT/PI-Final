
const {videoGames} = require("../models/Videogame")


const delGame=async(id)=>{
    try {
      const game = await videoGames.destroy({where:{id:id}});
      return game;
    } catch (error) {
      console.error('Error al obtener game:', error);
    }
  }  
  
  const addGame=async(game)=>{
    try {
      console.log(game.estado)
      const game = await videoGames.create({
        nombre:game.nombre,
        descripcion:game.descripcion,
        plataformas:game.plataformas,
        imagen:game.imagen,
        fechaLanzamiento:game.fechaLanzamiento,
        rating:game.rating
        })
      return game;
    } catch (error) {
      console.error('Error al obtener game:', error);
    }
  }  
  
  const upgame=async(games)=>{
    try {
      const game = await videoGames.findOne(games.id);
      const {nombre, descripcion, plataformas, imagen, fechaLanzamiento, rating}=games
      
    
      game.nombre=nombre;
      game.descripcion=descripcion;
      game.plataformas=plataformas;
      game.imagen=imagen;
      game.fechaLanzamiento=fechaLanzamiento;
      game.rating=rating;
      
      
      return await game.save();
    } catch (error) {
      console.error('Error al obtener game:', error);
    }
  }



  module.exports = {delGame, addGame, upgame};