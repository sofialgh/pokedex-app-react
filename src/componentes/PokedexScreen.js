import React from 'react'
import Stat from './Stat'
import ErrorPokemon from '../img/error.gif'
import LoadingPokemon from '../img/loading.gif'
import '../styles/pokedex.css';

// <div className="pokedex-screen">
//     <img
//         src = {ErrorPokemon}
//         alt = "Hubo un error buscando tu pokemon"
//         className="pokedex-no-screen"
//     />
// </div>

function PokedexScreen({ pokemon, loading, error}){
    //Si hay un error en la petición a la API, se devuelve este componente
    if (error){
        return(
            <div className="pokedex-screen">
                <img
                    src={ErrorPokemon}
                    alt={"Hubo un error buscando tu pokemon"}
                    className="pokedex-no-screen"
                />
            </div>
        )
    }
    //Si no hubo error entonces se retorna este component
        return(
            <div className={"pokedex-screen"}>
                {
                    !pokemon || loading? //Si no hay ningun pokemon o si esta cargando
                        <img
                            src={LoadingPokemon}
                            alt="Aun no hay ningun pokemon"
                            className="pokedex-no-screen"
                        /> :  //se encontro pokemon y se retorna

                    <div className={"pokemon-info"}>
                            <h2 className={"pokemon-name"}>{pokemon.name}</h2>
                          <img
                              className={"pokemon-img"}
                              src={pokemon.sprites.front_default}
                              alt={pokemon.name}
                          />
                            <ul className="pokemon-stats">
                                {pokemon.stats.map(item=> (<Stat key={item.stat.name} item={item}/>
                                    ))}
                            </ul>
                    </div>
                }
            </div>
        )
}
export default PokedexScreen