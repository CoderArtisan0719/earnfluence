import type { Metadata } from "next";
import "./globals.css";
import "react-phone-input-2/lib/style.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ConvexClientProvider } from "./provider/ConvexClientProvider";
import { AuthProvider } from "./provider/AuthContext";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
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
      </body>
    </html>
  );
}
