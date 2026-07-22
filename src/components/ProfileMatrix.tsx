"use client";

import React from "react";
import { getAssetPath } from "@/utils/getAssetPath";

export default function ProfileMatrix() {
  return (
    <div className="relative w-full aspect-square overflow-hidden flex items-center justify-center"
      style={{ background: "#160D28", border: "1px solid #2A1545" }}>
      <div className="absolute inset-0 gta-stripe-bg opacity-40" />

      {/* Magenta top-right slash */}
      <div className="absolute top-0 right-0 w-0 h-0" style={{
        borderStyle: "solid", borderWidth: "0 52px 52px 0",
        borderColor: "transparent #E91E8C transparent transparent",
      }} />
      {/* Violet bottom-left slash */}
      <div className="absolute bottom-0 left-0 w-0 h-0" style={{
        borderStyle: "solid", borderWidth: "0 0 36px 36px",
        borderColor: "transparent transparent #9B27AF transparent",
      }} />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 50% 80%, rgba(233,30,140,0.08) 0%, transparent 70%)",
      }} />

      {/* Profile Pic Card / Security Badge */}
      <div className="relative w-[75%] h-[75%] z-10 border border-[#E91E8C] overflow-hidden bg-[#0E0818] shadow-lg flex flex-col justify-between"
        style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}>
        
        {/* Scanline pattern overlay */}
        <div className="absolute inset-0 pointer-events-none z-20 opacity-15"
          style={{
            backgroundImage: "linear-gradient(rgba(18, 10, 36, 0) 50%, rgba(0, 0, 0, 0.25) 50%)",
            backgroundSize: "100% 4px",
          }} />

        <div className="flex-1 w-full relative bg-[#120822]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={getAssetPath("/myprofilepic.jpeg")}
            alt="Manojkumar M"
            className="w-full h-full object-cover object-top brightness-[1.05] contrast-[1.05]"
          />
        </div>

        {/* Badge Label */}
        <div className="bg-[#0E0818] border-t border-[#E91E8C] py-2 px-3 text-center relative z-20 flex flex-col items-center">
          <div className="text-[10px] font-bold tracking-widest text-[#E91E8C] leading-none uppercase"
            style={{ fontFamily: "var(--font-oswald)" }}>
            MANOJKUMAR M
          </div>
          <div className="text-[7.5px] font-bold tracking-widest text-[#9B27AF] mt-1 leading-none uppercase"
            style={{ fontFamily: "var(--font-oswald)" }}>
            AI &amp; ROBOTICS ARCHITECT
          </div>
        </div>
      </div>

      <div className="absolute top-3 left-3 space-y-0.5" style={{ fontFamily: "var(--font-oswald)" }}>
        <div className="text-[9px] font-semibold uppercase tracking-widest" style={{ color: "#E91E8C" }}>OPERATOR</div>
        <div className="text-[9px] tracking-wider text-textMuted">LVL 99 // LEAD</div>
      </div>
      <div className="absolute bottom-3 right-3 text-right space-y-0.5" style={{ fontFamily: "var(--font-oswald)" }}>
        <div className="text-[9px] font-semibold uppercase tracking-widest" style={{ color: "#FF3D9A" }}>STATUS: ACTIVE</div>
        <div className="text-[9px] tracking-wider text-textMuted">REP: MAX</div>
      </div>
    </div>
  );
}

