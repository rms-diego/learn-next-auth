import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/themeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = { title: 'Login next auth and shadcn ui' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
      >
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
