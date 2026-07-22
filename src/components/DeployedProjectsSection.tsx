"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSound } from "@/context/SoundContext";
import { ExternalLink, Github, X, ShieldAlert, Cpu, Layers } from "lucide-react";

interface Project {
  id: string;
  missionName: string;
  title: string;
  description: string;
  longDescription: string;
  highlights: string[];
  tags: string[];
  payout: string;
  teamRole: string;
  liveUrl: string;
  repoUrl: string;
}

const projects: Project[] = [
  {
    id: "01",
    missionName: "CYBER_SHIELD",
    title: "CYBERSHIELD",
    description: "AI-powered cybersecurity platform featuring real-time phishing detection, AI chatbot assistance, and threat intelligence dashboards.",
    longDescription: "CyberShield is an enterprise-grade AI security suite engineered to detect zero-day phishing vectors, validate domain reputations, and analyze threat payloads in real time. It features a conversational AI security assistant trained on OWASP fundamentals to guide users through incident responses.",
    highlights: [
      "Real-time Phishing Vector Detection",
      "Interactive AI Security Chatbot",
      "OWASP & Threat Intelligence Analysis",
      "TypeScript + Python Machine Learning Pipeline"
    ],
    tags: ["REACT", "PYTHON", "MACHINE LEARNING", "OWASP"],
    payout: "SECURE SUCCESS",
    teamRole: "LEAD ARCHITECT",
    liveUrl: "https://github.com/mabamano/CyberShield",
    repoUrl: "https://github.com/mabamano/CyberShield",
  },
  {
    id: "02",
    missionName: "SMART_INDIA_2025",
    title: "SMART WASTE 360",
    description: "Smart India Hackathon Grand Finalist project. IoT-enabled waste monitoring with household, collector, and municipal dashboards, real-time GPS tracking, and Firebase sync.",
    longDescription: "Smart Waste 360 is a nationwide waste optimization platform built for Smart India Hackathon 2025. It integrates ESP32 ultrasonic bin sensors with real-time Firebase syncing, automated route optimization for municipal garbage trucks, and citizen rewards dashboards.",
    highlights: [
      "SIH 2025 National Grand Finalist Platform",
      "ESP32 Microcontroller Bin Telemetry",
      "Real-Time Municipal Fleet GPS Routing",
      "Firebase Realtime Sync & Analytics"
    ],
    tags: ["REACT", "FIREBASE", "ESP32", "IoT", "GPS"],
    payout: "SIH FINALIST",
    teamRole: "PROJECT LEAD",
    liveUrl: "https://github.com/mabamano/Smart-Waste-360",
    repoUrl: "https://github.com/mabamano/Smart-Waste-360",
  },
  {
    id: "03",
    missionName: "TACTICAL_RADAR",
    title: "MILITARY RADAR",
    description: "Tactical radar system integrating ultrasonic sensors, ESP32 microcontrollers, and web visualization to display active coordinates in real-time.",
    longDescription: "Designed for military tactical surveillance, this hardware-software hybrid uses ultrasonic sensors coupled with ESP32/Arduino microcontrollers to map surrounding spatial coordinates. Object positions are streamed at microsecond latency via WebSockets to a web-based radar sweep interface.",
    highlights: [
      "Ultrasonic Sensor Spatial Coordinate Mapping",
      "Microsecond WebSockets Telemetry Stream",
      "Interactive 360 Degree Canvas Radar UI",
      "Embedded C++ Microcontroller Firmware"
    ],
    tags: ["ARDUINO", "ESP32", "C++", "WEB SOCKETS"],
    payout: "ROBOTICS WIN",
    teamRole: "ROBOTICS LEAD",
    liveUrl: "https://github.com/mabamano",
    repoUrl: "https://github.com/mabamano",
  },
  {
    id: "04",
    missionName: "MISSION_VISION",
    title: "VEHICLE DETECTION YOLO",
    description: "Deep learning computer vision system trained on military hardware. Automatically detects and classifies vehicles using webcam streams via TensorFlow.",
    longDescription: "A high-performance object detection engine powered by TensorFlow and OpenCV. Trained on specialized target datasets to detect, bound, and classify tactical ground vehicles in real-time camera feeds with minimal computational overhead.",
    highlights: [
      "Custom Dataset Annotation & Bounding",
      "TensorFlow & OpenCV Real-Time Vision Feed",
      "High FPS Detection on Standard Hardware",
      "Automatic Vehicle Classification Pipeline"
    ],
    tags: ["TENSORFLOW", "OPENCV", "PYTHON", "YOLO"],
    payout: "100% ACCURACY",
    teamRole: "AI ENGINEER",
    liveUrl: "https://github.com/mabamano",
    repoUrl: "https://github.com/mabamano",
  },
];

export default function DeployedProjectsSection() {
  const { playHover, playConfirm } = useSound();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="space-y-6">
      <div className="border-b border-[#2A1545] pb-4">
        <div
          className="text-[10px] tracking-[0.2em] mb-1"
          style={{ fontFamily: "var(--font-oswald)", color: "#E91E8C" }}
        >
          03 // HEISTS
        </div>
        <h2 className="gta-heading text-3xl text-gradient">PROJECTS</h2>
        <p
          className="text-textPrimary text-[11px] tracking-widest mt-1"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          ACTIVE MISSIONS &amp; COMPLETED HEISTS — CLICK CARD FOR TACTICAL INTEL
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.25, delay: idx * 0.07 }}
            onMouseEnter={playHover}
            onClick={() => {
              playConfirm();
              setSelectedProject(proj);
            }}
            className="relative gta-card gta-card-slash flex flex-col overflow-hidden group cursor-pointer transition-all duration-200 hover:border-[#E91E8C]"
          >
            <div className="px-5 pt-5 pb-4 border-b border-[#2A1545]" style={{ background: "#0E0818" }}>
              <div
                className="text-[9px] text-textPrimary opacity-80 tracking-[0.3em] mb-1 flex justify-between items-center"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                <span>MISSION: {proj.missionName}</span>
                <span className="text-[#FF3D9A] font-bold group-hover:scale-105 transition-transform">
                  [ INTEL 🔍 ]
                </span>
              </div>
              <h3
                className="gta-heading text-xl leading-none transition-all duration-200 group-hover:text-[#E91E8C]"
                style={{ color: "#F0E6FF" }}
              >
                {proj.title}
              </h3>
              <div className="flex flex-wrap gap-2 mt-3">
                <span
                  className="text-[9px] text-white px-2 py-0.5 font-bold tracking-widest"
                  style={{ fontFamily: "var(--font-oswald)", background: "linear-gradient(90deg,#E91E8C,#9B27AF)" }}
                >
                  PAYOUT: {proj.payout}
                </span>
                <span
                  className="text-[9px] px-2 py-0.5 font-bold tracking-widest"
                  style={{ fontFamily: "var(--font-oswald)", border: "1px solid #9B27AF", color: "#FF69B4" }}
                >
                  TEAM: {proj.teamRole}
                </span>
              </div>
            </div>

            <div className="flex-1 px-5 py-4 space-y-4">
              <p className="text-textPrimary text-sm leading-relaxed font-sans">{proj.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {proj.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[9px] text-textPrimary px-2 py-0.5 tracking-wider"
                    style={{ fontFamily: "var(--font-oswald)", border: "1px solid #2A1545", background: "rgba(14,8,24,0.6)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="px-5 pb-5 flex gap-3" onClick={(e) => e.stopPropagation()}>
              <a
                href={proj.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playConfirm}
                className="gta-btn-primary flex items-center gap-2 px-4 py-2.5 text-[11px]"
              >
                START_MISSION <ExternalLink size={11} />
              </a>
              <a
                href={proj.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playConfirm}
                className="gta-btn-outline flex items-center gap-2 px-4 py-2.5 text-[11px]"
              >
                REVIEW_PLANS <Github size={11} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mission Tactical Intel Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              className="relative max-w-2xl w-full gta-card p-6 border-2 border-[#E91E8C] space-y-6 shadow-[0_0_60px_rgba(233,30,140,0.4)]"
              style={{ background: "rgba(14,8,24,0.97)" }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                onMouseEnter={playHover}
                className="absolute top-4 right-4 text-textPrimary hover:text-[#E91E8C] p-1 cursor-pointer"
              >
                <X size={22} />
              </button>

              <div className="border-b border-[#2A1545] pb-4">
                <div
                  className="text-[10px] tracking-[0.25em] text-[#E91E8C] font-bold uppercase mb-1 flex items-center gap-1.5"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  <ShieldAlert size={14} /> MISSION INTEL BRIEF // {selectedProject.missionName}
                </div>
                <h3 className="gta-heading text-2xl md:text-3xl text-white">{selectedProject.title}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span
                    className="text-[9.5px] text-white px-2.5 py-0.5 font-bold tracking-widest"
                    style={{ fontFamily: "var(--font-oswald)", background: "linear-gradient(90deg,#E91E8C,#9B27AF)" }}
                  >
                    PAYOUT: {selectedProject.payout}
                  </span>
                  <span
                    className="text-[9.5px] px-2.5 py-0.5 font-bold tracking-widest"
                    style={{ fontFamily: "var(--font-oswald)", border: "1px solid #9B27AF", color: "#FF69B4" }}
                  >
                    ROLE: {selectedProject.teamRole}
                  </span>
                </div>
              </div>

              {/* Body Content */}
              <div className="space-y-4 font-sans text-sm text-textPrimary">
                <div className="space-y-1.5">
                  <div
                    className="text-[10px] tracking-widest text-textPrimary uppercase font-bold flex items-center gap-1.5"
                    style={{ fontFamily: "var(--font-oswald)" }}
                  >
                    <Cpu size={14} className="text-[#E91E8C]" /> TACTICAL OVERVIEW:
                  </div>
                  <p className="leading-relaxed bg-[#0A0515] p-3.5 border border-[#2A1545] text-white">
                    {selectedProject.longDescription}
                  </p>
                </div>

                <div className="space-y-2">
                  <div
                    className="text-[10px] tracking-widest text-textPrimary uppercase font-bold flex items-center gap-1.5"
                    style={{ fontFamily: "var(--font-oswald)" }}
                  >
                    <Layers size={14} className="text-[#FF3D9A]" /> KEY TECHNICAL HIGHLIGHTS:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="text-xs p-2.5 bg-[#120824] border border-[#2A1545] text-white flex items-center gap-2"
                      >
                        <span className="text-[#E91E8C] font-bold">⚡</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5 pt-2">
                  <div
                    className="text-[10px] tracking-widest text-textPrimary uppercase font-bold"
                    style={{ fontFamily: "var(--font-oswald)" }}
                  >
                    TECHNOLOGY ARSENAL:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2.5 py-1 font-bold tracking-wider"
                        style={{
                          fontFamily: "var(--font-oswald)",
                          border: "1px solid #E91E8C",
                          color: "#F0E6FF",
                          background: "rgba(233,30,140,0.12)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-[#2A1545] flex flex-wrap gap-3">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playConfirm}
                  className="gta-btn-primary flex-1 py-3 text-center text-xs tracking-widest uppercase flex items-center justify-center gap-2"
                >
                  EXECUTE MISSION <ExternalLink size={13} />
                </a>
                <a
                  href={selectedProject.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playConfirm}
                  className="gta-btn-outline flex-1 py-3 text-center text-xs tracking-widest uppercase flex items-center justify-center gap-2"
                >
                  INSPECT REPOSITORY <Github size={13} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

