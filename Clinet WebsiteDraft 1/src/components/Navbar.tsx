'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
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
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled
        ? 'bg-white/97 dark:bg-navy/97 backdrop-blur-sm shadow-[0_1px_20px_rgba(0,0,0,0.06)] border-b border-gray-100 dark:border-gray-700'
        : 'bg-white dark:bg-navy border-b border-gray-100 dark:border-gray-700'
      }`}
    >
      <nav className="section-pad flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="WormEra Research Lab">
          <div className="w-11 h-11 md:w-13 md:h-13 rounded-xl overflow-hidden shrink-0 bg-teal/5 flex items-center justify-center ring-1 ring-teal/10 group-hover:ring-teal/30 transition-all duration-200">
            <Image src={logoSrc} alt="WormEra" width={52} height={52} className="w-10 h-10 object-contain" priority />
          </div>
          <div className="hidden sm:block">
            <p className="text-[14px] text-slate dark:text-gray-100 font-bold leading-tight tracking-tight">WormEra Research Lab</p>
            <p className="text-[11px] text-gray-400 dark:text-gray-500 leading-tight font-medium tracking-wide uppercase">
              C. elegans CRO · Ahmedabad
            </p>
          </div>
        </Link>

        {/* Desktop nav + CTA */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative px-3.5 py-2 rounded-lg text-[13.5px] font-medium transition-all duration-150
                ${pathname === l.href
                  ? 'text-teal dark:text-[#9FE1CB] bg-teal/6 dark:bg-teal/15 font-semibold'
                  : 'text-gray-500 dark:text-gray-400 hover:text-slate dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
            >
              {l.label}
              {pathname === l.href && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-teal" />
              )}
            </Link>
          ))}
          <div className="w-px h-5 bg-gray-200 dark:bg-gray-700 mx-2" />

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors mr-1"
              aria-label="Toggle theme"
            >
              {theme === 'dark'
                ? <Sun size={16} className="text-[#9FE1CB]" />
                : <Moon size={16} className="text-gray-500" />
              }
            </button>
          )}

          <Link href="/contact" className="btn-primary py-2 px-4 text-[13px] rounded-lg shadow-none">
            Free Consultation
          </Link>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-9 h-9 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark'
                ? <Sun size={16} className="text-[#9FE1CB]" />
                : <Moon size={16} className="text-gray-500" />
              }
            </button>
          )}
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
          <div className="space-y-1 mb-4">
            {NAV_LINKS.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-[14px] font-medium transition-colors
                  ${pathname === l.href
                    ? 'bg-teal/8 dark:bg-teal/15 text-teal dark:text-[#9FE1CB] font-semibold'
                    : 'text-slate dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary w-full justify-center text-[13px] rounded-xl">
            Free Consultation →
          </Link>
        </div>
      )}
    </header>
  )
}
