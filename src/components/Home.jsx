import React, { useEffect, useState } from "react";
import Coin from "./Product";
import axios from "axios";

const Home = () => {
  const arr = [1, 3, 6];

  const [temp, setTemp] = useState(0);

  // useEffect(() => {
  //   console.log("Working");
  // }, [temp]);

  useEffect(() => {
    const fetchAllCoins = async () => {
      const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/coins/list",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
        }
      );

      console.log(data);
    };

    fetchAllCoins();
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          return setTemp(temp + 1);
        }}
      >
        PRESS
      </button>
      {arr.map((i) => (
        <Coin name={"Bitcoin"} symbol="BTC" key={i} />
      ))}

      <h1>{temp}</h1>
    </div>
  );
};

export default Home;
