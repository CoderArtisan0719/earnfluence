'use client'
import type { Metadata } from "next";
import { Provider } from 'react-redux';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';


import "./globals.css";
import '@radix-ui/themes/styles.css';

import "react-phone-input-2/lib/style.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ConvexClientProvider } from "./provider/ConvexClientProvider";
import { AuthProvider } from "./provider/AuthContext";
import store from '@/store';


// export const metadata: Metadata = {
//   title: "earnfluence",
//   description: "earnfluence",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <Dialog.Root>
          <div className="max-w-[1440px] m-auto">
            <Provider store={store}>
              <AuthProvider>
                <ConvexClientProvider>
                  <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                  >
                    {children}
                  </ThemeProvider>
                </ConvexClientProvider>
              </AuthProvider>
            </Provider>
          </div>
        </Dialog.Root>
      </body>
    </html>
  );
}
