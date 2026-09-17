function AnalysisCard({ data }) {
  if (!data) {
    return null;
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-gray-500 text-sm">Stock</p>

          <h2 className="text-2xl font-bold text-gray-900">{data.symbol}</h2>
        </div>

        <div className="text-right">
          <p className="text-gray-500 text-sm">Signal</p>

          <p className="text-xl font-bold text-blue-600">{data.signal}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-500 text-sm">RSI</p>
          <p className="text-xl font-semibold">{data.rsi?.toFixed(2)}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-500 text-sm">MACD</p>
          <p className="text-xl font-semibold">{data.macd?.toFixed(4)}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-500 text-sm">EMA 20</p>
          <p className="text-xl font-semibold">{data.ema20?.toFixed(2)}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-500 text-sm">EMA 50</p>
          <p className="text-xl font-semibold">{data.ema50?.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default AnalysisCard;
