'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import logoSrc from '@/../public/logo.png'

const NAV_LINKS = [
  { href: '/',             label: 'Home' },
  { href: '/about',        label: 'About' },
  { href: '/services',     label: 'Services' },
  { href: '/publications', label: 'Publications' },
  { href: '/contact',      label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-navy border-b border-gray-100 dark:border-gray-700 shadow-[0_1px_8px_rgba(0,0,0,0.05)]">
      <nav className="section-pad flex items-center justify-between h-16 md:h-20">

        {/* Logo — larger so it's clearly visible */}
        <Link href="/" className="flex items-center group" aria-label="WormEra Research Lab">
          <Image
            src={logoSrc}
            alt="WormEra Research Lab"
            width={240}
            height={72}
            className="h-14 md:h-[4.2rem] w-auto object-contain group-hover:opacity-85 transition-opacity duration-200"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative px-3.5 py-2 rounded-lg text-[13.5px] font-medium transition-all duration-150
                ${pathname === l.href
                  ? 'text-teal dark:text-[#D1FAE5] bg-teal/8 dark:bg-teal/15 font-semibold'
                  : 'text-gray-500 dark:text-gray-400 hover:text-slate dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
            >
              {l.label}
              {pathname === l.href && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-teal" />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile: hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            className="w-9 h-9 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center transition-colors cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={18} className="text-slate dark:text-gray-100" /> : <Menu size={18} className="text-slate dark:text-gray-100" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-navy border-t border-gray-100 dark:border-gray-700 px-5 py-4 shadow-lg">
          <div className="space-y-1">
            {NAV_LINKS.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-[14px] font-medium transition-colors
                  ${pathname === l.href
                    ? 'bg-teal/8 dark:bg-teal/15 text-teal dark:text-[#D1FAE5] font-semibold'
                    : 'text-slate dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
