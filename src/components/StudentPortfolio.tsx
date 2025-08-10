

// Exact color palette sampled from screenshot
const colors = {
  bg: "#000000",
  card: "#1c1c1c",
  textPrimary: "#ffffff",
  textSecondary: "#b3b3b3",
  navBg: "rgba(0, 0, 0, 0.6)",
  border: "#2a2a2a",
  accent: "#ffffff",
};

export default function StudentPortfolio() {
  return (
    <div style={{ backgroundColor: colors.bg, color: colors.textPrimary, minHeight: "100vh" }}>
      {/* Top Navigation */}
      <header style={{ backgroundColor: colors.navBg, backdropFilter: "blur(10px)" }} className="sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div style={{ color: colors.textPrimary }} className="font-semibold text-lg">For you</div>
            <nav className="hidden sm:flex gap-4 text-sm" style={{ color: colors.textSecondary }}>
              <button className="hover:text-white">AG.learn</button>
              <button className="hover:text-white">1111</button>
              <button className="hover:text-white">1111_Layer styles</button>
              <button className="hover:text-white">PS</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Content Grid */}
      <main className="max-w-5xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{ backgroundColor: colors.card, borderRadius: "16px" }} className="overflow-hidden">
            <div className="h-48 bg-gray-700" />
            <div className="p-4">
              <h3 style={{ color: colors.textPrimary }} className="font-semibold text-lg">Project Title {i+1}</h3>
              <p style={{ color: colors.textSecondary }} className="text-sm mt-1">Project description goes here with matching color scheme.</p>
            </div>
          </div>
        ))}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-4 left-0 right-0 flex justify-center">
        <div style={{ backgroundColor: colors.card, border: `1px solid ${colors.border}` }} className="w-[94%] max-w-4xl rounded-2xl p-3 flex items-center justify-between shadow-lg">
          <button className="flex-1 text-center" style={{ color: colors.accent }}>🏠</button>
          <button className="flex-1 text-center" style={{ color: colors.accent }}>🔍</button>
          <button className="px-4 py-3 bg-white rounded-full shadow-xl">➕</button>
          <button className="flex-1 text-center" style={{ color: colors.accent }}>📁</button>
          <button className="flex-1 text-center" style={{ color: colors.accent }}>👤</button>
        </div>
      </nav>
    </div>
  );
}
