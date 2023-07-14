import React, { useEffect, useState } from "react";
import Coin from "./Product";
import axios from "axios";
import Loader from "./Loader";

const Home = () => {
  // const arr = [1, 3, 6];

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   console.log("Working");
  // }, [temp]);

  useEffect(() => {
    const fetchAllCoins = async () => {
      try {
        const { data } = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr",
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods":
                "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            },
          }
        );

        console.log(data);
        setCoins(data);
        setLoading(false);
      } catch (error) {

        alert("not Working");
      }
    };

    fetchAllCoins();
  }, []);

  return (
    <div className="home">
      {loading ? (
        <Loader />
      ) : (
        coins.map((i) => (
          <Coin
            name={i.name}
            symbol={i.symbol}
            key={i.id}
            imgSrc={i.image}
            price={i.current_price}
          />
        ))
      )}
    </div>
  );
};

export default Home;
