import type { Metadata } from "next";
import { Inter, Montserrat, Oswald } from "next/font/google";
import "./globals.css";
import { SoundProvider } from "@/context/SoundContext";
import { getAssetPath } from "@/utils/getAssetPath";

const inter = Inter({
  variable: "--font-inter",
  subsets:  ["latin"],
  weight:   ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets:  ["latin"],
  weight:   ["400", "500", "700", "800", "900"],
  style:    ["normal", "italic"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets:  ["latin"],
  weight:   ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:       "MANOJKUMAR M // AI & ROBOTICS ARCHITECT",
  description: "Premium portfolio dashboard. Undergraduate in Computer Science & Business Systems at RIT. Expert in AI, Robotics, Embedded Systems, Cybersecurity, and Full-Stack Development.",
  keywords:    "Manojkumar M, kalaimaba, mabamano, AI, Robotics, Embedded Systems, Full-Stack Developer, Cybersecurity, Portfolio, Dashboard",
  authors:     [{ name: "Manojkumar M" }],
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} ${oswald.variable} antialiased select-none`}
    >
      <body
        className="bg-canvas text-textPrimary font-sans"
        style={{ "--bg-image": `url(${getAssetPath("/backgroung.jpg")})` } as React.CSSProperties}
      >
        <SoundProvider>
          {children}
        </SoundProvider>
      </body>
    </html>
  );
}
