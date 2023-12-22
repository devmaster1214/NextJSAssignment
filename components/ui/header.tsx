'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

import Link from 'next/link'
import Logo from './logo'
import MobileMenu from './mobile-menu'
import Avatar from './avatar'
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
      <div className="mx-auto px-4 md:px-6 lg:px-8 2xl:px-24">
        <div className="flex items-center justify-between h-16 md:h-20 gap-8">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Page routing */}
          <div className='hidden md:flex md:grow'>
            <ul className='flex grow justify-start flex-wrap items-center gap-4 lg:gap-8'>
              <li>
                <Link href="/airdrop" className={`text-2xl font-semibold text-gray-400 transition duration-300 ease-in-out uppercase ${pathname == '/airdrop' ? 'bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400' : 'hover:text-white'}`}>Airdrop</Link>
              </li>
              <li>
                <Link href="/leaderboard" className={`text-2xl font-semibold text-gray-400 transition duration-300 ease-in-out uppercase ${pathname == '/leaderboard' ? 'bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400' : 'hover:text-white'}`}>Leaderboard</Link>
              </li>
              <li>
                <Link href="/devs" className={`text-2xl font-semibold text-gray-400 transition duration-300 ease-in-out uppercase ${pathname == '/devs' ? 'bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400' : 'hover:text-white'}`}>Devs</Link>
              </li>
              <li>
                <Link href="/about" className={`text-2xl font-semibold text-gray-400 transition duration-300 ease-in-out uppercase ${pathname == '/about' ? 'bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400' : 'hover:text-white'}`}>About</Link>
              </li>
            </ul>
          </div>

          <Avatar />
          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
