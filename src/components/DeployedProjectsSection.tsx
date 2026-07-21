"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSound } from "@/context/SoundContext";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: "01", missionName: "CYBER_SHIELD", title: "CYBERSHIELD",
    description: "AI-powered cybersecurity platform featuring real-time phishing detection, AI chatbot assistance, and threat intelligence dashboards.",
    tags: ["REACT", "PYTHON", "MACHINE LEARNING"], payout: "SECURE SUCCESS", teamRole: "LEAD ARCHITECT",
    liveUrl: "https://github.com/mabamano/CyberShield", repoUrl: "https://github.com/mabamano/CyberShield",
  },
  {
    id: "02", missionName: "SMART_INDIA_2025", title: "SMART WASTE 360",
    description: "Smart India Hackathon Grand Finalist project. IoT-enabled waste monitoring with household, collector, and municipal dashboards, real-time GPS tracking, and Firebase sync.",
    tags: ["REACT", "FIREBASE", "ESP32", "IoT"], payout: "SIH FINALIST", teamRole: "PROJECT LEAD",
    liveUrl: "https://github.com/mabamano/Smart-Waste-360", repoUrl: "https://github.com/mabamano/Smart-Waste-360",
  },
  {
    id: "03", missionName: "TACTICAL_RADAR", title: "MILITARY RADAR",
    description: "Tactical radar system integrating ultrasonic sensors, ESP32 microcontrollers, and web visualization to display active coordinates in real-time.",
    tags: ["ARDUINO", "C++", "WEB SOCKETS"], payout: "ROBOTICS WIN", teamRole: "ROBOTICS LEAD",
    liveUrl: "https://github.com/mabamano", repoUrl: "https://github.com/mabamano",
  },
  {
    id: "04", missionName: "MISSION_VISION", title: "VEHICLE DETECTION YOLO",
    description: "Deep learning computer vision system trained on military hardware. Automatically detects and classifies vehicles using webcam streams via TensorFlow.",
    tags: ["TENSORFLOW", "OPENCV", "PYTHON"], payout: "100% ACCURACY", teamRole: "AI ENGINEER",
    liveUrl: "https://github.com/mabamano", repoUrl: "https://github.com/mabamano",
  },
];


export default function DeployedProjectsSection() {
  const { playHover, playConfirm } = useSound();

  return (
    <div className="space-y-6">
      <div className="border-b border-[#2A1545] pb-4">
        <div className="text-[10px] tracking-[0.2em] mb-1"
          style={{ fontFamily: "var(--font-oswald)", color: "#E91E8C" }}>
          03 // HEISTS
        </div>
        <h2 className="gta-heading text-3xl text-gradient">PROJECTS</h2>
        <p className="text-textMuted text-[11px] tracking-widest mt-1"
          style={{ fontFamily: "var(--font-oswald)" }}>
          ACTIVE MISSIONS &amp; COMPLETED HEISTS
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((proj, idx) => (
          <motion.div key={proj.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.25, delay: idx * 0.07 }}
            onMouseEnter={playHover}
            className="relative gta-card gta-card-slash flex flex-col overflow-hidden group transition-all duration-200 hover:border-[#E91E8C]"
          >
            <div className="px-5 pt-5 pb-4 border-b border-[#2A1545]"
              style={{ background: "#0E0818" }}>
              <div className="text-[9px] text-textMuted tracking-[0.3em] mb-1"
                style={{ fontFamily: "var(--font-oswald)" }}>
                MISSION: {proj.missionName}
              </div>
              <h3 className="gta-heading text-xl leading-none transition-all duration-200"
                style={{ color: "#F0E6FF" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E91E8C")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#F0E6FF")}>
                {proj.title}
              </h3>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-[9px] text-white px-2 py-0.5 font-bold tracking-widest"
                  style={{ fontFamily: "var(--font-oswald)", background: "linear-gradient(90deg,#E91E8C,#9B27AF)" }}>
                  PAYOUT: {proj.payout}
                </span>
                <span className="text-[9px] px-2 py-0.5 font-bold tracking-widest"
                  style={{ fontFamily: "var(--font-oswald)", border: "1px solid #9B27AF", color: "#FF69B4" }}>
                  TEAM: {proj.teamRole}
                </span>
              </div>
            </div>

            <div className="flex-1 px-5 py-4 space-y-4">
              <p className="text-textMuted text-sm leading-relaxed font-sans">{proj.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {proj.tags.map((tag, i) => (
                  <span key={i} className="text-[9px] text-textMuted px-2 py-0.5 tracking-wider"
                    style={{ fontFamily: "var(--font-oswald)", border: "1px solid #2A1545" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="px-5 pb-5 flex gap-3">
              <a href={proj.liveUrl} onClick={playConfirm}
                className="gta-btn-primary flex items-center gap-2 px-4 py-2.5 text-[11px]">
                START_MISSION <ExternalLink size={11} />
              </a>
              <a href={proj.repoUrl} onClick={playConfirm}
                className="gta-btn-outline flex items-center gap-2 px-4 py-2.5 text-[11px]">
                REVIEW_PLANS <Github size={11} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
