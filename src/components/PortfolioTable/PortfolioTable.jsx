function PortfolioTable({ portfolio, onDelete }) {
  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="text-left p-4 font-semibold text-gray-600">Symbol</th>
            <th className="text-left p-4 font-semibold text-gray-600">Quantity</th>
            <th className="text-left p-4 font-semibold text-gray-600">Buy Price</th>
            <th className="text-left p-4 font-semibold text-gray-600">Purchase Date</th>
            <th className="text-left p-4 font-semibold text-gray-600">Total</th>
            <th className="text-right p-4 font-semibold text-gray-600">Action</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {portfolio.map((stock) => {
            const quantity = Number(stock.quantity) || 0;
            const buyPrice = Number(stock.buyPrice) || 0;
            const total = quantity * buyPrice;

            return (
              <tr key={stock.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-4 font-semibold text-gray-900">{stock.symbol}</td>
                <td className="p-4 text-gray-700">{quantity}</td>
                <td className="p-4 text-gray-700">${buyPrice.toFixed(2)}</td>
                <td className="p-4 text-gray-700">{stock.purchaseDate}</td>
                <td className="p-4 font-semibold text-gray-900">${total.toFixed(2)}</td>
                <td className="p-4 text-right">
                  <button
                    onClick={() => onDelete(stock.id)}
                    className="px-3 py-1.5 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600 transition-colors focus:ring-2 focus:ring-red-400 focus:outline-none"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {portfolio.length === 0 && (
        <div className="p-8 text-center text-gray-500">Your portfolio is empty.</div>
      )}
    </div>
  );
}

export default PortfolioTable;