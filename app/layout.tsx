
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Mendly | AI That Mends Your Workflows",
    template: "%s | Mendly",
  },
  description:
    "We find your biggest business bottleneck and mend it with AI. Discover smarter workflows, practical automation, and better ways to work with Mendly.",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
