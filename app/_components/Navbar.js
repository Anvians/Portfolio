"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";
import { Home, FolderKanban, Layers3, TerminalSquare, Send } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 80], [0, 8]);

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: FolderKanban, label: "Work", href: "/projects" },
    { icon: Layers3, label: "Stack", href: "/stacks" },
    { icon: TerminalSquare, label: "Console", href: "/console" },
    { icon: Send, label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-fit">
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", damping: 20 }}
        className="glass px-2 py-2 rounded-2xl flex items-center gap-1"
        style={{
          background: "rgba(6,6,26,0.7)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.5), 0 0 0 0.5px rgba(0,229,255,0.1) inset",
        }}
      >
        {navItems.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link key={item.label} href={item.href}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300"
                style={{
                  background: active
                    ? "rgba(0,229,255,0.1)"
                    : "transparent",
                  border: active
                    ? "1px solid rgba(0,229,255,0.2)"
                    : "1px solid transparent",
                }}
              >
                {active && (
                  <motion.div
                    layoutId="nav-glow"
                    className="absolute inset-0 rounded-xl"
                    style={{
                      boxShadow: "0 0 20px rgba(0,229,255,0.15) inset",
                    }}
                  />
                )}
                <Icon
                  size={16}
                  style={{
                    color: active ? "#00e5ff" : "#64748b",
                    filter: active ? "drop-shadow(0 0 6px rgba(0,229,255,0.6))" : "none",
                    transition: "all 0.3s",
                  }}
                />
                <span
                  className="text-xs font-mono uppercase tracking-wider hidden sm:block"
                  style={{
                    color: active ? "#00e5ff" : "#64748b",
                    transition: "color 0.3s",
                  }}
                >
                  {item.label}
                </span>
              </motion.div>
            </Link>
          );
        })}
      </motion.div>
    </nav>
  );
}
