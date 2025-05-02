import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"


export const metadata: Metadata = {
  title: "Go AI Platform | Go AI",
  description: "Create and launch your own custom Gen AI-powered applications in minutes with Go AI platform! Powered by  multiple AI Agents and no coding required.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
