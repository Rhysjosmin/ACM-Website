import ClientProvider from "@/components/ClientProvider";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata & { "google-adsense-account": string } = {
  title: "Home · DBCE ACM",
  description: "The DBCE ACM Student Chapter",
  verification: { google: "vG3IyypihOjBQ-XNlPyhD2UADs1zoSfMnl9sXJ4tqgo" },
  "google-adsense-account": "ca-pub-4445496071195641",
};
{
  /* <meta name="google-adsense-account" content="ca-pub-4445496071195641"> */
}

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
