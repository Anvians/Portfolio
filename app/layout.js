import "./globals.css";
import StarBackground from "./_components/StarBackground";
import Navbar from "./_components/Navbar";
import CustomCursor from "./_components/CustomCursor";
import CommandMenu from "./_components/CommandMenu";
import StatusTicker from "./_components/StatusTicker";

export const metadata = {
  title: "Ankit Sharma | Digital Architect",
  description: "Full-stack developer and AI/ML engineer crafting high-frequency digital systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "Syne, sans-serif" }}>
        {/* Layer 0: Cosmos background */}
        <StarBackground />

        {/* Layer 1: Global interactive */}
        <CustomCursor />
        <CommandMenu />
        <Navbar />
        <StatusTicker />

        {/* Layer 2: Page content */}
        <div className="relative z-10 pt-24 pb-10">
          {children}
        </div>

        {/* ⌘K hint */}
        <div
          className="fixed bottom-8 right-6 z-50 hidden md:flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.2em]"
          style={{ color: "rgba(255,255,255,0.15)" }}
        >
          <kbd
            className="px-1.5 py-0.5 rounded"
            style={{ border: "1px solid rgba(255,255,255,0.1)", fontSize: "9px" }}
          >
            ⌘K
          </kbd>
          <span>command menu</span>
        </div>
      </body>
    </html>
  );
}
