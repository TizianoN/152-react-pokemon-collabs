import axios from "axios";
import { useEffect, useState } from "react";

export default function Card({ name, url }) {
  const [pokemonDetails, setPokemonDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        const imageUrl = res.data?.sprites.front_default;
        const principalType = res.data?.types[0].type.name;
        setPokemonDetails({ imageUrl, principalType });
      })
      .catch((err) => console.log(`ERRORE: ${err.message}`))
      .finally(() => setIsLoading(false));
  }, []);

  const colorClass = (type) => {
    if (type === "grass") return "success";
    if (type === "fire") return "danger";
    if (type === "water") return "primary";
    if (type === "bug") return "secondary";
    if (type === "normal") return "warning";
  };

  return (
    <>
      <div className="col">
        <div
          className={
            "card rounded-5 border border-5 bg-dark" +
            ` border-${colorClass(isLoading ? "primary" : pokemonDetails.principalType)}`
          }
        >
          <div className="card-body">
            <div className="card-title">
              <h1 className="text-center text-light">{name}</h1>
            </div>
            {isLoading ? (
              <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <>
                <img
                  src={pokemonDetails.imageUrl}
                  alt={name}
                  className="card-img-top"
                />
                <div className="card-text">
                  <h2
                    className={
                      "text-center" +
                      ` text-${colorClass(pokemonDetails.principalType)}`
                    }
                  >
                    {pokemonDetails.principalType}
                  </h2>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
