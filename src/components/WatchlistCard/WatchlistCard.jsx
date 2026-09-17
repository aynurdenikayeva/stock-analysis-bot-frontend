import React from "react";

function WatchlistCard({ stock, onDelete }) {
  return (
    <div className="bg-white border rounded-xl p-5 flex items-center justify-between shadow-sm">
      <div>
        <p className="text-sm text-gray-500">Symbol</p>
        <h3 className="text-xl font-bold text-gray-900">{stock.symbol}</h3>
      </div>
      <button
        onClick={() => onDelete(stock.id)}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        Remove
      </button>
    </div>
  );
}

export default WatchlistCard;
