import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Studio Shop",
  description: "Mini boutique Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}