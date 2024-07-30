
const ConnGame = require("../connections/videogames/ConnGame")
const { ValKey } = require("./utilidades")
const { reqsGame } = require("./utilidades");
const { i } = require("../routes/funcionEspecial")



const inicio = async (req, res) => {

  const initial = []

  try {
    await ConnGame(`?page=${i("",req).page}&page_size=10`).then(datos => {

      for (const games of datos.juegos) {
        const { name, genres, background_image, id } = games
  
  
        initial.push({
          img: background_image||"/favicon.ico",
          url: id,
          name: name,
          platforms: ValKey(games, "platform", "name").join(","),
          generos: ValKey(genres, "name").join(","),
        })
      }
  
      res.json({juegos:initial,limit:Math.ceil(datos.limit/10)})
    })
  } catch (error) {
    res.sendStatus(404)
  }

}

const urlID = async (req, res) => {
  const { id } = i("idOrName", req)
  const initial = []

  if (!id) {

    return res.sendStatus(404)
  }

  await ConnGame(`/${id}?`, "games", 1).then(games => {
    try {
      const { name, genres, background_image, id, platforms, description_raw, ratings, rating_top, rating, release } = games

      initial.push({
        img: background_image||"/favicon.ico",
        url: id,
        name: name,
        platform: ValKey(platforms, "platform", "name").join(","),
        generos: ValKey(genres, "name").join(","),
        requisitos: reqsGame(platforms),
        details: description_raw,
        fechaLanzamiento: release,
      })

      return res.json(initial[0])
    } catch (e){
      console.error(e)
    }
  })

}

const urlName = async (req, res) => {


  const { name, page } = i("idOrName", req)
  
  if (!name) {
   
    
  }
  try {
    const initial = []
   
    await ConnGame(`?search=${name}${page === undefined ? b = "" : "&page=" + page}&page_size=15`).then(data=>{
    
    for (const games of data.juegos) {
      const { name, genres, background_image, id } = games


      initial.push({
        img: background_image||"/favicon.ico",
        url: id,
        name: name,
        platforms: ValKey(games, "platform", "name").join(","),
        generos: ValKey(genres, "name").join(","),
      })


    }



    return res.json({juegos:initial,limit:data.limit})})
  } catch {
    
    res.sendStatus(404)
  }
}



module.exports = { inicio, urlName, urlID };




