import useApi from '../../hooks/useApi'
import { connApi, i } from '../../hooks/variables';
import React ,{useState}from 'react';
import {Link} from 'react-router-dom'

import { useParams } from 'react-router-dom';


const JuegosLista=(games)=>{

  return (
    <>
    <div className='cards'>
      {Object.values(games.juegos).map(game => (
        <article key={game.url}>
            <div>
            <h2>{game.name}</h2>
            <img src={game.img} alt={game.name} />
          <p>{game.platforms}</p>
          <p>Generos: {game.generos}</p>
          <Link to={`/videogames/id=${game.url}`}>Ver</Link>
            </div>
        </article>
      ))}
    </div>
  
    </>
  );

}






 const Games = () => {
 
  const [pages,setPages]=useState(1)
    const ruta={}
 
   
    const ident = (useParams());
    
    ident.id===undefined?ruta["raiz"]=`page=${pages}`:ruta[Object.keys(i(ident.id))[0]]=`${ident.id}&page=${pages}`
    
    const { data: games, isLoading, error } = useApi(`${connApi.WEB}/videogames/${Object.values(ruta)}`);

      if (isLoading) {
        return <div>Cargando... </div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
 
 const ListModel={
  name:JuegosLista(games),
  raiz:JuegosLista(games)
 }

 return( <>

 { ListModel[Object.keys(ruta)[0]]}
 {(ruta.name||ruta.raiz)&&<label className='pageCount' htmlFor="">page <br /> number <br /><input  type="number" min={1} max={games.limit} value={pages} onChange={e => setPages(e.target.value)}/> <br /> max <br />page: {games.limit} </label>
 }
  </>
)
  

}

export default Games
