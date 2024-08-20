import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/ui/header";
import Footer from "@/app/components/ui/footer";

export const metadata: Metadata = {
    title: "Admss inventory list site",
    description: "Adms inventory list site",
};

export const dynamic = 'force-dynamic'

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    );
}
