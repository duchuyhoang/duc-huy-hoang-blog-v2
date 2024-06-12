"use client";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import clsx from "clsx";
import ThemeContextWrapper from "@/context/ThemeContext";

const roboto = Roboto({
  variable: "--roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["vietnamese"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // className={clsx(localStorage.getItem("theme") === "dark" ? "dark" : "")}
    >
      <body className={clsx(roboto.className, "dark:bg-dark-primary")}>
        <ThemeContextWrapper>{children}</ThemeContextWrapper>
      </body>
    </html>
  );
}
