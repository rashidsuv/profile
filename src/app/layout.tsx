import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rashid U | Front-end Engineer",
  description: "Rashid U is a 27-year-old Front-end Engineer based in Manjeri, Kerala, India, with 3+ years of experience building modern web applications with React.js and frontend architecture.",
  keywords: ["Rashid U", "Front-end Engineer", "React.js", "TypeScript", "Tailwind CSS", "Equipo", "Web Developer", "Kerala", "India"],
  authors: [{ name: "Rashid U" }],
  creator: "Rashid U",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rashidu.dev",
    title: "Rashid U | Front-end Engineer",
    description: "Personal portfolio of Rashid U, a Front-end Engineer specializing in React.js and modern web technologies.",
    siteName: "Rashid U",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rashid U | Front-end Engineer",
    description: "Personal portfolio of Rashid U, a Front-end Engineer specializing in React.js and modern web technologies.",
    creator: "@rashidu",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased bg-[#0a0a0a] text-[#ededed]`}>
        {children}
      </body>
    </html>
  );
}
