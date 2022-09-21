import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import FormComponent from "./components/FormComponent";
import { PokedexContext } from "./context/PokedexContext";
import PokedexComponent from "./components/PokedexComponent";
import ErrorComponent from "./components/ErrorComponent";

function App() {
  const { pokemon } = useContext(PokedexContext);

  return (
    <div className="bg-zinc-700 h-screen">
      <main className="text-center bg-zinc-300 mx-96 h-screen">
        <h1 className="grid text-6xl font-bold text-center">Pokedex</h1>
        <FormComponent />
        <div className="grid place-content-center">
          {pokemon.name ? (
            <PokedexComponent
              img={pokemon.sprites.front_default}
              name={pokemon.name}
              types={pokemon.types}
            />
          ) : (
            ""
          )}
          {pokemon == "err" ? <ErrorComponent /> : ""}
        </div>
      </main>
    </div>
  );
}

export default App;
