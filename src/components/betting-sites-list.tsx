"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, CheckCircle } from "lucide-react"
import { bettingSites } from "@/data/betting-sites"

const rankLabels = [
  "#1 Top Casino",
  "#2 Recommended",
  "#3 Top Rated",
  "#4 Popular",
  "#5 Trusted",
  "#6 Editor&apos;s Choice",
]

function StarRating({ rating, size = "md" }: { rating: number; size?: "sm" | "md" | "lg" }) {
  const raw = (rating / 10) * 5
  const stepped = Math.round(raw / 0.2) * 0.2
  const normalized = Math.min(5, Math.max(0, stepped))
  const starSize = size === "lg" ? "w-5 h-5" : size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 10`}>
      {[...Array(5)].map((_, i) => {
        const fill = Math.min(Math.max(normalized - i, 0), 1) * 100
        return (
          <span key={i} className={`relative inline-block ${starSize}`}>
            <Star className={`${starSize} text-[hsl(43,85%,85%)]`} fill="currentColor" />
            {fill > 0 && (
              <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill}%` }}>
                <Star className={`${starSize} text-[hsl(43,85%,48%)]`} fill="currentColor" />
              </span>
            )}
          </span>
        )
      })}
    </div>
  )
}

const cardAccents = [
  "hsl(43,85%,42%)",   // gold
  "hsl(222,47%,28%)",  // navy
  "hsl(152,55%,36%)",  // emerald
  "hsl(43,85%,42%)",
  "hsl(222,47%,28%)",
]

const cardBgs = [
  "hsl(43,60%,97%)",
  "hsl(222,40%,97%)",
  "hsl(152,40%,97%)",
  "hsl(43,60%,97%)",
  "hsl(222,40%,97%)",
]

export function BettingSitesList() {
  return (
    <section className="py-8 md:py-12 bg-background">
      <div className="container mx-auto px-3 md:px-4 max-w-5xl">

        {/* Section heading */}
        <div className="mb-8 text-center">
          <span className="eyebrow-gold mb-3 block">UKGC Licensed Casinos — Expert Verified</span>
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-[hsl(222,47%,13%)] mb-3 text-balance">
            Best Gold Casino Sites UK 2026
          </h2>
          <div className="rule-gold mx-auto w-24 mb-4" />
          <p className="text-sm text-[hsl(222,15%,45%)] max-w-lg mx-auto leading-relaxed">
            Our expert team independently reviews every casino below. All hold valid UKGC licences.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-5">
          {bettingSites.map((site, index) => {
            const accent = cardAccents[index] ?? "hsl(43,85%,42%)"
            const bg     = cardBgs[index]    ?? "hsl(43,60%,97%)"
            const isTop  = index === 0

            return (
              <div
                key={site.id}
                className="rounded-2xl overflow-hidden shadow-sm border animate-fade-in-up"
                style={{
                  animationDelay: `${index * 80}ms`,
                  borderColor: `${accent}35`,
                  background: bg,
                }}
              >
                {/* Top accent bar */}
                <div className="h-1 w-full" style={{ background: accent }} />

                {/* Rank + badge row */}
                <div className="flex items-center justify-between px-5 py-2 border-b" style={{ borderColor: `${accent}20` }}>
                  <span
                    className="text-[9px] font-sans font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full text-white"
                    style={{ background: accent }}
                  >
                    {rankLabels[index] ?? `#${index + 1}`}
                  </span>
                  {isTop && (
                    <span className="text-[9px] font-sans font-bold tracking-widest uppercase text-[hsl(152,55%,36%)] border border-[hsl(152,55%,36%)]/40 px-2.5 py-0.5 rounded-full">
                      Editor&apos;s Top Pick
                    </span>
                  )}
                </div>

                {/* ── DESKTOP layout ── */}
                <div className="hidden md:flex items-stretch min-h-[110px]">

                  {/* Logo */}
                  <div className="w-52 flex-shrink-0 bg-white flex items-center justify-center p-6 border-r" style={{ borderColor: `${accent}25` }}>
                    <Image
                      src={site.logo}
                      alt={`${site.name} logo`}
                      width={180}
                      height={68}
                      className="object-contain max-h-16 w-auto"
                    />
                  </div>

                  {/* Bonus */}
                  <div className="flex-1 flex flex-col items-center justify-center px-6 py-4 border-r gap-1.5" style={{ borderColor: `${accent}25` }}>
                    <p className="text-[10px] font-sans font-semibold tracking-widest uppercase text-[hsl(222,15%,52%)]">Welcome Offer</p>
                    <p className="font-serif font-bold text-xl text-center leading-tight" style={{ color: accent }}>{site.bonus}</p>
                    <p className="text-[11px] font-sans font-semibold text-center leading-snug text-[hsl(222,15%,45%)]">{site.welcomeOffer}</p>
                    {/* Features */}
                    <div className="flex items-center gap-3 mt-1.5">
                      {site.features.slice(0, 2).map((f) => (
                        <span key={f} className="flex items-center gap-1 text-[10px] text-[hsl(152,55%,36%)] font-sans font-semibold">
                          <CheckCircle className="w-3 h-3 shrink-0" />
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Score */}
                  <div className="w-44 flex-shrink-0 flex flex-col items-center justify-center px-5 py-4 border-r gap-1.5" style={{ borderColor: `${accent}25` }}>
                    <span className="font-serif font-bold text-4xl leading-none" style={{ color: accent }}>{site.score.toFixed(1)}</span>
                    <StarRating rating={site.score} size="lg" />
                    <span className="text-[10px] text-[hsl(222,15%,52%)] font-sans">{site.reviews.toLocaleString()} reviews</span>
                  </div>

                  {/* CTA */}
                  <div className="w-44 flex-shrink-0 flex items-center justify-center px-5 py-4">
                    <Link
                      href={site.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center py-3.5 text-sm font-black tracking-wide rounded-xl text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-sm"
                      style={{ background: "hsl(152,55%,36%)" }}
                    >
                      Claim Bonus
                    </Link>
                  </div>

                </div>

                {/* ── MOBILE layout ── */}
                <div className="md:hidden flex flex-col">

                  {/* Row 1 - Logo + Bonus */}
                  <div className="flex items-stretch border-b min-h-[80px]" style={{ borderColor: `${accent}20` }}>
                    <div className="w-[42%] bg-white flex items-center justify-center px-4 py-4 border-r" style={{ borderColor: `${accent}20` }}>
                      <Image
                        src={site.logo}
                        alt={`${site.name} logo`}
                        width={150}
                        height={56}
                        className="object-contain max-h-14 w-full"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center px-4 py-3 gap-0.5">
                      <p className="text-[9px] font-sans font-semibold tracking-widest uppercase text-[hsl(222,15%,52%)]">Welcome Offer</p>
                      <p className="font-serif font-bold text-base text-center leading-snug" style={{ color: accent }}>{site.bonus}</p>
                      <p className="text-[9px] font-sans font-semibold text-center leading-tight text-[hsl(222,15%,45%)]">{site.welcomeOffer}</p>
                    </div>
                  </div>

                  {/* Row 2 - Score + CTA */}
                  <div className="flex items-stretch min-h-[64px]">
                    <div className="flex-1 flex items-center justify-center gap-3 px-4 py-3">
                      <span className="font-serif font-bold text-3xl leading-none" style={{ color: accent }}>{site.score.toFixed(1)}</span>
                      <div className="flex flex-col items-start gap-1">
                        <StarRating rating={site.score} size="md" />
                        <span className="text-[9px] text-[hsl(222,15%,52%)] font-sans">{site.reviews.toLocaleString()} reviews</span>
                      </div>
                    </div>
                    <Link
                      href={site.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-6 text-sm font-black tracking-wide text-white transition-all duration-200 hover:opacity-90 border-l"
                      style={{
                        background: "hsl(152,55%,36%)",
                        borderColor: `${accent}20`,
                      }}
                    >
                      Claim
                    </Link>
                  </div>

                </div>

                {/* Card footer */}
                <div className="px-5 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 border-t" style={{ borderColor: `${accent}15`, background: "rgba(255,255,255,0.5)" }}>
                  <p className="text-[9px] text-[hsl(222,15%,55%)] font-sans leading-snug">{site.terms}</p>
                  <p className="text-[9px] text-[hsl(222,15%,65%)] font-sans shrink-0">18+ | BeGambleAware.org</p>
                </div>

              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center text-[11px] text-[hsl(222,15%,52%)] mt-10 font-sans leading-relaxed">
          All listed casinos hold valid UKGC licences. Rankings are based on independent editorial assessment. Affiliate commissions may apply.
        </p>
      </div>
    </section>
  )
}
