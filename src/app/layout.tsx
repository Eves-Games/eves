import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

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
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
