import { useEffect, useState } from "react";
import {
  getPortfolio,
  removeFromPortfolio,
  addToPortfolio,
} from "../../services/portfolioService";
import PortfolioTable from "../../components/PortfolioTable/PortfolioTable";
import AddStockForm from "../../components/AddStockForm/AddStockForm";

function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadPortfolio = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getPortfolio();
      setPortfolio(data);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPortfolio();
  }, []);

  // Yeni səhm əlavə etmə funksiyası
  const handleAddStock = async (newStock) => {
    try {
      setError(null);
      const addedStock = await addToPortfolio(newStock);
      // Şəbəkə sorğusu yenidən atılmadan UI anında yenilənir
      setPortfolio((prev) => [...prev, addedStock]);
      setIsModalOpen(false); // Modal açılıbsa bağlayırıq
    } catch (err) {
      console.error(err);
      setError("Failed to add stock. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    const previousPortfolio = [...portfolio];
    setPortfolio((prev) => prev.filter((item) => item.id !== id));

    try {
      await removeFromPortfolio(id);
    } catch (err) {
      console.error(err);
      setError("Failed to delete stock. Reverting change.");
      setPortfolio(previousPortfolio);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Portfolio</h1>
          <p className="text-gray-500 mt-2">Stocks you currently own.</p>
        </div>

        {/* Yeni səhm əlavə etmə düyməsi */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          + Add Stock
        </button>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {loading ? (
        <div className="p-8 text-center text-gray-500">
          Loading portfolio...
        </div>
      ) : (
        <PortfolioTable portfolio={portfolio} onDelete={handleDelete} />
      )}

      {/* Modal / Form komponenti */}
      {isModalOpen && (
        <AddStockForm
          onClose={() => setIsModalOpen(false)}
          onAdd={handleAddStock}
        />
      )}
    </div>
  );
}

export default Portfolio;
