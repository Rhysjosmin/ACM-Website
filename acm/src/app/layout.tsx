import Footer from './components/Footer'
import NavBar from './components/Navbar'
import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'DBCE ACM',
  description: 'The DBCE ACM Student Chapter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body>
            <NavBar/>

      {children}
      <Footer/>

    </body>


    </html>
  )
}