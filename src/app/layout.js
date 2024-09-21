
'use client'
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/share/Navbar";
import Footer from "@/components/share/Footer";
import { usePathname } from "next/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Define routes where Navbar and Footer should not appear
  const authRoutes = [ "/auth/signup"];

  const isAuthRoute = authRoutes.includes(pathname);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Conditionally render Navbar and Footer */}
        {!isAuthRoute && <Navbar />}
        {children}
        {!isAuthRoute && <Footer />}
      </body>
    </html>
  );
}

