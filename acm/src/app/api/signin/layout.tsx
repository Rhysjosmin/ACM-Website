// import "../../../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | DBCE ACM ",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
