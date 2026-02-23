import axios from "axios";
import { useEffect, useState } from "react";

export default function Card({ name, url }) {
  const [pokemonDetails, setPokemonDetails] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setPokemonDetails(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(`ERRORE: ${err.message}`));
  }, []);

  return (
    <>
      <div className="col">
        <div className="card p-2">
          <h1>{name}</h1>
        </div>
      </div>
    </>
  );
}
