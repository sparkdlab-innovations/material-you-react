import { ThemeProvider } from 'material-you-react';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Material You Next.js Example',
  description:
    'A sample application demonstrating the use of Material You React package with Next.js.',
  applicationName: 'M3Next',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider>
          <div id="root">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
