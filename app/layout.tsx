import './globals.css';
import { EdgeStoreProvider } from '@/lib/edgestore';
import AuthProvider from '@/providers/AuthProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blog App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <EdgeStoreProvider>
            <div className="main-container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </EdgeStoreProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
