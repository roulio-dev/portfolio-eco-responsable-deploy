import type { Metadata } from "next";
import "./globals.css"; // C'est cette ligne qui charge le fond d'écran

export const metadata: Metadata = {
    title: "Mon Portfolio Eco-Responsable Jules.A",
    description: "Portfolio de Jules.A",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
        <body>{children}</body>
        </html>
    );
}