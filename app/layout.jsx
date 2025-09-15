// "use client";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

// ✅ Added Google Search Console meta tag
export const metadata = {
  title: "Mohammad Aqib | MERN Stack & Frontend Developer (React.js, Next.js)",
  description:
    "I’m Mohammad Aqib, a passionate MERN Stack Developer with 1.5 years of experience in building scalable, responsive, and user-focused web applications. Skilled in React.js, Next.js, Node.js, Express, and MongoDB, I specialize in creating modern interfaces, real-time features, and seamless API integrations. Based in India, I’m always eager to learn and deliver impactful solutions.",
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
