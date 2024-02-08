import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins } from 'next/font/google';
import Head from "next/head";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abby's Page",
  description: "Abdiel's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="https://abdiel-ramirez.github.io/MyPortafolio/apple-touch-icon.png?" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://abdiel-ramirez.github.io/MyPortafolio/favicon-32x32.png?" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://abdiel-ramirez.github.io/MyPortafolio/favicon-16x16.png?" />
        <link rel="manifest" href="https://abdiel-ramirez.github.io/MyPortafolio/site.webmanifest?" />
        <link rel="mask-icon" href="https://abdiel-ramirez.github.io/MyPortafolio/safari-pinned-tab.svg?" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
