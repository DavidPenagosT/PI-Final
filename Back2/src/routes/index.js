const { Router } = require('express');
const {inicio,urlID, urlName} = require('../controllers/search');
const cors = require("cors");
const {i,iTest} = require("./funcionEspecial")



const router = Router();
router.use(cors({origin:["http://localhost:3000", "http://localhost:3012"], credentials: true}))


router.get("/videogames", (req, res) => {

        inicio(req, res)

})

router.get("*/:idOrName",  (req, res) => {
  
   
    const respuestas = {
        name: urlName,
         id:  urlID,
         page:  inicio
        }
 try{

        const b=Object.keys(i("idOrName",req))
        const c=Object.values(i("idOrName",req))[0]
        if(c[0]){
            return respuestas[b[0]](req,res)
        }else{
           return res.sendStatus(404)
        }
   

}catch{
    res.sendStatus(404)
}
    
 
})




module.exports = router;


