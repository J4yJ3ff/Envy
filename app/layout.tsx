/* eslint-disable camelcase */
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boltz Shift",
  description:
    "Crafting Digital Journeys seamlessly and Transformig ideas into Online excellence.",
  icons: {
    icon: "/Vector.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${spaceGrotesk.className}`}>
        <main className="m-auto max-w-[1440px]">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
