import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { TopNav } from "./_components/TopNav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "brr.dev",
  description:
    "A portfolio showcasing the recent projects and dev work of Brandon Ramirez, a full-stack web developer based in San Francisco, CA.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${inter.variable} flex flex-col`}>
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
