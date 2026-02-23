import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

export default function HomePage() {

  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then((res) => {
        setPokemonList(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {console.error(err.message);})
      .finally(()=>{
        setLoading(false);
      });


  }, [])

  return (
    <>
      {loading && <div>Loading...</div>
      }
      <h1 className="my-5">Home page</h1>
      <div className="row g-3">
        {pokemonList.map((pokemon) => {
          return (
            <Card key={pokemon.name} name={pokemon.name} url={pokemon.url}/>
          )
        })}
      </div>
    </>
  );
}
