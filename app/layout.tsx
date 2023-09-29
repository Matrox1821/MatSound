import {Sidebar} from "@/components/Sidebar";
import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import AuthProvider from "@/context/AuthProvider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Matfy",
  description: "Clon de Spotify",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es">
      <body className={inter.className} suppressHydrationWarning={true}>
        <AuthProvider>
          <div className="flex height-footer">
            <Sidebar />
            <main className="w-full sm:w-[80vw] bg-[#101010] h-full">
              <Header />
              {children}
            </main>
          </div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
