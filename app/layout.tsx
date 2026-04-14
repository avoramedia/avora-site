import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avora Media | Visuals That Convert",
  description: "High-fidelity video assets designed to dominate social feeds.",
  icons: {
    icon: "https://e3nsj1twgnbict6m.public.blob.vercel-storage.com/avora-logo.PNG",
    shortcut: "https://e3nsj1twgnbict6m.public.blob.vercel-storage.com/avora-logo.PNG",
    apple: "https://e3nsj1twgnbict6m.public.blob.vercel-storage.com/avora-logo.PNG",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#050505] antialiased">
        {children}
      </body>
    </html>
  );
}