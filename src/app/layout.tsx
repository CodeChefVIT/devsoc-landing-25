import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Script from "next/script"; // Import the Script component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.devsoc.codechefvit.com/"),
  title: "DEVSOC'25",
  description:
    "DEVSOC-25 is here! Join us in the Anna Auditorium on 3rd Feb for an intense coding experience, fun activities, and insightful speaker sessions. Find out more at our website!",
  icons: [{ rel: "icon", url: "https://devsoc.codechefvit.com/favicon.svg" }],
  openGraph: {
    title: "DEVSOC'25",
    images: [{ url: "/devsoc-og.png" }],
    url: "https://devsoc.codechefvit.com/",
    type: "website",
    description:
      "DEVSOC-25 is here! Join us in the Anna Auditorium on 3rd Feb for an intense coding experience, fun activities, and insightful speaker sessions. Find out more at our website!",
    siteName: "DEVSOC'25",
  },
  twitter: {
    card: "summary_large_image",
    title: "DEVSOC'25",
    description:
      "DEVSOC-25 is here! Join us in the Anna Auditorium on 3rd Feb for an intense coding experience, fun activities, and insightful speaker sessions. Find out more at our website!",
    images: [{ url: "/DEVSOC.png" }],
  },
  keywords: [
    "DEVSOC'25 official website",
    "CodeChef-VIT DEVSOC hackathon",
    "DEVSOC 2025 VIT",
    "VIT DEVSOC programming challenge",
    "VIT 48-hour hackathon",
    "Yantra Week DEVSOC event",
    "DEVSOC real-world solutions",
    "DEVSOC open-source development",
    "VIT coding hackathon DEVSOC",
    "DEVSOC programming mentorship",
    "DEVSOC innovation tracks",
    "DEVSOC collaborative projects",
    "DEVSOC freshers' coding event",
    "DEVSOC student programming",
    "VIT coding community DEVSOC",
    "DEVSOC tech exploration",
    "DEVSOC industry mentorship",
    "VIT Yantra Week hackathon",
    "DEVSOC networking platform",
    "DEVSOC coding competition",
    "VIT competitive coding DEVSOC",
    "VIT DEVSOC registration",
    "DEVSOC technology tracks",
    "DEVSOC innovation platform",
    "VIT student innovation hackathon",
    "DEVSOC free and open-source",
    "DEVSOC coding bootcamp",
    "DEVSOC software development",
    "DEVSOC project-building",
    "VIT DEVSOC highlights 2025",
    "DEVSOC coding tutorials",
    "DEVSOC challenge solutions",
    "DEVSOC programming resources",
    "VIT hackathon opportunities",
    "DEVSOC student coding platform",
    "VIT DEVSOC problem-solving",
    "DEVSOC collaboration projects",
    "DEVSOC hackathon news",
    "DEVSOC networking and innovation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
       <link rel="icon" type="image/x-icon" href="/assets/Devsoc.svg"></link>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XK2D8J0C4L" // Replace with your Google Analytics ID
        ></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XK2D8J0C4L');`}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
