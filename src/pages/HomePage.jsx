import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function HomePage() {

 const [pokemonList, setPokemonList] = useState();
 const [loading , setLoading] = useState(false);

 useEffect(() => {
  
 },[])

  return (
    <>
    {loading && <div>Loading...</div>
      }
      <h1 className="my-5">Home page</h1>
    </>
  );
}
