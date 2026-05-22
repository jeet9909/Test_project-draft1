'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import logoSrc from '@/../public/logo.png'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/publications', label: 'Publications' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 transition-shadow ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="section-pad flex items-center justify-between h-16 md:h-20">
        {/* Logo area */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden shrink-0 bg-teal/5 flex items-center justify-center">
            <Image src={logoSrc} alt="WormEra Research Lab" width={56} height={56} className="w-11 h-11 object-contain" priority />
          </div>
          <div className="hidden sm:block">
            <p className="text-[11px] text-gray-400 leading-none mb-0.5">Whole-organism research platform</p>
            <p className="text-[13px] text-slate font-medium leading-tight max-w-[280px]">
              Pioneering Rapid In Vivo Screening through <em className="text-teal">C. elegans</em> Model
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-[14px] transition-colors hover:text-teal ${
                  pathname === l.href ? 'font-semibold text-slate' : 'text-gray-500'
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2 cursor-pointer" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <div className="w-5 h-0.5 bg-slate mb-1.5 transition-all" />
          <div className="w-5 h-0.5 bg-slate mb-1.5 transition-all" />
          <div className="w-5 h-0.5 bg-slate transition-all" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4">
          {NAV_LINKS.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`block py-3 text-[15px] border-b border-gray-50 ${pathname === l.href ? 'font-semibold text-teal' : 'text-slate'}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
