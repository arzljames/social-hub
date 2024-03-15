import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Siderbar } from "@/features/siderbar";
import { Main } from "@/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social Hub",
  description: "Your ultimate destination for all things social",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Main>
          <Siderbar />
          {children}
        </Main>
      </body>
    </html>
  );
}
