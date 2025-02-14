

"use client"; // Add this at the top of the file

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import Loading from "./loading";
import { useState, useEffect } from "react"; // Import useState and useEffect

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true); // Manage isLoading state

  useEffect(() => {
    setIsLoading(true); // Set isLoading to true initially
    const timer = setTimeout(() => {
      setIsLoading(false); // Set it to false after 2 seconds
    }, 2000);
    
    return () => clearTimeout(timer); // Clean up the timeout on unmount
  }, []);

  const studioAndHome = true; // Define studioAndHome variable

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          <Toaster />
          {(studioAndHome && !isLoading) && <Header />}
          {isLoading ? <Loading /> : children}
          {(studioAndHome && !isLoading) && <Footer />}
        </body>
      </html>
    </ClerkProvider>
  );
}
