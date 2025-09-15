"use client";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

// ✅ Added Google Search Console meta tag
export const metadata = {
  title: "Your Website Title",
  description: "Your website description",
  verification: {
    google: "DZ9vWb6RWzvWdRvH1ig8OJhJhohqqzelEJIypdQAL-E",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
