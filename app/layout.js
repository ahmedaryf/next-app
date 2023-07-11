import './globals.css';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Nav />
      <main>
        {children}
      </main>
      </body>
    </html>
  )
}
