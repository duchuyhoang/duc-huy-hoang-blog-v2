// "use client";
import type { Metadata } from "next";
import { Roboto, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ThemeContextWrapper from "@/context/ThemeContext";
import UIContextWrapper from "@/context/UIContext";
import { twMerge } from "tailwind-merge";
import DataContextWrapper from "@/context/DataContext";
import path from "path";
import { getMDXPostsDataAndMetaData } from "@/utils";
import ScrollToTop from "@/components/ScrollToTop";

// const roboto = Roboto({
//   variable: "--roboto",
//   weight: ["100", "300", "400", "500", "700", "900"],
//   subsets: ["vietnamese"],
// });

const openSans = Open_Sans({
  variable: "--open-sans",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const MDX_POST_DIR = path.join(process.cwd(), "src/posts");

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const datas = await getMDXPostsDataAndMetaData(MDX_POST_DIR);

  return (
    <html
      lang="en"
      suppressHydrationWarning
      // className={clsx(localStorage.getItem("theme") === "dark" ? "dark" : "")}
    >
      <body
        className={twMerge(
          openSans.className,
          "bg-primary dark:bg-dark-primary overflow-x-hidden"
        )}
      >
        <DataContextWrapper posts={datas}>
          <UIContextWrapper>
            <ThemeContextWrapper>
              {children}
              <ScrollToTop />
            </ThemeContextWrapper>
          </UIContextWrapper>
        </DataContextWrapper>
      </body>
    </html>
  );
}
