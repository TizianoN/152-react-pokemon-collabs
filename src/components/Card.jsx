import axios from "axios";
import { useEffect, useState } from "react";

export default function Card({ name, url }) {
  const [pokemonDetails, setPokemonDetails] = useState(undefined);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        const imageUrl = res.data?.sprites.front_default;
        const principalType = res.data?.types[0].type.name;
        setPokemonDetails({ imageUrl, principalType });
      })
      .catch((err) => console.log(`ERRORE: ${err.message}`));
  }, []);

  return (
    <>
      <div className="col">
        <div className="card p-2">
          <h1>{name}</h1>
          {pokemonDetails && (
            <>
              <img src={pokemonDetails.imageUrl} alt={name} />
              <h2 className="text-muted text-center">
                {pokemonDetails.principalType}
              </h2>
            </>
          )}
        </div>
      </div>
    </>
  );
}
