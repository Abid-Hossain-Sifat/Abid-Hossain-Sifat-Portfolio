import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Abid Hossain Sifat | MERN Stack Developer",
  description:
    "Portfolio of Abid Hossain Sifat — a passionate MERN Stack Developer specializing in modern web technologies. Explore my projects, skills, and experience.",
  keywords: ["Abid Hossain Sifat", "MERN Stack Developer", "Web Developer", "React", "Next.js", "Portfolio", "Node.js", "Express.js", "MongoDB"],
  authors: [{ name: "Abid Hossain Sifat" }],
  openGraph: {
    title: "Abid Hossain Sifat | Mern Stack Developer",
    description: "Portfolio of Abid Hossain Sifat — MERN Stack Developer",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <Preloader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
