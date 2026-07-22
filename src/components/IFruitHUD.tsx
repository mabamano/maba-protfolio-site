"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSound } from "@/context/SoundContext";
import { Phone, Mail, FileText, Github, Linkedin, Smartphone, X, Volume2, VolumeX } from "lucide-react";
import { getAssetPath } from "@/utils/getAssetPath";

export default function IFruitHUD() {
  const { playHover, playConfirm, isMuted, toggleMute } = useSound();
  const [isOpen, setIsOpen] = useState(false);

  const quickContacts = [
    {
      label: "EMAIL MANOJ",
      sub: "kalaimaba@gmail.com",
      icon: Mail,
      href: "mailto:kalaimaba@gmail.com",
      color: "#E91E8C",
    },
    {
      label: "CALL / WHATSAPP",
      sub: "+91 8778546723",
      icon: Phone,
      href: "tel:+918778546723",
      color: "#FF3D9A",
    },
    {
      label: "DOWNLOAD RESUME",
      sub: "manoj_s_Resume.pdf",
      icon: FileText,
      href: getAssetPath("/manoj_s_Resume.pdf"),
      download: true,
      color: "#9B27AF",
    },
    {
      label: "GITHUB PROFILE",
      sub: "@mabamano",
      icon: Github,
      href: "https://github.com/mabamano",
      external: true,
      color: "#00979D",
    },
    {
      label: "LINKEDIN CONNECT",
      sub: "manojkumar-m",
      icon: Linkedin,
      href: "https://linkedin.com/in/manojkumar-m",
      external: true,
      color: "#3776AB",
    },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-[9990] flex flex-col items-end select-none">
      {/* iFruit Smartphone Popup Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.88 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.88 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            className="mb-4 w-72 gta-card border-2 border-[#E91E8C] overflow-hidden shadow-[0_10px_40px_rgba(233,30,140,0.35)] rounded-2xl"
            style={{ background: "rgba(14, 8, 24, 0.96)" }}
          >
            {/* Phone Notch Header */}
            <div className="bg-[#0A0414] px-4 py-3 border-b border-[#2A1545] flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E91E8C] animate-pulse" />
                <span
                  className="text-[11px] font-extrabold tracking-widest text-[#E91E8C] uppercase"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  iFruit 16 MAX // HUD
                </span>
              </div>
              <button
                onClick={() => {
                  playConfirm();
                  setIsOpen(false);
                }}
                onMouseEnter={playHover}
                className="text-textPrimary hover:text-[#E91E8C] p-1 cursor-pointer transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Quick Actions List */}
            <div className="p-3 space-y-2">
              <div
                className="text-[9px] tracking-widest text-textPrimary uppercase px-1 font-bold"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                SPEED DIAL &amp; INTEL LINKS:
              </div>

              {quickContacts.map((contact, idx) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={idx}
                    href={contact.href}
                    target={contact.external ? "_blank" : undefined}
                    rel={contact.external ? "noopener noreferrer" : undefined}
                    download={contact.download ? true : undefined}
                    onMouseEnter={playHover}
                    onClick={playConfirm}
                    className="flex items-center gap-3 p-2.5 bg-[#120822] hover:bg-[#1C0D36] border border-[#2A1545] hover:border-[#E91E8C] rounded-lg transition-all group cursor-pointer"
                  >
                    <div
                      className="p-2 rounded-md transition-transform group-hover:scale-110"
                      style={{ background: `${contact.color}20`, border: `1px solid ${contact.color}`, color: contact.color }}
                    >
                      <Icon size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-[11px] font-bold text-white tracking-wider leading-none group-hover:text-[#E91E8C] transition-colors"
                        style={{ fontFamily: "var(--font-oswald)" }}
                      >
                        {contact.label}
                      </div>
                      <div className="text-[9.5px] text-textPrimary opacity-80 font-sans truncate mt-0.5">
                        {contact.sub}
                      </div>
                    </div>
                  </a>
                );
              })}

              {/* Audio Toggle button in phone */}
              <button
                onClick={() => {
                  playConfirm();
                  toggleMute();
                }}
                onMouseEnter={playHover}
                className="w-full flex items-center justify-between p-2.5 bg-[#120822] hover:bg-[#1C0D36] border border-[#2A1545] hover:border-[#E91E8C] rounded-lg transition-all text-left cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="p-2 rounded-md"
                    style={{ background: "rgba(233,30,140,0.2)", border: "1px solid #E91E8C", color: "#E91E8C" }}
                  >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </div>
                  <div>
                    <div
                      className="text-[11px] font-bold text-white tracking-wider leading-none"
                      style={{ fontFamily: "var(--font-oswald)" }}
                    >
                      THEME MUSIC
                    </div>
                    <div className="text-[9.5px] text-textPrimary opacity-80 font-sans mt-0.5">
                      {isMuted ? "MUSIC MUTED" : "VICE CITY BEATS ACTIVE"}
                    </div>
                  </div>
                </div>
                <span
                  className="text-[9px] font-bold px-2 py-0.5 rounded text-white"
                  style={{
                    fontFamily: "var(--font-oswald)",
                    background: isMuted ? "#3D2460" : "linear-gradient(90deg, #E91E8C, #9B27AF)",
                  }}
                >
                  {isMuted ? "OFF" : "ON"}
                </span>
              </button>
            </div>

            {/* Phone Footer Home Bar */}
            <div className="py-2 bg-[#0A0414] text-center border-t border-[#2A1545]">
              <div className="w-16 h-1 bg-[#E91E8C] mx-auto rounded-full opacity-60" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating iFruit Smartphone Trigger Button */}
      <motion.button
        onClick={() => {
          playConfirm();
          setIsOpen(!isOpen);
        }}
        onMouseEnter={playHover}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-[#E91E8C] via-[#FF3D9A] to-[#9B27AF] text-white rounded-full shadow-[0_0_25px_rgba(233,30,140,0.6)] border-2 border-white/80 cursor-pointer"
      >
        <Smartphone size={18} className="animate-bounce" />
        <span
          className="text-xs font-black tracking-widest uppercase"
          style={{ fontFamily: "var(--font-oswald)", textShadow: "1px 1px 0px rgba(0,0,0,0.5)" }}
        >
          {isOpen ? "CLOSE HUD" : "iFRUIT HUD"}
        </span>
      </motion.button>
    </div>
  );
}
