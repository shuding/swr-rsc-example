import type { Metadata } from "next";
import "./style.css";

export const metadata: Metadata = {
  title: "SWR + RSC Example",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
