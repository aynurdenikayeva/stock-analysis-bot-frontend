import { useEffect, useState } from "react";
import { getPortfolio } from "../../services/portfolioService";
import { getWatchlist } from "../../services/watchlistService";

<services></services>;

function Dashboard() {
  const [portfolio, setPortfolio] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const portfolioData = await getPortfolio();
        const watchlistData = await getWatchlist();

        setPortfolio(portfolioData);
        setWatchlist(watchlistData);
      } catch (error) {
        console.error(error);
      }
    };

    loadDashboard();
  }, []);

  const totalInvestment = portfolio.reduce((total, stock) => {
    return total + stock.quantity * stock.buyPrice;
  }, 0);

  return (
    <div>
      {/* Header */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>

        <p className="text-gray-500 mt-2">
          Overview of your stock analysis and portfolio.
        </p>
      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Portfolio */}

        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <p className="text-gray-500 text-sm">Portfolio Investment</p>

          <h2 className="text-2xl font-bold mt-2">
            ${totalInvestment.toFixed(2)}
          </h2>
        </div>

        {/* Holdings */}

        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <p className="text-gray-500 text-sm">Holdings</p>

          <h2 className="text-2xl font-bold mt-2">{portfolio.length}</h2>
        </div>

        {/* Watchlist */}

        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <p className="text-gray-500 text-sm">Watchlist</p>

          <h2 className="text-2xl font-bold mt-2">{watchlist.length}</h2>
        </div>
      </div>

      {/* Portfolio Preview */}

      <div className="bg-white rounded-xl border shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-6">Your Holdings</h2>

        {portfolio.length === 0 ? (
          <p className="text-gray-500">Your portfolio is empty.</p>
        ) : (
          <div className="space-y-4">
            {portfolio.map((stock) => (
              <div
                key={stock.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div>
                  <p className="font-bold text-gray-900">{stock.symbol}</p>

                  <p className="text-sm text-gray-500">
                    {stock.quantity} shares
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-semibold">
                    ${(stock.quantity * stock.buyPrice).toFixed(2)}
                  </p>

                  <p className="text-sm text-gray-500">
                    Buy price: ${stock.buyPrice}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
