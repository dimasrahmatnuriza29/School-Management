import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EduManage Pro — School Management Platform",
  description:
    "Comprehensive education management platform for schools, tutoring centers, and educational foundations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
