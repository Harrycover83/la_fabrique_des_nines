import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Police serif pour les titres
const cormorant = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

// Police sans-serif pour le texte
const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "La Fabrique des Nines - Objets de décoration faits main",
  description: "Découvrez nos objets de décoration en jesmonite faits main en France : plateaux, cendriers, porte-savons, statues et plus encore.",
  keywords: ["jesmonite", "décoration", "fait main", "artisanat", "France"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${cormorant.variable} ${poppins.variable} antialiased`}
      >
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
