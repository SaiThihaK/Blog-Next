import "../globals.css";

import type { Metadata } from "next";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";

export const metadata: Metadata = {
  title: "Blog App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="main-container">
      <div className="wrapper">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
