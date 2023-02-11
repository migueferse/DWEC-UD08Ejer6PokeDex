import { getPokemonData } from "../apis/pokemon_api";
import Loading from "../components/Loading";
import { useEffect, useState } from 'react';
const DEFAULT_LANGUAGE = '7' // Español

function pokemonsInLanguage(pokemons, language) {
  return pokemons.filter(pokemon => pokemon.local_language_id === language)
}


function PokeForm(props) {
  const { id, getSpecieIdPokeForm } = props;
  const [ data, setData ] = useState();
  const [ loading, setLoading] = useState(true);
  const [ name, setName ] = useState('');
  const [ idIdiom, setIdIdiom] =useState(DEFAULT_LANGUAGE);
  
  useEffect(() => {
    async function load() {
      setLoading(true);
      setData(await getPokemonData());
      setLoading(false);
      setIdIdiom(id);
    }
    load()
  }, [])

  function getSpecieIdByName(name) {
    let list = pokemonsInLanguage(data, idIdiom);
    console.log(list);
    return list.filter(pokemon => pokemon.name === name);  
  
  }
  function handleSubmit(e) {
    e.preventDefault()
    let specieId = getSpecieIdByName(name);
    if (specieId && specieId.length !==0) {
      return getSpecieIdPokeForm(specieId[0].pokemon_species_id);
    }
  }

  function handleChangeIdiom(e) {
    setIdIdiom(e.target.value);
  }

  if(loading) {
    <Loading />
  } else {
    return (
      <div>
        <h2>PokeForm</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre del pokèmon:
            <input type="text" name="name" list="pokemons" value={name} onChange={(e) => setName(e.target.value)}/>
          </label>
          <datalist id="pokemons">
            { /* Your code here */ }
          </datalist>
          <label>
            Lenguaje
            <select onChange={handleChangeIdiom}>
              <option value="7">Español</option>
              <option value="5">Francés</option>
              <option value="6">Alemán</option>
            </select>
          </label>
          <input type="submit" value="Search"/>
        </form>
      </div>
  )
}
}

export default PokeForm
