import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MotionConfig } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luxury Hotel - Penginapan Bintang 5",
  description: "Nikmati pengalaman menginap mewah dengan fasilitas terbaik.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MotionConfig reducedMotion="user">
          <Header />
          {children}
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
      }
