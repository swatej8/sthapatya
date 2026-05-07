import type { Metadata } from "next";
<<<<<<< HEAD
import { Geist, Geist_Mono, Rozha_One, Changa_One, Lexend_Deca } from "next/font/google";
=======
import { Geist, Geist_Mono, Rozha_One, Changa_One, Lexend_Deca, Kalam, Space_Grotesk } from "next/font/google";
>>>>>>> e949a61892f3bdcc016ef6709176e7dde5c7bbd1
import "./globals.css";
import Scene from "@/components/canvas/Scene";
import HeroShader from "@/components/canvas/HeroShader";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ScrollProgress from "@/components/ui/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rozhaOne = Rozha_One({
  weight: "400",
  variable: "--font-rozha",
  subsets: ["latin", "devanagari"],
});

const changaOne = Changa_One({
  weight: "400",
  variable: "--font-changa",
  subsets: ["latin"],
  style: "italic",
});

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

<<<<<<< HEAD
=======
const kalam = Kalam({
  weight: ["300", "400", "700"],
  variable: "--font-kalam",
  subsets: ["devanagari", "latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

>>>>>>> e949a61892f3bdcc016ef6709176e7dde5c7bbd1
export const metadata: Metadata = {
  title: "Sthapatya Consultants",
  description: "Advanced Municipal Solutions & Property Tax Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className={`${geistSans.variable} ${geistMono.variable} ${rozhaOne.variable} ${changaOne.variable} ${lexendDeca.variable} antialiased bg-[var(--color-background)] text-[var(--color-foreground)] min-h-screen`}>
=======
      <body className={`${geistSans.variable} ${geistMono.variable} ${rozhaOne.variable} ${changaOne.variable} ${lexendDeca.variable} ${kalam.variable} ${spaceGrotesk.variable} antialiased bg-[var(--color-background)] text-[var(--color-foreground)] min-h-screen`}>
>>>>>>> e949a61892f3bdcc016ef6709176e7dde5c7bbd1
        <ScrollProgress />
        {/* Fixed 3D Background */}
        <Scene>
          <HeroShader />
          {/* Other 3D components can go here or be ported via View */}
        </Scene>

        {/* Main Content */}
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
