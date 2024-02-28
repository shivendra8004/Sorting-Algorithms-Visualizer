import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SortingAlgorithmProvider } from "@/context/Visualizer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Sorting Algorithm Visualizer",
    description: "Project developed with Next.js and TypeScript to visualize sorting algorithms by Shivendra Jat @github.com/shivendra8004",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <SortingAlgorithmProvider>{children}</SortingAlgorithmProvider>
            </body>
        </html>
    );
}
