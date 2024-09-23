
'use client'

import "./globals.css";
import Navbar from "@/components/share/Navbar";
import Footer from "@/components/share/Footer";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Define routes where Navbar and Footer should not appear
  const authRoutes = [ "/auth/signup"];
  const footerCriteria  = ["/auth/otpverification","/auth/forgetpassword","/auth/signup/intarest","/auth/signup/categories"];
  const isAuthRoute = authRoutes.includes(pathname);
  const isFooter = footerCriteria.includes(pathname);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`antialiased font-Inter `}
      >
        {/* Conditionally render Navbar and Footer */}
        {!isAuthRoute && <Navbar />}
        {children}
        {!isAuthRoute && !isFooter && <Footer />}
      </body>
    </html>
  );
}

