import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrea Frazier | Full-Stack Developer & Technical Consultant",
  description: "Full-Stack Developer and Technical Consultant specializing in Next.js, TypeScript, and professional IT services for nonprofits and small businesses in Detroit.",
  keywords: ["Full-Stack Developer", "Technical Consultant", "Next.js", "TypeScript", "Detroit", "Web Development"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}