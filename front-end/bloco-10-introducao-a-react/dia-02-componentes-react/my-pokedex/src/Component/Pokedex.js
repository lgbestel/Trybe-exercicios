import React from "react";
import Pokemon from "./Pokemon";
import pokemons from "../data";

class Pokedex extends React.Component {
  render() {
    return (
      <>
      {pokemons.map(({ name, type, id, averageWeight, image }) => <Pokemon key={id} name={name} type={type} averageWeight={averageWeight} image={image} />)}
      </>
    );
  }
}

export default Pokedex;