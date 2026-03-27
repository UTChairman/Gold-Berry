import type { Metadata } from "next";
import { Baskervville, Montserrat } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";

const serif = Baskervville({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif-brand",
  display: "swap",
});

const sans = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans-brand",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gold Berry | 100% Pure Raw Honey",
  description: "Experience nature's gift. Premium, unadulterated cold-pressed honey at an accessible price.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="flex flex-col min-h-screen">
        <CartProvider>
          <Navbar />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
          <Toaster
            position="bottom-center"
            toastOptions={{
              style: {
                background: '#201B59',
                color: '#FAFAF8',
              },
            }}
          />
        </CartProvider>
      </body>
    </html>
  );
}
