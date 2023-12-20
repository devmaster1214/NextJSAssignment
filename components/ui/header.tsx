'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

import Link from 'next/link'
import Logo from './logo'
import MobileMenu from './mobile-menu'
export default function Header() {
  const [top, setTop] = useState<boolean>(true);
  const pathname = usePathname();

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.scrollY > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-80 transition duration-500 ease-in ${!top ? 'bg-background backdrop-blur-sm' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20 gap-8">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Page routing */}
          <div className='hidden md:flex md:grow'>
            <ul className='flex grow justify-start flex-wrap items-center gap-8'>
              <li>
                <Link href="/airdrop" className={`text-2xl font-semibold text-gray-400 hover:text-white transition duration-300 ease-in-out uppercase ${pathname == '/airdrop' && 'bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400'}`}>Airdrop</Link>
              </li>
              <li>
                <Link href="/leaderboard" className={`text-2xl font-semibold text-gray-400 hover:text-white transition duration-300 ease-in-out uppercase ${pathname == '/leaderboard' && 'bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400'}`}>Leaderboard</Link>
              </li>
              <li>
                <Link href="/devs" className={`text-2xl font-semibold text-gray-400 hover:text-white transition duration-300 ease-in-out uppercase ${pathname == '/devs' && 'bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400'}`}>Devs</Link>
              </li>
              <li>
                <Link href="/about" className={`text-2xl font-semibold text-gray-400 hover:text-white transition duration-300 ease-in-out uppercase ${pathname == '/about' && 'bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400'}`}>About</Link>
              </li>
            </ul>
          </div>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
