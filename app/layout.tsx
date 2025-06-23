import type { Metadata } from "next"
import "./globals.css"
import NavBar from "@/components/navbar/NavBar"

export const metadata: Metadata = {
  title: "Volvo",
  description: "VOLVO HEAVY TRANSPORTATION",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="select-none">
        <NavBar />

        {children}
      </body>
    </html>
  )
}
