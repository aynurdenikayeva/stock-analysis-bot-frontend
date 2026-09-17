import { useState } from "react";
import HistoryTable from "../../components/HistoryTable/HistoryTable";
import { getStockHistory } from "../../services/historyService";

function History() {
  const [symbol, setSymbol] = useState("");
  const [history, setHistory] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!symbol.trim()) {
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await getStockHistory(symbol.toUpperCase());

      setHistory(data);
    } catch (error) {
      console.error(error);

      setError("History could not be loaded.");
      setHistory([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Analysis History</h1>

        <p className="text-gray-500 mt-2">
          View previous stock analysis results.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-3 mb-8">
        <input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          placeholder="Enter stock symbol e.g. AAPL"
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </form>
      {error && (
        <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg">
          {error}
        </div>
      )}

      <HistoryTable history={history} />
    </div>
  );
}

export default History;
