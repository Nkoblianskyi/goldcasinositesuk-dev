"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function GoldCrownLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Shield body */}
      <path
        d="M24 2 L43 10.5 L43 32 Q43 46 24 54 Q5 46 5 32 L5 10.5 Z"
        stroke="hsl(43,85%,42%)"
        strokeWidth="1.5"
        fill="hsl(222,47%,18%)"
      />
      {/* Crown base bar */}
      <rect x="12" y="21" width="24" height="3" rx="0.5" fill="hsl(43,85%,48%)" />
      {/* Crown points */}
      <path
        d="M12 21 L12 16 L18 20 L24 13 L30 20 L36 16 L36 21"
        fill="hsl(43,85%,48%)"
        strokeLinejoin="round"
      />
      {/* Crown jewels */}
      <circle cx="24" cy="12" r="1.8" fill="hsl(152,60%,40%)" />
      <circle cx="13" cy="17" r="1.2" fill="hsl(43,95%,62%)" />
      <circle cx="35" cy="17" r="1.2" fill="hsl(43,95%,62%)" />
      {/* G letterform */}
      <path
        d="M18 36 Q18 44 24 44 Q30 44 30 38 L26 38"
        stroke="hsl(40,33%,97%)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const navLinks = [
  { label: "Home",           href: "/"                   },
  { label: "About Us",       href: "/about-us"           },
  { label: "Privacy Policy", href: "/privacy-policy"     },
  { label: "Cookie Policy",  href: "/cookie-policy"      },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-[hsl(40,30%,88%)] shadow-sm">
      {/* Gold top accent */}
      <div
        className="h-[3px] w-full"
        style={{
          background:
            "linear-gradient(90deg, hsl(152,55%,36%) 0%, hsl(43,85%,48%) 50%, hsl(152,55%,36%) 100%)",
        }}
      />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-18">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group shrink-0"
            aria-label="GoldCasinoSitesUK — Home"
          >
            <GoldCrownLogo className="w-9 h-11 shrink-0 transition-opacity duration-300 group-hover:opacity-80" />
            <div className="flex flex-col leading-none select-none">
              <span className="font-serif font-black text-[hsl(43,85%,42%)] tracking-[0.05em] text-xl leading-none group-hover:text-[hsl(43,85%,35%)] transition-colors duration-300">
                Gold
              </span>
              <span className="font-sans font-semibold text-[8px] tracking-[0.32em] uppercase text-[hsl(222,47%,35%)] leading-none mt-[3px] group-hover:text-[hsl(222,47%,20%)] transition-colors duration-300">
                Casino&nbsp;Sites&nbsp;UK
              </span>
              <span className="mt-[5px] block h-px w-full bg-[hsl(43,85%,48%)]/40 group-hover:bg-[hsl(43,85%,48%)] transition-colors duration-300" />
            </div>
          </Link>

          {/* Nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    "relative px-4 py-2 text-sm font-sans font-medium rounded-lg transition-all duration-200",
                    active
                      ? "text-[hsl(222,47%,13%)] bg-[hsl(43,85%,48%)]/12"
                      : "text-[hsl(222,47%,30%)] hover:text-[hsl(222,47%,13%)] hover:bg-[hsl(222,47%,95%)]",
                  ].join(" ")}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[hsl(43,85%,48%)]" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Mobile nav */}
          <nav aria-label="Mobile navigation" className="flex md:hidden items-center gap-0.5">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    "px-2 py-1 text-[10px] font-sans font-semibold rounded transition-all duration-200",
                    active
                      ? "text-[hsl(222,47%,13%)] bg-[hsl(43,85%,48%)]/15"
                      : "text-[hsl(222,47%,40%)] hover:text-[hsl(222,47%,13%)]",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

        </div>
      </div>
    </header>
  )
}
