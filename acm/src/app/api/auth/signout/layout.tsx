import "@/app/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | NIO ",
  description: "Created By The Students Of Don Bosco",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#0A0A0A] text-white">
      <body>{children}</body>
    </html>
  );
}
