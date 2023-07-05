import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'About | Next Hero',
  description: 'Next Hero Comming Soon...',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>Navbar</h1>
        {children}
        <h1>Footer</h1>
      </body>
    </html>
  )
}
export default RootLayout;
