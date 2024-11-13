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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const coinsPerPage = 50; 

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

  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = coins.slice(indexOfFirstCoin, indexOfLastCoin);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className={cn.loader}>
        <div className={cn.spinner}></div>
        <p>Loading...</p>
      </div>
    );
  }

  const totalPages = Math.ceil(coins.length / coinsPerPage);

  return (
    <div className="coins">
      <h2 className={cn.title}>COINS</h2>
      <ul className={cn.list}>
        {currentCoins.map((coin) => (
          <li key={coin.id}>
            {coin.name} ({coin.symbol}): ${coin.price_usd}
          </li>
        ))}
      </ul>

     
      <div className={cn.pagination}>
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? cn.activePage : ""}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export { Coins };