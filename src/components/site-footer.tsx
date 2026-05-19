import Link from "next/link"
import Image from "next/image"
import { GoldCrownLogo } from "@/components/site-header"

const quickLinks = [
  { label: "Home",                  href: "/"                   },
  { label: "About Us",              href: "/about-us"           },
  { label: "Privacy Policy",        href: "/privacy-policy"     },
  { label: "Cookie Policy",         href: "/cookie-policy"      },
  { label: "Terms and Conditions",  href: "/terms"              },
  { label: "Responsible Gaming",    href: "/responsible-gaming" },
]

const partnerLogos = [
  { src: "/gamble-aware.png",             alt: "BeGambleAware",          href: "https://www.begambleaware.org/"         },
  { src: "/gamcare.png",                  alt: "GamCare",                href: "https://www.gamcare.org.uk/"            },
  { src: "/gordon.png",                   alt: "Gambling Therapy",       href: "https://www.gamblingtherapy.org/"       },
  { src: "/Gambling_Commission_logo.png", alt: "UK Gambling Commission", href: "https://www.gamblingcommission.gov.uk/" },
  { src: "/gamstop.svg",                  alt: "GamStop",                href: "https://www.gamstop.co.uk/"             },
]

export function SiteFooter() {
  return (
    <footer className="bg-white border-t border-[hsl(40,30%,88%)]">
      {/* Gold + emerald top accent */}
      <div
        className="h-[3px]"
        style={{
          background:
            "linear-gradient(90deg, hsl(152,55%,36%) 0%, hsl(43,85%,48%) 50%, hsl(152,55%,36%) 100%)",
        }}
      />

      <div className="container mx-auto px-4 pt-12 pb-6">

        {/* Main grid — 2 columns: brand + navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-10 border-b border-[hsl(40,30%,88%)]">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3 group w-fit" aria-label="GoldCasinoSitesUK home">
              <GoldCrownLogo className="w-9 h-11 shrink-0 group-hover:opacity-80 transition-opacity duration-300" />
              <div className="flex flex-col leading-none select-none">
                <span className="font-serif font-black tracking-[0.05em] text-xl leading-none text-[hsl(43,85%,42%)] group-hover:text-[hsl(43,85%,35%)] transition-colors duration-300">
                  Gold
                </span>
                <span className="font-sans font-semibold text-[8px] tracking-[0.32em] uppercase text-[hsl(222,47%,35%)] leading-none mt-1 group-hover:text-[hsl(222,47%,20%)] transition-colors duration-300">
                  Casino&nbsp;Sites&nbsp;UK
                </span>
                <span className="mt-1.5 block h-px w-full bg-[hsl(43,85%,48%)]/40 group-hover:bg-[hsl(43,85%,48%)] transition-colors duration-300" />
              </div>
            </Link>

            <p className="text-xs text-[hsl(222,15%,45%)] leading-relaxed">
              Britain&apos;s most trusted gold casino comparison platform. Independent, expert-led reviews of every UKGC-licensed operator.
            </p>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[hsl(358,72%,48%)] flex items-center justify-center text-white font-black text-xs shrink-0 border-2 border-[hsl(43,85%,48%)]">
                18+
              </div>
              <span className="text-xs text-[hsl(222,15%,50%)] leading-tight">
                No gambling for anyone under 18.
              </span>
            </div>

            <div className="bg-[hsl(40,60%,97%)] border border-[hsl(40,30%,88%)] border-l-2 border-l-[hsl(43,85%,48%)] px-4 py-3 rounded-r-lg">
              <p className="text-[11px] text-[hsl(222,15%,40%)] leading-relaxed mb-1.5">
                Free support:{" "}
                <strong className="text-[hsl(222,47%,18%)] text-sm">0808 8020 133</strong>
                <span className="text-[hsl(222,15%,55%)]"> (24/7)</span>
              </p>
              <p className="text-[10px] font-semibold tracking-wider text-[hsl(358,72%,48%)] uppercase">
                When the fun stops, STOP.
              </p>
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-[10px] font-sans font-semibold tracking-[0.3em] uppercase text-[hsl(43,85%,42%)]">
                Navigation
              </span>
              <div className="mt-2.5 h-px bg-[hsl(40,30%,88%)]" />
            </div>
            <nav>
              <ul className="space-y-2">
                {quickLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 text-sm text-[hsl(222,15%,40%)] hover:text-[hsl(43,85%,38%)] transition-colors duration-200 group"
                    >
                      <span className="block w-3 h-px bg-[hsl(43,85%,48%)]/40 group-hover:w-5 group-hover:bg-[hsl(43,85%,48%)] transition-all duration-200 shrink-0" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

        </div>

        {/* Organisations row — dark navy band, single horizontal row */}
        <div className="">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {partnerLogos.map((logo) => (
              <Link
                key={logo.alt}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                title={logo.alt}
                className="flex items-center justify-center px-5 py-3 bg-black rounded-xl border border-white/10 hover:border-[hsl(43,85%,48%)]/60 transition-colors duration-200"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  className="object-contain h-9 w-auto"
                />
              </Link>
            ))}
          </div>
          <p className="text-[10px] text-white/40 text-center mt-4 leading-relaxed">
            We may earn a commission when you register through our links. This does not affect our editorial independence.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-[hsl(222,15%,50%)] text-center md:text-left">
            &copy; {new Date().getFullYear()} goldcasinositesuk.com — All rights reserved. Independent comparison service.
          </p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {["UKGC Licensed", "18+", "GambleAware", "BeGambleAware.org"].map((tag, i, arr) => (
              <span key={tag} className="flex items-center gap-3">
                <span className="text-[11px] text-[hsl(222,15%,50%)]">{tag}</span>
                {i < arr.length - 1 && <span className="w-px h-3 bg-[hsl(40,30%,82%)]" />}
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
