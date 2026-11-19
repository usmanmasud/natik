import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "NATIK — AI Operations Intelligence",
  description:
    "NATIK is an AI operations platform for African businesses. Track payments, customers, orders and staff tasks, and get AI-powered insights and alerts.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "NATIK — AI Operations Intelligence",
    description: "AI-powered business operations platform for African businesses.",
    url: site.url,
    siteName: "NATIK",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
