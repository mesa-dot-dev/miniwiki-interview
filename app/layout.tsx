import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MiniWiki - Repository Intelligence",
  description: "Chat with your codebase using AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
