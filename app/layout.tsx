import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Fazet Edutech - Smart Solutions for Nigerian Schools',
  description: 'Streamline school operations, access rich learning resources, and pay only for what you use.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
