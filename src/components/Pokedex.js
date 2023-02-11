
import '../styles/pokedex.css'
import PokeData from './PokeData'
import PokeForm from './PokeForm'
import { useState } from 'react';

function Pokedex() {
  const [ pokemonSpecieId, setPokemonSpecieId ] = useState('7');


  function getSpecieid(id) {
    setPokemonSpecieId(id);
  }

  return (
    <div>
      <h1>Pokedex</h1>      
        <PokeForm  id={'7'} getSpecieIdPokeForm={getSpecieid}/>
        <PokeData id={pokemonSpecieId} />      
    </div>
  )
}

export default Pokedex
