import './globals.css'
import type { Metadata } from 'next'
import { Navbar, Menu, Search } from './components';
import { Cabin, Quicksand } from 'next/font/google';

const cabin = Cabin({
    subsets: ["latin"],
    weight: ["400", '500', '600'],
    variable: "--font-cabin",
});
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["400", '500', '600']
})

export const metadata: Metadata = {
  title: 'NB Movies - TMDB',
  description: 'Search for movies, trending, top rated, your favourites...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cabin.variable} ${quicksand.variable}`}>
      <body>
        <Navbar />
        <Menu />
        <Search />
        {children}
      </body>
    </html>
  )
}
