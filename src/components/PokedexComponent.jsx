import React from "react";

function PokedexComponent({ img, name, types }) {
  return (
    <div className="w-96 grid grid-cols-2 border-2 border-red-600 mt-2 rounded-md bg-white">
      <picture className="border-x-2 mr-4">
        <img src={img} className="w-96" />
      </picture>

      <div>
        <h2 className="capitalize text-4xl font-semibold">{name}</h2>
        <h4 className="text-3xl mt-1">Types: </h4>
        <ul className="ml-1">
          {types.map((type) => (
            <li key={type.slot} className="capitalize text-xl mt-2">
              {type.type.name}
            </li>
          ))}
        </ul>
        <span>
          For more information
          <a href={"https://pokemon.fandom.com/wiki/" + name} className="text-blue-600" target={'_blank'}> Click Here</a>
        </span>
      </div>
    </div>
  );
}

export default PokedexComponent;
