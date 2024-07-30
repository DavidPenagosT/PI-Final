const { videogameKey } = require("dotenv").config().parsed
const URL = `https://api.rawg.io/api/`
const axios = require("axios") // no se ha instalado axios aún



const apiConnectGame = async(a, b="games",c="") => {
    try{
        
        if(typeof a!=="string") {
            a=""
        }
        


       
        console.log(URL+b+a)
        return await axios.get(`${URL+b}${a}&key=${videogameKey}`)
        .then(response => {
          /* console.log(c===""?response.data.results:response.data) */
          return c===""?{juegos:response.data.results,limit:response.data.count}:response.data
       
        })
        .catch(error => {
          console.error('Error al obtener los datos:');
        });           
            
            
    } catch{
        
        const err = {error: "not found APIvideoGames"}
        return console.log(err)
        
    }
}

module.exports = apiConnectGame;