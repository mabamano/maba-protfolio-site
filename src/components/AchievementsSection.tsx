"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSound } from "@/context/SoundContext";
import { Trophy, Award, Target, Zap, Users, X, ChevronRight } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  category: string;
  badge: string;
  prize?: string;
  description: string;
  details: string;
  icon: React.ElementType;
  color: string;
}

const achievements: Achievement[] = [
  {
    id: "sih-2025",
    title: "SIH 2025 GRAND FINALIST",
    category: "NATIONAL HACKATHON",
    badge: "GRAND FINALIST",
    prize: "SIH 2025",
    description: "Selected as National Grand Finalist for Smart Waste Management platform.",
    details: "Built an end-to-end IoT platform featuring real-time ESP32 sensor telemetry, municipal dashboards, and GPS fleet tracking under Smart Waste Management domain.",
    icon: Trophy,
    color: "#E91E8C",
  },
  {
    id: "wro-2024",
    title: "WORLD ROBOT OLYMPIAD",
    category: "INTERNATIONAL ROBOTICS",
    badge: "12th ALL-INDIA // BRONZE",
    prize: "BRONZE BADGE",
    description: "National Finalist in WRO (Team ROBOVANGUARD) securing 12th position All-India.",
    details: "Engineered high-speed autonomous mobile robotics algorithms for maze navigation, precision motor encoders, and real-time obstacle avoidance.",
    icon: Award,
    color: "#FF3D9A",
  },
  {
    id: "sih-2024",
    title: "SIH 2024 GRAND FINALIST",
    category: "NATIONAL HACKATHON",
    badge: "GRAND FINALIST",
    prize: "SIH 2024",
    description: "National Grand Finalist under Transport & Logistics innovation track.",
    details: "Designed automated logistics tracking using embedded sensors and real-time cloud data pipelines for fleet monitoring.",
    icon: Trophy,
    color: "#9B27AF",
  },
  {
    id: "indiaskills",
    title: "INDIASKILLS 2025",
    category: "AUTONOMOUS MOBILE ROBOTICS",
    badge: "DISTRICT SELECTION",
    prize: "QUALIFIER",
    description: "Qualified District Level Selection for Autonomous Mobile Robotics.",
    details: "Represented Ramco Institute of Technology in autonomous mobile robotics challenges involving ROS 2 and sensor integration.",
    icon: Target,
    color: "#FF9900",
  },
  {
    id: "hackathon-championships",
    title: "HACKATHONS & ROBOTHONS",
    category: "COMPETITION WINS",
    badge: "12+ TROPHIES",
    prize: "₹34,000+ CASH",
    description: "Multiple 1st Place wins in Euphoria Hackathons, Line Followers, and Robothons.",
    details: "Won 1st Place in Euphoria 2K26 Hackathon (₹5k), Line Follower (₹5k), Game Dev (₹7k), Pitch Parade (₹5k), TCE Line Follower (₹2k), and Robothon Top 5 (₹10k).",
    icon: Zap,
    color: "#00979D",
  },
  {
    id: "mentorship",
    title: "100+ STUDENTS MENTORED",
    category: "LEADERSHIP & WORKSHOPS",
    badge: "RESOURCE PERSON",
    prize: "1-WEEK IoT VAC",
    description: "Resource person for 1-Week Value Added Course on IoT & Cybersecurity.",
    details: "Conducted hands-on training for 100+ students on Arduino, ESP32 microcontrollers, sensor interfacing, and web cybersecurity fundamentals.",
    icon: Users,
    color: "#FFCA28",
  },
];

export default function AchievementsSection() {
  const { playHover, playConfirm } = useSound();
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="border-b border-[#2A1545] pb-4 flex justify-between items-end">
        <div>
          <div
            className="text-[10px] tracking-[0.2em] mb-1"
            style={{ fontFamily: "var(--font-oswald)", color: "#E91E8C" }}
          >
            04 // HALL OF FAME
          </div>
          <h2 className="gta-heading text-3xl text-gradient">TROPHIES &amp; ACCOMPLISHMENTS</h2>
          <p
            className="text-textPrimary text-[11px] tracking-widest mt-1"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            NATIONAL HACKATHON FINALIST • ROBOTICS CHAMPION • ₹34,000+ BOUNTY
          </p>
        </div>
        <div className="hidden sm:block text-right">
          <span
            className="text-[10px] font-bold tracking-widest px-2.5 py-1 border border-[#E91E8C]/40 text-[#E91E8C] uppercase"
            style={{ fontFamily: "var(--font-oswald)", background: "rgba(233,30,140,0.08)" }}
          >
            100% VERIFIED RECORDS
          </span>
        </div>
      </div>

      {/* Trophies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.25, delay: idx * 0.06 }}
              onMouseEnter={playHover}
              onClick={() => {
                playConfirm();
                setSelectedAchievement(item);
              }}
              className="gta-card gta-card-hover p-5 cursor-pointer relative overflow-hidden flex flex-col justify-between group border border-[#2A1545] hover:border-[#E91E8C]"
            >
              {/* Top Accent Strip */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
              />

              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div
                    className="p-2.5 rounded-sm"
                    style={{ background: "rgba(14,8,24,0.8)", border: `1px solid ${item.color}40`, color: item.color }}
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <span
                    className="text-[9px] font-bold tracking-widest px-2 py-0.5"
                    style={{
                      fontFamily: "var(--font-oswald)",
                      background: "linear-gradient(90deg, #E91E8C, #9B27AF)",
                      color: "#FFFFFF",
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                <div>
                  <div
                    className="text-[9px] tracking-widest uppercase mb-0.5 text-textPrimary opacity-80"
                    style={{ fontFamily: "var(--font-oswald)" }}
                  >
                    {item.category}
                  </div>
                  <h3
                    className="gta-heading text-lg leading-tight transition-colors duration-200 group-hover:text-[#E91E8C]"
                    style={{ color: "#F0E6FF" }}
                  >
                    {item.title}
                  </h3>
                </div>

                <p className="text-textPrimary text-xs leading-relaxed font-sans">{item.description}</p>
              </div>

              <div
                className="pt-4 mt-3 border-t border-[#2A1545] flex justify-between items-center text-[10px]"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                <span className="font-bold tracking-wider" style={{ color: item.color }}>
                  {item.prize || "AWARD UNLOCKED"}
                </span>
                <span className="text-[#FF3D9A] flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                  INSPECT INTEL <ChevronRight size={12} />
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Achievement Detail Modal */}
      <AnimatePresence>
        {selectedAchievement && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              className="relative max-w-lg w-full gta-card p-6 border-2 border-[#E91E8C] space-y-5 shadow-[0_0_50px_rgba(233,30,140,0.3)]"
              style={{ background: "rgba(14,8,24,0.96)" }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedAchievement(null)}
                onMouseEnter={playHover}
                className="absolute top-4 right-4 text-textPrimary hover:text-[#E91E8C] p-1 cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 border-b border-[#2A1545] pb-4">
                <div
                  className="p-3 rounded-sm"
                  style={{
                    background: "rgba(233,30,140,0.15)",
                    border: `1px solid ${selectedAchievement.color}`,
                    color: selectedAchievement.color,
                  }}
                >
                  {React.createElement(selectedAchievement.icon, { size: 28, strokeWidth: 1.8 })}
                </div>
                <div>
                  <span
                    className="text-[9px] font-bold tracking-widest text-[#E91E8C] uppercase"
                    style={{ fontFamily: "var(--font-oswald)" }}
                  >
                    ACHIEVEMENT UNLOCKED // {selectedAchievement.category}
                  </span>
                  <h3 className="gta-heading text-xl md:text-2xl text-white leading-tight">
                    {selectedAchievement.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-3 font-sans text-sm text-textPrimary">
                <div className="space-y-1">
                  <div
                    className="text-[10px] tracking-widest text-textPrimary uppercase font-bold"
                    style={{ fontFamily: "var(--font-oswald)" }}
                  >
                    CREDENTIAL BREAKDOWN:
                  </div>
                  <p className="leading-relaxed bg-[#0A0515] p-3 border border-[#2A1545] text-white">
                    {selectedAchievement.details}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span
                    className="text-[10px] tracking-widest font-bold text-textPrimary uppercase"
                    style={{ fontFamily: "var(--font-oswald)" }}
                  >
                    STATUS: <span style={{ color: "#E91E8C" }}>VERIFIED &amp; AWARDED</span>
                  </span>
                  <span
                    className="text-xs font-bold px-3 py-1 bg-gradient-to-r from-[#E91E8C] to-[#9B27AF] text-white"
                    style={{ fontFamily: "var(--font-oswald)" }}
                  >
                    {selectedAchievement.badge}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedAchievement(null)}
                onMouseEnter={playHover}
                className="w-full gta-btn-primary py-2.5 text-center text-xs tracking-widest uppercase mt-2"
              >
                CLOSE INTEL
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
