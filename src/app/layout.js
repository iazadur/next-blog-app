import Wrap from '@/utils/Wrap'
import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '@/components/common/Nav'
import Footer from '@/components/common/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog',
  description: 'Blog app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Wrap>
          <div className="font-roboto bg-gray-100">
            <Nav />
            {children}
            <Footer />
          </div >
        </Wrap>
      </body>
    </html>
  )
}
