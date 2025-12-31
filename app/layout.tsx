import type React from "react";
import "@/app/globals.css";

export const metadata = {
  title: "Tunas Abadi Raya - General Contractor & IT Consultant Services",
  description:
    "Professional IT consulting services specializing in custom application development for businesses.",
  verification: {
    other: {
      "facebook-domain-verification": ["r80cdeacxh6o9vf6kdoyf1igpylafx"],
      "google-site-verification": ["zfiYbEWGkt5K86nzJ-IpH7MmeM4eqHT8D4dUJaf_7Oc"],
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
