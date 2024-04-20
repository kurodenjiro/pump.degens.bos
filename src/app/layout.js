'use client';
import './globals.css';
import '@near-wallet-selector/modal-ui/styles.css';
import { ThemeProvider } from "@/components/theme-provider"


import { NetworkId } from '@/config';
import { Navigation } from '@/components/navigation';
import { useInitWallet } from '@/wallets/wallet-selector';

export default function RootLayout({ children }) {
  useInitWallet({ createAccessKeyFor: '', networkId: NetworkId });

  return (
    <html lang='en'>
      <body class='dark:bg-gray-800 dark:text-white'>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
