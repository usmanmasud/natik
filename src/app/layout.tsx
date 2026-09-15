import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NATIK — AI Operations Intelligence",
  description: "AI-powered business operations platform for African businesses",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
