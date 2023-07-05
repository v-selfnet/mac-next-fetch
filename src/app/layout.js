import './globals.css'
import { Inter, Roboto } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ 
  subsets: ['latin'], 
  weight: ['100', '400', '500', '700'],
  variable: "--font-roboto"
})

export const metadata = {
  title: 'About | Next Hero',
  description: 'Next Hero Comming Soon...',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-roboto`}>
        {children}
      </body>
    </html>
  )
}
export default RootLayout;
