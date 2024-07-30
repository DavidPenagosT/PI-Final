import useApi from '../../hooks/useApi'
import { connApi } from '../../hooks/variables';
import React from 'react';
import {useParams} from 'react-router-dom'

const JuegosID=({game})=>{

    return (
      <>
         <div className='cardsPresentacion'>
          <article key={game.url}>
              <div>
              <h2>{game.name}</h2>
              <img src={game.img} alt={game.name} />
            <p>{game.platforms}</p>
            <p>Generos: {game.generos}</p>
           
            <p>{game.details}</p>
              <p>{game.rating}</p>
              <p>{game.fechaLanzamiento}</p>
              </div>
          </article>
        
      </div>
      </>
    );
  }
const GamesId = () => {
    
const ident = (useParams());
const { data: game, isLoading, error } = useApi(`${connApi.WEB}/videogames/${ident.id}`);
 

      if (isLoading) {
        return <div>Cargando...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
    
return(<JuegosID game={game}/>)

}

export default GamesId;