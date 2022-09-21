import React, { createContext, useState } from "react";

export const PokedexContext = createContext();

export function PokedexContextProvider(props) {

  const [pokemon, setPokemon] = useState("")

  const searchPokemon = (number) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
      .then((resp) => resp.json())
      .then((data) => {
        setPokemon(data)
        console.log(data)
      })
      .catch((err) => {
        console.log(err);
        setPokemon("err")
      } )
  };

  return (
    <PokedexContext.Provider value={{searchPokemon, pokemon}}>
      {props.children}
    </PokedexContext.Provider>
  );
}
