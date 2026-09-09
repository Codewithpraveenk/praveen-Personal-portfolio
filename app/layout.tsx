import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'K Praveenkanth — Aspiring AI / ML Engineer', description: 'AI and Data Science student at Chennai Institute of Technology. Exploring machine learning and computer vision.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}


