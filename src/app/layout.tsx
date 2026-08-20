import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import AuthSessionProvider from "@/components/session-provider";
import AuthButton from "@/components/auth-button";
import "./globals.css";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Prompt Library",
  description:
    "A searchable, browsable library of enterprise-grade Claude prompts, organized by company role and prompt type.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        <AuthSessionProvider>
          <div className="flex justify-end border-b border-border bg-surface px-4 py-1.5 md:px-8">
            <AuthButton />
          </div>
          {children}
        </AuthSessionProvider>
      </body>
    </html>
  );
}
