import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import { Next13NProgress } from 'nextjs13-progress';
import Providers from "./Providers";
import { Toaster } from "@/components/ui/sonner"
import { getServerSession } from "next-auth";
import { cookies } from "next/headers";
import { authOptions } from "@/lib/auth";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Domain Flippers",
  description: "Buy and sell domains",
};

export default async function RootLayout({ children }) {


  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers session={session}>
          <Next13NProgress color="#9780ff" height={5} options={{ showSpinner: false }} />
          <Header />
          {children}
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
