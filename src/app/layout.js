"use client";

import React, { useState, useEffect } from "react";
import "./globals.css";
import Navbar from "@/components/share/Navbar";
import Footer from "@/components/share/Footer";
import { usePathname } from "next/navigation";
import { Spin } from "antd";
import Image from "next/image";
import logo from "../public/images/logo.png";
export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Define routes where Navbar and Footer should not appear
  const authRoutes = ["/auth/signup"];
  const footerCriteria = [
    "/auth/otpverification",
    "/auth/forgetpassword",
    "/auth/signup/intarest",
    "/auth/signup/categories",
  ];
  const isAuthRoute = authRoutes.includes(pathname);
  const isFooter = footerCriteria.includes(pathname);

  const [spinning, setSpinning] = useState(true);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 300);

    const timer = setTimeout(() => {
      setSpinning(false);
      setPercent(0);
    }, 50);

    // Cleanup on unmount
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="../public/images/emptystates-empty-cart.png"
          type="image/png"
        />
        <title>Pantagonostis</title>
      </head>
      <body className="antialiased font-Inter">
        {/* Show loading spinner if page is loading */}
        {spinning ? (
          <div className="loader-container absolute top-1/2 left-[40%]  ">
            <Image className="block mx-auto my-auto" src={logo} alt="logo" />
            <Spin
              className=" bg-white h-full w-full "
              size="large"
              spinning={spinning}
              percent={percent}
            />
          </div>
        ) : (
          <>
            {/* Conditionally render Navbar and Footer */}
            {!isAuthRoute && <Navbar />}

            {/* Render children (page content) */}
            {children}

            {/* Conditionally render the Footer */}
            {!isAuthRoute && !isFooter && <Footer />}
          </>
        )}
      </body>
    </html>
  );
}
