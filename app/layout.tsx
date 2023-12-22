import type { Metadata } from 'next'
import './globals.css'
import {Navbar, Footer} from '@/components'

export const metadata: Metadata = {
  title: 'Car Rental by Arslan Stack',
  description: 'Arslan | Web Developer & Expert Consultant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
