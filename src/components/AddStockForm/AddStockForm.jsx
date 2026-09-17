import { useState } from "react";

function AddStockForm({ onAdd }) {
  const [formData, setFormData] = useState({
    symbol: "",
    quantity: "",
    purchaseDate: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.symbol || !formData.quantity) return;

    setIsSubmitting(true);

    try {
      await onAdd({
        symbol: formData.symbol.toUpperCase().trim(),
        quantity: Number(formData.quantity),
        purchaseDate:
          formData.purchaseDate || new Date().toISOString().split("T")[0],
      });

      // Formu sıfırla
      setFormData({ symbol: "", quantity: "", purchaseDate: "" });
    } catch (err) {
      console.error("Səhm əlavə edilərkən xəta baş verdi:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl border shadow-sm mb-8"
    >
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Yeni Səhm Əlavə Et
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Simvol
          </label>
          <input
            type="text"
            name="symbol"
            placeholder="Məs: AAPL"
            value={formData.symbol}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Miqdar
          </label>
          <input
            type="number"
            name="quantity"
            placeholder="0"
            value={formData.quantity}
            onChange={handleChange}
            required
            min="1"
            disabled={isSubmitting}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tarix
          </label>
          <input
            type="date"
            name="purchaseDate"
            value={formData.purchaseDate}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:bg-blue-400"
      >
        {isSubmitting ? "Portfelə Əlavə Edilir..." : "Portfelə Əlavə Et"}
      </button>
    </form>
  );
}

export default AddStockForm;
