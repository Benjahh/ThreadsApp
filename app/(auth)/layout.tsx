import React from "react";
import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"

import "../globals.css"

export const metadata = {
    title: "Threads",
    description: "Next js meta data"
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
        return (
        <ClerkProvider>
            <html lang="een">
                <body className={`${inter.className} bg-dark-1`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
        )
        
    }
