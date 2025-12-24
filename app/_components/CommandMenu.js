"use client";
import { useState, useEffect } from "react";
import { Command } from "cmdk"; // Install: npm install cmdk
import { motion, AnimatePresence } from "framer-motion";

export default function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full max-w-xl glass rounded-2xl overflow-hidden p-4"
          >
            <Command className="bg-transparent outline-none w-full">
              <Command.Input 
                placeholder="Search command or project..." 
                className="w-full bg-transparent p-3 text-neon-cyan outline-none border-b border-white/10"
              />
              <Command.List className="mt-4 max-h-[300px] overflow-y-auto">
                <Command.Empty>No results found.</Command.Empty>
                <Command.Group heading="Navigation" className="text-xs text-gray-500 mb-2">
                  <Command.Item className="p-3 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">Go to Projects</Command.Item>
                  <Command.Item className="p-3 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">Download CV</Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}