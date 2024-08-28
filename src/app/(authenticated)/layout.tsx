import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";
import DefaultHeader from "@/components/common/header";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function AuthenticatedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "tw-min-h-screen tw-flex tw-flex-col")}>
        <div>
          <DefaultHeader />
        </div>
        <main className="tw-mt-8">{children}</main>
      </body>
    </html>
  );
}
