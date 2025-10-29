import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Bricolage_Grotesque, Figtree, Geist, Geist_Mono, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/navbar";
import Footer from "@/components/home/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-figtree",
})

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Component Chain",
  description: "A curated list of the best Shadcn-inspired libraries, designed to help you build and ship lightning-fast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bricolageGrotesque.variable} ${libreBaskerville.variable} ${figtree.className} antialiased overflow-hidden h-screen`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div className="fixed top-16 left-0 right-0 bottom-0 overflow-y-auto flex flex-col">
            <div className='max-w-6xl min-w-0 mx-auto flex-1 flex flex-col min-h-full'>
              {children}
            </div>
          </div>
          {/* <div className="fixed max-w-6xl mx-auto bottom-0 left-0 right-0 z-50">
            <Footer />
          </div> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
