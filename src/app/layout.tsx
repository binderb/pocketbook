import type { Metadata } from 'next'
import { Inter, Open_Sans } from 'next/font/google'
import './globals.css'
import Nav from './(global components)/Nav'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300','400','700'],
  variable: '--opensans',
})

export const metadata: Metadata = {
  title: 'Pocketbook',
  description: 'A simple ledger and budget planning tool.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} bg-dark text-light`}>
        {children}
      </body>
    </html>
  )
}
