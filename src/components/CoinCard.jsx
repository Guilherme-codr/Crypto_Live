const CoinCard = ({ name, symbol, price, change, icon }) => {
  const isPositive = change > 0;

  return (
    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <img 
            src={icon} 
            alt={name} 
            className="w-10 h-10 rounded-full bg-slate-700 p-1"
          />
          <div>
            <h3 className="font-bold text-white">{name}</h3>
            <span className="text-slate-400 text-sm uppercase">{symbol}</span>
          </div>
        </div>
      </div>
      
      <div className="mt-2">
        <p className="text-2xl font-mono text-white">${price.toLocaleString()}</p>
        <span className={`text-sm font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {isPositive ? '↑' : '↓'} {Math.abs(change)}%
        </span>
      </div>
    </div>
  );
};

export default CoinCard;