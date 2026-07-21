"use client";

import React, { useState, useEffect } from "react";
import { useSound } from "@/context/SoundContext";
import { motion, AnimatePresence } from "framer-motion";

interface BootSequenceProps {
  onComplete: () => void;
}

const images = [
  "/gta_art_1.png",
  "/gta_art_2.png",
  "/gta_art_3.png",
  "/backgroung.jpg"
];

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const { playHover, playBootUp, startBackgroundMusic, playGlitch } = useSound();
  const [stage, setStage] = useState<"click-to-start" | "loading" | "ready" | "entering">("click-to-start");
  const [progress, setProgress] = useState(0);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  // 1. Image Slideshow Interval (slow fade, changes every 6s)
  useEffect(() => {
    if (stage === "click-to-start") return;
    const interval = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [stage]);

  // 2. Progress bar increments (simulating realistic loading jumps/stalls)
  useEffect(() => {
    if (stage !== "loading") return;
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setStage("ready");
          return 100;
        }

        let step = 1;
        if (p < 30) {
          step = Math.floor(Math.random() * 3) + 2; // 2-4%
        } else if (p >= 30 && p < 45) {
          step = Math.random() > 0.7 ? 1 : 0; // stall/slow down
        } else if (p >= 45 && p < 75) {
          step = Math.floor(Math.random() * 4) + 3; // fast spurt
        } else if (p >= 75 && p < 90) {
          step = Math.random() > 0.8 ? 0 : 1; // slow down near end
        } else {
          step = Math.floor(Math.random() * 2) + 2; // finish off
        }

        return Math.min(100, p + step);
      });
    }, 150);
    return () => clearInterval(interval);
  }, [stage]);

  // 3. Handle Connect / Start Loading
  const handleStartLoading = () => {
    playGlitch();
    setStage("loading");
    startBackgroundMusic();
  };

  // 4. Handle entering portfolio
  const handleEnter = () => {
    setStage("entering");
    playBootUp();
    setTimeout(onComplete, 1200);
  };

  // 5. Handle direct skip to site
  const handleSkip = () => {
    startBackgroundMusic();
    onComplete();
  };

  return (
    <div 
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center select-none overflow-hidden p-4 sm:p-6"
      style={{
        background: "radial-gradient(circle at center, #1b0f33 0%, #070310 100%)"
      }}
    >
      {/* Direct Skip Button */}
      {stage !== "click-to-start" && stage !== "entering" && (
        <button
          onClick={handleSkip}
          onMouseEnter={playHover}
          className="absolute top-6 right-6 z-50 px-4 py-2 border border-[#E91E8C]/30 bg-black/60 hover:bg-[#E91E8C]/25 hover:border-[#E91E8C] text-[#FF69B4]/80 hover:text-white text-[10px] font-bold tracking-widest uppercase cursor-pointer rounded-sm transition-all duration-300 font-mono"
        >
          SKIP TO SITE ⏩
        </button>
      )}

      {/* Background Camo Lines Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, rgba(233, 30, 140, 0.15) 0px, rgba(233, 30, 140, 0.15) 1px, transparent 1px, transparent 20px),
            repeating-linear-gradient(-45deg, rgba(155, 39, 175, 0.1) 0px, rgba(155, 39, 175, 0.1) 1px, transparent 1px, transparent 20px)
          `
        }}
      />

      {/* Widescreen Image Card (Top/Middle of screen) */}
      <div className="relative max-w-4xl w-full aspect-[16/10] sm:aspect-[16/9] z-10 border-2 border-[#E91E8C]/20 bg-black/60 rounded-sm overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.95),_0_0_40px_rgba(233,30,140,0.08)] mb-14 md:mb-20">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIdx}
            initial={{ opacity: 0, scale: 1.0 }}
            animate={{ opacity: 1, scale: 1.02 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[currentImageIdx]})` }}
          />
        </AnimatePresence>

        {/* Center overlay button for splash / ready state */}
        <AnimatePresence>
          {(stage === "click-to-start" || stage === "ready") && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute inset-0 flex items-center justify-center bg-black/35 backdrop-blur-[2px] z-20"
            >
              <motion.button
                onClick={stage === "click-to-start" ? handleStartLoading : handleEnter}
                onMouseEnter={playHover}
                animate={{ 
                  boxShadow: ["0 0 15px rgba(233,30,140,0.5)", "0 0 35px rgba(233,30,140,0.8)", "0 0 15px rgba(233,30,140,0.5)"] 
                }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="px-14 py-5 border-2 border-white bg-gradient-to-r from-[#E91E8C] via-[#FF3D9A] to-[#9B27AF] text-white gta-heading text-xl md:text-2xl tracking-[0.2em] italic hover:scale-105 hover:border-[#FF69B4] transition-all duration-300 cursor-pointer rounded-sm"
                style={{
                  textShadow: "2px 2px 0px rgba(0,0,0,0.7)",
                }}
              >
                {stage === "click-to-start" ? "START GAME" : "PLAY GAME"}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Entering Portfolio Flash Overlay */}
      {stage === "entering" && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.4, 1] }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute inset-0 bg-white z-[1000] flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="gta-heading text-3xl md:text-5xl text-black tracking-[0.3em] italic"
          >
            ENTERING...
          </motion.div>
        </motion.div>
      )}

      {/* Loading Progress & Spinner (at the bottom, below the image card) */}
      {stage !== "click-to-start" && stage !== "entering" && (
        <div className="w-full max-w-4xl z-20 flex items-center justify-between px-2 relative pb-4">
          {/* Status text */}
          <div className="flex flex-col items-start gap-0.5 font-mono text-[10px]">
            <span 
              className="text-[#FF69B4] tracking-[0.2em] uppercase font-bold"
              style={{ fontFamily: "var(--font-oswald)", textShadow: "0 0 10px rgba(233,30,140,0.3)" }}
            >
              {stage === "ready" ? "LOAD COMPLETE" : "LOADING STORY MODE"}
            </span>
            <span className="text-white text-lg font-bold tracking-widest">{progress}%</span>
          </div>

          {/* Custom Spinning Arc + Pulsing Star */}
          <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
              className="w-full h-full text-[#E91E8C]"
              viewBox="0 0 50 50"
            >
              <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="18 10 32 10"
                strokeLinecap="round"
              />
            </motion.svg>
            <motion.div
              animate={{ scale: [0.85, 1.15, 0.85] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute text-sm text-[#FF3D9A]"
            >
              ★
            </motion.div>
          </div>

          {/* Progress Line */}
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-black/40">
            <motion.div
              className="h-full bg-gradient-to-r from-[#E91E8C] via-[#FF3D9A] to-[#9B27AF]"
              style={{ width: `${progress}%`, boxShadow: "0 0 10px #E91E8C" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.15 }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
