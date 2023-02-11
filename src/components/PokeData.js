import { getSpeciesSprite } from "../apis/pokemon_api";
import { useEffect, useState } from 'react';
import Loading from "./Loading";
import '../styles/pokedata.css'

function PokeData(props) {
  const { id } = props;
  const [ data, setData ] = useState();
  const [ loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      setData(await getSpeciesSprite(id));
      setLoading(false);
    }
    load()
  }, [id])


  if (loading) {
    return <Loading />
  } else {
    return (
      <>
        <h2>PokeData</h2>
        <div className='pokedata'>
            <img alt="pokemon image" src={data}/>
        </div>
      </>
    )
  }
}

export default PokeData
