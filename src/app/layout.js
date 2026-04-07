import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Το Τρίγωνο | The Triangle — Ταβέρνα στα Καλύβια",
  description:
    "Authentic Greek meat taverna in Kalyvia, Attica. Famous for grilled lamb chops, wood-fired meats, and over 8,000 five-star reviews. Visit us at Athinon 36, Kalyvia Thorikou.",
  keywords: [
    "τρίγωνο",
    "τριγωνο",
    "ταβέρνα καλύβια",
    "taverna kalyvia",
    "greek taverna attica",
    "παϊδάκια",
    "ψητά κρέατα",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="el"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
