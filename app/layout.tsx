import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "THWE THWE AUNG | Portfolio",
  description: "Portfolio website of THWE THWE AUNG, aspiring Java and System Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
