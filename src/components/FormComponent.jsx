import React, { useContext, useState } from "react";
import { PokedexContext } from "../context/PokedexContext";

function FormComponent() {
  const { searchPokemon } = useContext(PokedexContext);
  const [number, setNumber] = useState(0);

  return (
    <form>
      <label htmlFor="number" className="block text-xl">
        Put the number of you pokemon
      </label>
      <input
        name="number"
        type={"number"}
        className="text-center border-2 border-black rounded-md p-0.5 mr-2 mt-1"
        onChange={(e) => setNumber(e.target.value)}
      />
      <input
        type={"submit"}
        className="rounded-md p-1 bg-amber-500 cursor-pointer hover:bg-amber-400"
        onClick={(e) => {
          e.preventDefault();
          console.log("hey");
          searchPokemon(number);
        }}
      />
    </form>
  );
}

export default FormComponent;
