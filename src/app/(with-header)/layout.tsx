// "use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import React from "react";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div
        className={
          "mt-[120px]"
          // twMerge(isTriggerScrollTop && "mt-[180px]")
        }
      >
        {children}
        <Footer />
      </div>
    </>
  );
}
