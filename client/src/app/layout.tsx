import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { config } from './config';
import { headers } from 'next/headers';
import { cookieToInitialState } from '@account-kit/core';
import Navbar from './components/Navbar';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@/components/theme-provider';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'DockMed',
    description: 'NextGen Healthcare On-Chain',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const initialState = cookieToInitialState(
        config,
        headers().get('cookie') ?? undefined
    );
    return (
        <html lang="en">
            <body className={`${outfit.className} bg-background text-black`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Providers initialState={initialState}>
                        <Toaster position="top-center" reverseOrder={false} />
                        <Navbar />
                        <div className="container mx-auto">{children}</div>
                    </Providers>
                </ThemeProvider>
            </body>
        </html>
    );
}