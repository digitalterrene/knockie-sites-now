import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/native/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Knockie Sites",
  description: "Now you can add your own sites",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
