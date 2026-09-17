import { useEffect, useState } from "react";
import WatchlistCard from "../../components/WatchlistCard/WatchlistCard";
import {
  getWatchlist,
  removeFromWatchlist,
  addToWatchlist,
} from "../../services/watchlistService";

function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);
  const [symbol, setSymbol] = useState("");

  const loadWatchlist = async () => {
    try {
      const data = await getWatchlist();
      setWatchlist(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadWatchlist();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!symbol.trim()) return;

    try {
      await addToWatchlist(symbol.toUpperCase());
      setSymbol("");
      await loadWatchlist();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await removeFromWatchlist(id);
      await loadWatchlist();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Watchlist</h1>
        <p className="text-gray-500 mt-2">Stocks you want to monitor.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-3 mb-8">
        <input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          placeholder="Enter stock symbol e.g. NVDA"
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Add Stock
        </button>
      </form>

      <div className="grid gap-4">
        {watchlist.map((stock) => (
          <WatchlistCard key={stock.id} stock={stock} onDelete={handleDelete} />
        ))}
      </div>

      {watchlist.length === 0 && (
        <div className="text-center text-gray-500 mt-8">
          Your watchlist is empty.
        </div>
      )}
    </div>
  );
}

export default Watchlist;
