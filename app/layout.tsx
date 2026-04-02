import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luxova — Spec-Grade Architectural Lighting",
  description: "Architectural lighting for professionals.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

