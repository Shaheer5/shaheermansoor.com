'use client'

import { useState } from 'react'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'
import OpenToWorkBadge from './ui/OpenToWorkBadge'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)
  const [bubbleShow, setBubbleShow] = useState(true)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
        setBubbleShow(false)
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <div className="relative sm:hidden">
      {bubbleShow && (
        <div
          className="absolute -top-1 right-0 flex aspect-square h-[14px] w-[14px] animate-pulse rounded-full bg-green-500/50 dark:bg-green-400/50"
          aria-hidden="true"
        >
          <div className="m-auto h-2 w-2 rounded-full bg-green-500 dark:bg-green-400"></div>
        </div>
      )}
      <button
        aria-label="Toggle Menu"
        onClick={onToggleNav}
        className="ml-1 mr-1 h-8 w-8 rounded-lg bg-gray-300 bg-opacity-80 shadow-lg dark:bg-gray-600 dark:bg-opacity-80"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="h-8 w-8">
          <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" fill="#4891d9" />
          <path d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" fill="#000000" />
          <path d="M3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" fill="#ffffff" />
        </svg>
      </button>
      <div
        className={`fixed left-0 top-0 z-20 ml-0 h-screen w-full transform  bg-white bg-opacity-90  duration-300 ease-in-out dark:bg-gray-950 dark:bg-opacity-[0.90] sm:hidden ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end">
          <button
            className="mr-7 mt-5 h-8 w-8 rounded-lg bg-gray-300 bg-opacity-80 shadow-lg dark:bg-transparent"
            aria-label="Toggle Menu"
            onClick={onToggleNav}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="h-8 w-8">
              <path d="M5 5l10 10" stroke="#006600" strokeWidth="4" strokeLinecap="round" />
              <path d="M15 5l-10 10" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <nav className="fixed mt-12 h-full">
          {headerNavLinks.map((link) => (
            <div key={link.title} className="px-12 py-4">
              <Link
                href={link.href}
                className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                onClick={onToggleNav}
              >
                {link.title}
              </Link>
            </div>
          ))}
          <OpenToWorkBadge
            classes={'ml-12 mt-4 shadow-md dark:shadow-[#d6428d] rounded-full'}
            title={''}
          />
        </nav>
      </div>
    </div>
  )
}

export default MobileNav
