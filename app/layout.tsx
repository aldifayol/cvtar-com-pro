import type React from "react";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Tunas Abadi Raya - General Contractor & IT Consultant Services",
  description:
    "Professional IT consulting services specializing in custom application development for businesses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
