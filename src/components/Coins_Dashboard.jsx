import { useState, useEffect } from 'react';
import CoinCard from './CoinCard';

const Coins_Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Função para buscar os dados
    const fetchCoins = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false'
        );
        const data = await response.json();
        setCoins(data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar moedas:", error);
        setLoading(false);
      }
    };

    fetchCoins();
  }, []); // [] significa que executa apenas uma vez ao carregar a página

  return (
    <div className="p-10 bg-slate-900 pb-20">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-white tracking-tight">
          Crypto <span className="text-blue-500">Live</span>
        </h1>
        <p className="text-slate-400 mt-2">Dados em tempo real do mercado global</p>
      </header>

      {loading ? (
        /* Skeleton Screen com Tailwind */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-40 bg-slate-800 rounded-xl"></div>
          ))}
        </div>
      ) : (
        /* Grid de Cards Reais */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coins.map((coin) => (
            <CoinCard 
              key={coin.id}
              name={coin.name}
              symbol={coin.symbol}
              price={coin.current_price}
              change={coin.price_change_percentage_24h}
              icon={coin.image} // A API envia a URL da imagem
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Coins_Dashboard;