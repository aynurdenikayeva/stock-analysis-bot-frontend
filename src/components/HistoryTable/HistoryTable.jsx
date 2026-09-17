function HistoryTable({ history }) {
  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="text-left p-4">Symbol</th>
            <th className="text-left p-4">RSI</th>
            <th className="text-left p-4">MACD</th>
            <th className="text-left p-4">EMA 20</th>
            <th className="text-left p-4">EMA 50</th>
            <th className="text-left p-4">Signal</th>
            <th className="text-left p-4">Date</th>
          </tr>
        </thead>

        <tbody>
          {history.map((item) => (
            <tr key={item.id} className="border-t hover:bg-gray-50">
              <td className="p-4 font-semibold">{item.symbol}</td>

              <td className="p-4">{item.rsi?.toFixed(2)}</td>

              <td className="p-4">{item.macd?.toFixed(4)}</td>

              <td className="p-4">{item.ema20?.toFixed(2)}</td>

              <td className="p-4">{item.ema50?.toFixed(2)}</td>

              <td className="p-4 font-semibold">{item.signal}</td>

              <td className="p-4 text-gray-500">{item.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {history.length === 0 && (
        <div className="p-8 text-center text-gray-500">
          No analysis history found.
        </div>
      )}
    </div>
  );
}

export default HistoryTable;
