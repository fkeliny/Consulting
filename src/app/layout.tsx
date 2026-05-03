import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Toroscale",
  description:
    "We help B2B companies design automated revenue systems and execute go-to-market strategies that scale—without the chaos.",
  keywords: [
    "SaaS consulting",
    "Revenue Operations",
    "B2B Growth",
    "Go-To-Market Strategy",
    "Automation",
    "sales optimization",
    "data strategy",
    "RevOps",
  ],
  openGraph: {
    title: "Raveact | Consulting for Automation, Revenue & Go-To-Market Strategy",
    description:
      "We help B2B companies design automated revenue systems and execute go-to-market strategies that scale—without the chaos.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#030303]">
        {children}
      </body>
    </html>
  );
}
