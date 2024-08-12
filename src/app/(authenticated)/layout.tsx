import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";
import Header from "@/components/common/layout/header";
import SidebarMenu from "@/components/common/layout/sidebar-menu";
import Header2 from "@/components/common/layout/header/header-2";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="tw-flex tw-flex-col tw-p-4 tw-min-h-screen tw-gap-4">
          <Header2 />
          {children}
        </main>
      </body>
    </html>
  );
}
