"use client"
import './globals.css';
import { Inter } from 'next/font/google';
import { ChakraProvider } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import NewNav from './components/NewNav';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NewNav />
      <ChakraProvider>
        <main>
          {children}
        </main>
      </ChakraProvider>
      </body>
    </html>
  )
}
