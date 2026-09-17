import { useState } from "react";
import AnalysisCard from "../../components/AnalysisCard/AnalysisCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import { analyzeStock } from "../../services/stockService";

function Analysis() {
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (symbol) => {
    try {
      setLoading(true);
      setError("");

      const data = await analyzeStock(symbol);

      setAnalysis(data);
    } catch (error) {
      setError("Stock analysis could not be completed.");
      setAnalysis(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Stock Analysis</h1>

        <p className="text-gray-500 mt-2">
          Analyze a stock using technical indicators.
        </p>
      </div>

      <SearchBar onSearch={handleSearch} loading={loading} />

      {error && (
        <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg">
          {error}
        </div>
      )}

      <AnalysisCard data={analysis} />
    </div>
  );
}

export default Analysis;
