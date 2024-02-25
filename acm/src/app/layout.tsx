import ClientProvider from "@/components/ClientProvider";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home · DBCE ACM",
  description: "The DBCE ACM Student Chapter",
  verification: { google: "vG3IyypihOjBQ-XNlPyhD2UADs1zoSfMnl9sXJ4tqgo" },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientProvider>
      <html lang="en">
        <body>
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    </ClientProvider>
  );
}
