import type React from "react";
import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tunas Abadi Raya - General Contractor & IT Consultant Services",
    template: "%s | Tunas Abadi Raya",
  },
  description:
    "Professional IT consulting services specializing in custom application development for businesses.",
  keywords: [
    "IT consulting, tunasabadiraya, tarofficial, cvtar, software development manado, tunas abadi raya, software house manado, government contractor manado, jasa pembuatan aplikasi manado, jasa pembuatan website manado",
  ],
  verification: {
    other: {
      "facebook-domain-verification": ["r80cdeacxh6o9vf6kdoyf1igpylafx"],
      "google-site-verification": ["zfiYbEWGkt5K86nzJ-IpH7MmeM4eqHT8D4dUJaf_7Oc"],
    },
  },
  openGraph: {
    title: "Tunas Abadi Raya",
    description: "IT Consulting based in Manado",
    url: "https://tunasabadiraya.cv",
    images: [
      {
        url: "https://tunasabadiraya.cv/tar-office.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ldifayol",
    images: ["https://tunasabadiraya.cv/tar-office.png"],
  },
  icons: {
    icon: [
      {
        url: "/icon-48.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
