import type { Metadata } from 'next';
import '../globals.css';
import Footer from '@/app/components/footer';
import Navbar from '@/app/components/Navbar';
export const metadata: Metadata = {
  title: 'MK Automobili',
  description: 'Veliki izbor kvalitetnih rabljenih vozila',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
