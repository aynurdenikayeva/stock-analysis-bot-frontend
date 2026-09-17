import { NavLink, Outlet } from "react-router";
function MainLayout() {
  const menuItems = [
    { id: "dashboard", name: "Dashboard", path: "/dashboard", icon: "📊" },
    { id: "portfolio", name: "Portfolio", path: "/portfolio", icon: "💼" },
    { id: "analysis", name: "Analyze", path: "/analysis", icon: "📈" }, // Router-də path "/analysis" olduğu üçün bura da eyni yazıldı
    { id: "watchlist", name: "Watchlist", path: "/watchlist", icon: "⭐" },
    { id: "history", name: "History", path: "/history", icon: "📜" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      {/* SOL NAVİQASİYA PANALİ (SIDEBAR) */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full z-40">
        {/* Logo Bölməsi */}
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-2xl font-black text-blue-600 tracking-wider flex items-center gap-2">
            🚀 STOCKBOT
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            Ağıllı İnvestisiya Köməkçisi
          </p>
        </div>

        {/* Menyu Keçidləri */}
        <nav className="flex-1 p-4 space-y-1.5">
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-blue-50 text-blue-600 shadow-sm"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Alt Bilgi */}
        <div className="p-4 border-t border-gray-100 text-xs text-gray-400 text-center">
          v1.0.0 • Aynur StockBot
        </div>
      </aside>
      {/* SAĞ MƏZMUN SAHƏSİ */}
      <main className="flex-1 ml-64 p-8 min-h-screen">
        {/* Aktiv olan marşrutun komponenti (Dashboard, Portfolio və s.) avtomatik gəlib bura oturacaq */}
        <div className="animate-fadeIn">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
export default MainLayout;
