"use client"

import { useState } from "react"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BettingSitesList } from "@/components/betting-sites-list"
import { TopOffersModal } from "@/components/top-offers-modal"
import { AgeRestrictionModal } from "@/components/age-restriction-modal"
import { AdvertiserInfoModal } from "@/components/advertiser-info-modal"
import { FaqSection } from "@/components/faq-section"
import { Shield, CheckCircle2, Zap, Trophy, HeartHandshake, Smartphone } from "lucide-react"


export default function Home() {
  const [isAgeModalOpen, setIsAgeModalOpen] = useState(false)
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)

  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <div className="pt-[66px]">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden max-h-[250px] md:max-h-[400px]">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-casino.jpg"
              alt="GoldCasinoSitesUK premium casino experience"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(222,47%,10%)]/90 via-[hsl(222,47%,13%)]/70 to-[hsl(222,47%,13%)]/30" />
          </div>

          {/* Content — vertically + horizontally centred */}
          <div className="relative z-10 h-[250px] md:h-[400px] flex items-center justify-center">
            <div className="container mx-auto px-4 flex flex-col items-center text-center">

              {/* Eyebrow */}
              <div className="flex items-center justify-center gap-2 mb-2 md:mb-3">
                <div className="h-[2px] w-6 md:w-8 bg-[hsl(43,85%,48%)]" />
                <span className="text-[9px] md:text-[11px] font-sans font-semibold tracking-widest uppercase text-[hsl(43,85%,55%)]">
                  UK&apos;s Trusted Casino Comparison
                </span>
                <div className="h-[2px] w-6 md:w-8 bg-[hsl(43,85%,48%)]" />
              </div>

              {/* Headline */}
              <h1 className="font-serif font-bold text-xl md:text-5xl leading-[1.1] text-white mb-2 md:mb-4 text-balance max-w-2xl">
                The UK&apos;s Finest{" "}
                <span className="text-[hsl(43,85%,55%)]">Gold Casino Sites</span>
                <span className="text-white"> — Ranked &amp; Reviewed</span>
              </h1>

              {/* Sub copy */}
              <p className="text-[11px] md:text-sm text-white/75 leading-relaxed max-w-lg text-pretty mb-3 md:mb-5">
                Every UKGC-licensed operator independently tested for bonus fairness, payout speed, and game quality — so you play at the very best.
              </p>

              {/* Trust indicators */}
              <div className="hidden md:flex items-center justify-center gap-1 mb-4">
                {[
                  { icon: <Shield className="w-3.5 h-3.5 text-[hsl(43,85%,55%)]" />, label: "UKGC Licensed Only" },
                  { icon: <Trophy className="w-3.5 h-3.5 text-[hsl(43,85%,55%)]" />, label: "Verified Bonuses" },
                  { icon: <CheckCircle2 className="w-3.5 h-3.5 text-[hsl(152,60%,55%)]" />, label: "Independent Reviews" },
                  { icon: <Zap className="w-3.5 h-3.5 text-[hsl(43,85%,55%)]" />, label: `Updated ${currentDate}` },
                ].map((item, i, arr) => (
                  <span key={i} className="flex items-center gap-1">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15">
                      {item.icon}
                      <span className="text-[10px] text-white/70 font-sans">{item.label}</span>
                    </span>
                    {i < arr.length - 1 && <span className="w-px h-3 bg-white/15 mx-1" />}
                  </span>
                ))}
              </div>

              {/* Disclaimer */}
              <p className="text-[9px] md:text-[10px] text-white/40 font-sans">
                18+ only. Gamble responsibly. BeGambleAware.org.{" "}
                <button onClick={() => setIsAdvertiserModalOpen(true)} className="text-[hsl(43,85%,55%)]/70 hover:text-[hsl(43,85%,55%)] underline underline-offset-2 transition-colors">
                  Advertiser Disclosure
                </button>{" "}/{" "}
                <button onClick={() => setIsAgeModalOpen(true)} className="text-[hsl(43,85%,55%)]/70 hover:text-[hsl(43,85%,55%)] underline underline-offset-2 transition-colors">
                  Age Verification
                </button>
              </p>

            </div>
          </div>
        </section>

        {/* Gold section divider */}
        <div className="section-divider-gold" />

        {/* ── CASINO LIST ── */}
        <div id="casino-sites" className="bg-background">
          <BettingSitesList />
        </div>

        {/* Divider */}
        <div className="section-divider-gold" />

        {/* ── EDITORIAL GUIDE ── */}
        <section className="py-12 md:py-20 bg-[hsl(40,30%,95%)]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">

              {/* Section header */}
              <div className="text-center mb-8 md:mb-14">
                <span className="eyebrow-gold mb-3 block">Editorial Guide</span>
                <h2 className="font-serif font-bold text-2xl md:text-4xl text-[hsl(222,47%,13%)] mb-4 text-balance">
                  How to Choose the Right UK Gold Casino
                </h2>
                <div className="rule-gold mx-auto w-32 md:w-48 my-4" />
                <p className="hidden md:block text-sm text-[hsl(222,15%,45%)] leading-relaxed max-w-xl mx-auto">
                  Your complete guide to finding a trusted, UKGC-licensed gold casino that perfectly matches your playing style and preferences.
                </p>
              </div>

              {/* Article sections */}
              <article className="space-y-4">
                {[
                  {
                    icon: <Shield className="w-5 h-5" />,
                    color: "gold",
                    title: "Understanding UK Casino Regulation",
                    body: [
                      "The United Kingdom operates one of the most respected gambling regulatory frameworks in the world. Every legitimate casino serving British players must hold a current licence from the UK Gambling Commission (UKGC). This authority enforces strict player protection, fair gaming standards, and responsible gambling obligations across every operator it licenses.",
                      "A valid UKGC licence is your first and most important checkpoint when evaluating any casino. Licensed operators are legally required to segregate customer funds, carry out robust age verification, and provide comprehensive responsible gambling tools including deposit limits and self-exclusion.",
                    ],
                  },
                  {
                    icon: <Trophy className="w-5 h-5" />,
                    color: "navy",
                    title: "Evaluating Welcome Bonuses Honestly",
                    body: [
                      "Welcome offers can meaningfully enhance your first deposit, but understanding the terms behind them is essential. UK casinos typically provide matched deposit bonuses, free spins packages, or no-deposit credits for new accounts.",
                      "Study wagering requirements carefully. A modest bonus attached to fair terms frequently delivers better real-world value than a headline-grabbing figure with restrictive conditions. Our team calculates the genuine playthrough cost of every offer we feature.",
                    ],
                  },
                  {
                    icon: <Zap className="w-5 h-5" />,
                    color: "emerald",
                    title: "Game Libraries and Software Providers",
                    body: [
                      "The scope and depth of a casino game library shapes every session you play. Elite platforms offer thousands of slots, live dealer tables, classic table games, and progressive jackpots, all powered by established software studios.",
                      "Prioritise casinos partnered with proven providers such as Evolution Gaming, NetEnt, Microgaming, and Playtech. These studios publish independently audited RTP figures and subject every title to rigorous fairness testing.",
                    ],
                  },
                  {
                    icon: <CheckCircle2 className="w-5 h-5" />,
                    color: "gold",
                    title: "Payment Methods and Withdrawal Speeds",
                    body: [
                      "Reliable banking is central to a satisfying casino experience. Leading UK platforms support Visa and Mastercard debit cards, major e-wallets, bank transfers, and Apple Pay. Note that credit card gambling has been prohibited in the UK since April 2020.",
                      "Withdrawal speed is a reliable quality signal. The best operators process e-wallet withdrawals within hours and complete debit card transfers within two to three working days. Unexplained delays are a red flag.",
                    ],
                  },
                  {
                    icon: <Smartphone className="w-5 h-5" />,
                    color: "navy",
                    title: "Mobile Gaming Quality",
                    body: [
                      "Mobile devices now account for the majority of UK casino sessions. Whether through a dedicated application or a responsive browser platform, your chosen casino should deliver a seamless, full-featured experience on smartphone and tablet.",
                      "Assess the mobile game selection, live casino availability, and account management tools. The best platforms offer biometric login, personalised alerts, and complete access to all promotions on mobile.",
                    ],
                  },
                  {
                    icon: <HeartHandshake className="w-5 h-5" />,
                    color: "emerald",
                    title: "Customer Support and Responsible Play",
                    body: [
                      "Responsive support proves its worth the moment an issue arises. Premium UK casinos provide 24/7 assistance through live chat, email, and telephone, with well-trained agents who resolve queries promptly.",
                      "Every UKGC-licensed operator must provide deposit limits, reality check alerts, self-exclusion, and signposting to organisations such as GamCare and BeGambleAware. These tools should be prominently accessible, not buried in menus.",
                    ],
                  },
                ].map((section, i) => {
                  const accentColor =
                    section.color === "gold"    ? "hsl(43,85%,42%)"   :
                    section.color === "navy"    ? "hsl(222,47%,25%)"  :
                                                  "hsl(152,60%,36%)"
                  const bgColor    =
                    section.color === "gold"    ? "hsl(43,60%,96%)"   :
                    section.color === "navy"    ? "hsl(222,40%,96%)"  :
                                                  "hsl(152,40%,96%)"
                  const borderColor =
                    section.color === "gold"    ? "hsl(220,20%,88%)"  :
                    section.color === "navy"    ? "hsl(222,30%,88%)"  :
                                                  "hsl(152,25%,86%)"

                  return (
                    <div key={i}>
                      <div
                        className="flex gap-4 md:gap-6 px-5 md:px-7 py-5 md:py-7 rounded-xl border"
                        style={{
                          borderLeft: `4px solid ${accentColor}`,
                          background: bgColor,
                          borderColor: borderColor,
                        }}
                      >
                        {/* Icon */}
                        <div
                          className="shrink-0 w-9 h-9 flex items-center justify-center mt-0.5 rounded-lg"
                          style={{
                            color: accentColor,
                            background: `${accentColor}15`,
                            border: `1px solid ${accentColor}30`,
                          }}
                        >
                          {section.icon}
                        </div>
                        {/* Text */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-serif font-bold text-base md:text-xl mb-2 md:mb-3" style={{ color: accentColor }}>
                            {section.title}
                          </h3>
                          {section.body.map((p, j) => (
                            <p key={j} className="text-xs md:text-sm text-[hsl(222,15%,38%)] leading-relaxed mb-2 last:mb-0">
                              {p}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </article>

            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="section-divider-emerald" />

        {/* ── FAQ ── */}
        <div id="faq-section" className="bg-background">
          <FaqSection />
        </div>

        {/* Divider */}
        <div className="section-divider-gold" />

       
      </div>

      <TopOffersModal />
      <AgeRestrictionModal isOpen={isAgeModalOpen} onClose={() => setIsAgeModalOpen(false)} />
      <AdvertiserInfoModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
      <SiteFooter />
    </main>
  )
}
