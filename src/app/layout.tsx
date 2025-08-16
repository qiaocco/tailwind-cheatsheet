import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tailwind CSS Cheatsheet",
  description: "A quick reference guide to learn Tailwind CSS. Easily browse and search through all Tailwind utility classes and CSS properties on a single page.",
  keywords: ["cheat", "sheet", "cheatsheet", "tailwind", "css", "classes", "utilities", "v4", "spa", "single page", "html", "javascript"],
  openGraph: {
    type: "website",
    url: "https://tailwindcss.504b.cc/",
    title: "Tailwind CSS Cheatsheet",
    description: "A quick reference guide to learn Tailwind CSS. Easily browse and search through all Tailwind utility classes and CSS properties on a single page.",
    siteName: "Tailwind CSS Cheatsheet",
    images: [
      {
        url: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tailwind CSS Cheatsheet",
    description: "A quick reference guide to learn Tailwind CSS. Easily browse and search through all Tailwind utility classes and CSS properties on a single page.",
    images: [
      {
        url: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg",
        width: 1200,
        height: 630,
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
      <body>
        {children}
      </body>
    </html>
  );
}
