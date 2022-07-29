 import React, {useState} from 'react'

 function PokemonForm({setPokemonId,setLoading,setError}){
    const [pokemon, setPokemon ] = useState('')
     const handleSubmit = event => {
        event.preventDefault()

     if(pokemon!==''){
         setLoading(true)
         const pokemonId = window.isNaN(parseInt(pokemon))?pokemon.toLowerCase():pokemon
         setPokemonId(pokemonId)
         setPokemon('')
         return
     }
     setError(true)
 }
return(
    <form className="pokemon-form" onSubmit={handleSubmit}>
        <input
            className="pokemon-input"
            type="text"
            name="pokemon"
            value={pokemon}
            placeholder="Busca tu pokemon"
            onChange={e => setPokemon(e.target.value)}
            autoComplete="off"
        />
        <input type="submit" className="pokemon-btn" value=""/>
    </form>
)

 }

 export default PokemonForm