import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import StarBackground from "./_components/StarBackground";
import Navbar from "./_components/Navbar";
import CustomCursor from "./_components/CustomCursor";

const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Alex Forge | Digital Architect",
  description: "Futuristic portfolio built with Next.js and Tailwind v4",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={space.className}>
        {/* Layer 0: Background */}
        <StarBackground />

        {/* Layer 1: Global Interactive Elements (Highest Z) */}
        <CustomCursor />
        <Navbar />

        {/* Layer 2: Page Content */}
        <div className="relative z-10 pt-24">
          {children}
        </div>
      </body>
    </html>
  );
}