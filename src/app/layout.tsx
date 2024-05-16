import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500"
});

export const metadata: Metadata = {
  title: "Eve's Games",
  description: "Eve's Games is the game studio responsible for various digital products and services like RoLinker and Arstotzka, across different platforms like Roblox and Minecraft.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(poppins.className, "absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]")}>
        {children}
      </body>
    </html>
  );
}
