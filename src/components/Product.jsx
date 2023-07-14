import React from "react";

const Coin = ({ name, symbol }) => {
  return (
    <div>
      <h1>{symbol}</h1>
      <p>{name}</p>
    </div>
  );
};

export default Coin;
