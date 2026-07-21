import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dinesh Kumar S | Full-Stack Web Developer Portfolio",
  description: "Professional portfolio of Dinesh Kumar S, final-year B.Tech IT student & developer specializing in Python, Django, Java, SQLite, and modern responsive web applications.",
  keywords: ["Dinesh Kumar S", "Portfolio", "Web Developer", "Next.js", "Django", "Python Developer", "React Developer", "B.Tech IT Career"],
  authors: [{ name: "Dinesh Kumar S" }],
  openGraph: {
    title: "Dinesh Kumar S | Full-Stack Developer Portfolio",
    description: "Welcome to Dinesh Kumar's software developer workspace",
    url: "https://dinesh8778.github.io",
    siteName: "Dinesh Kumar S Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#8b5cf6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900 dark:bg-slate-950 dark:text-zinc-50 transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="flex-grow">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
