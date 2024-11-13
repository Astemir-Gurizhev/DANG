import { useEffect, useState } from "react";
import cn from "./Coins.module.css";

interface Coin {
  id: string;
  name: string;
  symbol: string;
  price_usd: string;
}

const Coins = () => {
  const [coins, setCoins] = useState<Coin[]>([]); 
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch("https://api.coinlore.net/api/tickers/?start=200&limit=100");
        const data = await response.json();
        setCoins(data.data);
      } catch (error) {
        console.error("Error fetching coins:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
  }, []);

  if (loading) {
    return (
      <div className={cn.loader}>
        <div className={cn.spinner}></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="coins">
      <h2 className={cn.title}>COINS</h2>
      <ul className={cn.list}>
        {coins.map((coin) => (
          <li key={coin.id}>
            {coin.name} ({coin.symbol}): ${coin.price_usd}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Coins };