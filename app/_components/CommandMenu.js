"use client";
import { useState, useEffect } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import { Home, FolderKanban, Layers3, TerminalSquare, Send, FileDown, Github, Twitter } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (fn) => {
    setOpen(false);
    fn();
  };

  const commands = [
    {
      group: "Navigation",
      items: [
        { icon: Home, label: "Go Home", action: () => router.push("/") },
        { icon: FolderKanban, label: "View Projects", action: () => router.push("/projects") },
        { icon: Layers3, label: "Tech Stack", action: () => router.push("/stacks") },
        { icon: TerminalSquare, label: "Open Console", action: () => router.push("/console") },
        { icon: Send, label: "Contact Me", action: () => router.push("/contact") },
      ],
    },
    {
      group: "Actions",
      items: [
        { icon: FileDown, label: "Download CV", action: () => window.open("/cv.pdf", "_blank") },
        { icon: Github, label: "GitHub Profile", action: () => window.open("https://github.com/Anvians", "_blank") },
      ],
    },
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[200]"
            style={{ background: "rgba(2,2,10,0.8)", backdropFilter: "blur(8px)" }}
          />
          <div className="fixed inset-0 z-[201] flex items-start justify-center pt-[20vh] px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 400 }}
              className="w-full max-w-lg rounded-[1.5rem] overflow-hidden"
              style={{
                background: "rgba(6,6,26,0.95)",
                backdropFilter: "blur(30px)",
                border: "1px solid rgba(0,229,255,0.15)",
                boxShadow: "0 0 80px rgba(0,229,255,0.1), 0 40px 80px rgba(0,0,0,0.8)",
              }}
            >
              {/* Header */}
              <div
                className="px-4 pt-4 pb-2"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="font-mono text-[10px] tracking-[0.3em] uppercase"
                    style={{ color: "rgba(0,229,255,0.5)" }}
                  >
                    ⌘K COMMAND_CENTER
                  </span>
                </div>
              </div>

              <Command className="bg-transparent">
                <div className="px-4 py-3">
                  <Command.Input
                    placeholder="Search commands..."
                    className="w-full bg-transparent text-slate-100 text-sm outline-none placeholder:text-slate-600 font-mono"
                  />
                </div>

                <Command.List className="pb-4 max-h-[360px] overflow-y-auto">
                  <Command.Empty className="px-4 py-8 text-center font-mono text-xs text-slate-600">
                    No commands found.
                  </Command.Empty>

                  {commands.map((group) => (
                    <Command.Group key={group.group}>
                      <div
                        className="px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em]"
                        style={{ color: "rgba(124,58,237,0.7)" }}
                      >
                        {group.group}
                      </div>
                      {group.items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Command.Item
                            key={item.label}
                            onSelect={() => runCommand(item.action)}
                            className="mx-2 px-3 py-2.5 rounded-xl cursor-pointer flex items-center gap-3 transition-all"
                            style={{ "--hover-bg": "rgba(0,229,255,0.06)" }}
                          >
                            <div
                              className="p-1.5 rounded-lg"
                              style={{
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.08)",
                              }}
                            >
                              <Icon size={13} style={{ color: "#64748b" }} />
                            </div>
                            <span className="text-sm text-slate-300">{item.label}</span>
                          </Command.Item>
                        );
                      })}
                    </Command.Group>
                  ))}
                </Command.List>

                <div
                  className="px-4 py-3 flex items-center justify-between"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <span className="font-mono text-[10px] text-slate-600">↑↓ navigate · ↵ select · esc close</span>
                  <span
                    className="font-mono text-[10px]"
                    style={{ color: "rgba(0,229,255,0.4)" }}
                  >
                    SYSTEM_v4
                  </span>
                </div>
              </Command>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
