import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter for a cleaner, premium look
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// THIS IS THE FIX: This controls the Browser Tab name and Icon
export const metadata: Metadata = {
  title: "Avora Media | Visuals That Convert",
  description: "High-fidelity video assets designed to dominate social feeds.",
  icons: {
    icon: "https://e3nsj1twgnbict6m.public.blob.vercel-storage.com/avora-logo.PNG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#050505] antialiased`}>
        {children}
      </body>
    </html>
  );
}