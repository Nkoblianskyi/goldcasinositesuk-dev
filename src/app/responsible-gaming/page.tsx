import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero, IconCard, SectionHeader } from "@/components/page-section"
import {
  HeartHandshake,
  Wallet,
  Bell,
  Clock,
  Ban,
  AlertTriangle,
  Phone,
} from "lucide-react"

export const metadata = {
  title: "Responsible Gaming | GoldCasinoSitesUK.com",
  description:
    "GoldCasinoSitesUK.com champions safe play. Explore UKGC-mandated tools, recognise warning signs, and connect with trusted British support organisations.",
}

const tools = [
  {
    icon: <Wallet className="w-5 h-5" />,
    accent: "gold" as const,
    title: "Deposit Limits",
    body: "Set daily, weekly, or monthly caps before you play. Every UKGC-licensed casino must honour these limits — helping you stay within a budget you have decided in advance.",
  },
  {
    icon: <Bell className="w-5 h-5" />,
    accent: "navy" as const,
    title: "Reality Check Alerts",
    body: "Scheduled pop-up reminders show how long you have been playing and how much you have wagered. A simple pause that keeps entertainment from drifting into excess.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    accent: "emerald" as const,
    title: "Time-Out Periods",
    body: "Need a breather? Licensed operators offer cooling-off periods from 24 hours to six weeks. Your account locks, and promotional emails stop until the period ends.",
  },
  {
    icon: <Ban className="w-5 h-5" />,
    accent: "gold" as const,
    title: "Self-Exclusion",
    body: "Block yourself from a single operator for six months or longer. For a nationwide block across every UKGC-licensed site, register free with GamStop — details below.",
  },
]

const organisations = [
  {
    name: "BeGambleAware",
    href: "https://www.begambleaware.org/",
    description:
      "Confidential guidance and practical tools for anyone concerned about their gambling. National Gambling Helpline: 0808 8020 133 — free, 24 hours a day.",
  },
  {
    name: "GamCare",
    href: "https://www.gamcare.org.uk/",
    description:
      "Specialist information, live chat, and counselling for people affected by problem gambling across England, Scotland, and Wales.",
  },
  {
    name: "GamStop",
    href: "https://www.gamstop.co.uk/",
    description:
      "Free national self-exclusion scheme covering every UKGC-licensed online casino and betting site — one registration, every operator.",
  },
  {
    name: "Gambling Therapy",
    href: "https://www.gamblingtherapy.org/",
    description:
      "Online support groups, live chat, and multilingual counselling for anyone affected by gambling harm, wherever they are.",
  },
]

const warningSigns = [
  "Betting more than you can comfortably afford to lose",
  "Using gambling to manage stress, anxiety, or low mood",
  "Chasing losses by raising stakes or extending sessions",
  "Hiding the scale of your gambling from family or friends",
  "Letting work, study, or relationships suffer because of play",
  "Borrowing money or selling assets to keep gambling",
  "Feeling restless or irritable when you cannot gamble",
  "Trying repeatedly to cut back without lasting success",
]

export default function ResponsibleGaming() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <PageHero
        eyebrow="Player Welfare"
        title="Responsible Gaming"
        subtitle="Gambling should stay enjoyable. At GoldCasinoSitesUK.com we champion informed, controlled play — and signpost every resource a UK player needs to stay safe."
      />

      <div className="section-divider-gold" />

      {/* Commitment */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeader eyebrow="Our Commitment" title="Staying in Control" />
            <IconCard
              icon={<HeartHandshake className="w-5 h-5" />}
              accent="emerald"
              title="Entertainment First, Always"
              body="Millions of UK adults enjoy online casinos responsibly. For some, habits can shift into harm — and we take that seriously. We encourage every visitor to set limits, gamble only with disposable income, and treat gaming as leisure, never income."
            />
            <p className="mt-5 text-sm leading-relaxed text-[hsl(222,15%,40%)]">
              Every operator we list holds a current UK Gambling Commission licence and must provide deposit limits, reality checks, time-outs, and self-exclusion. If your relationship with gambling is causing concern, the organisations below offer free, confidential help — no judgement, no delay.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider-gold" />

      {/* Tools */}
      <section className="py-12 md:py-16 bg-[hsl(40,30%,95%)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeader eyebrow="Player Tools" title="Built-In Safeguards" centered />
            <p className="text-center text-sm text-[hsl(222,15%,45%)] leading-relaxed mb-8 max-w-xl mx-auto">
              UK law requires licensed casinos to offer these protections. Activate them in your account settings before your first session.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tools.map((tool) => (
                <IconCard key={tool.title} {...tool} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-emerald" />

      {/* Warning signs */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeader eyebrow="Awareness" title="Recognising the Warning Signs" />
            <p className="text-sm text-[hsl(222,15%,40%)] leading-relaxed mb-6">
              Spotting a problem early makes recovery easier. Reach out for support if you — or someone close to you — recognise any of the following:
            </p>
            <ul className="space-y-2.5">
              {warningSigns.map((sign) => (
                <li
                  key={sign}
                  className="flex gap-3 rounded-r-lg border border-[hsl(220,20%,90%)] border-l-2 border-l-[hsl(358,72%,48%)] bg-white py-3 pl-4 pr-3 text-sm text-[hsl(222,15%,40%)] shadow-sm"
                >
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(358,72%,48%)]" />
                  <span className="leading-relaxed">{sign}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="section-divider-gold" />

      {/* Support organisations */}
      <section className="py-12 md:py-16 bg-[hsl(40,30%,95%)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeader eyebrow="Support" title="UK Support Organisations" centered />
            <p className="text-center text-sm text-[hsl(222,15%,45%)] leading-relaxed mb-8 max-w-xl mx-auto">
              Independent charities and schemes — free of charge, confidential, and ready when you need them.
            </p>
            <ul className="space-y-4">
              {organisations.map((org) => (
                <li
                  key={org.name}
                  className="rounded-xl border border-[hsl(220,20%,88%)] bg-white p-5 shadow-sm"
                >
                  <Link
                    href={org.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-base font-bold text-[hsl(43,85%,42%)] underline-offset-2 hover:underline"
                  >
                    {org.name}
                  </Link>
                  <p className="mt-2 text-sm leading-relaxed text-[hsl(222,15%,40%)]">{org.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Helpline callout */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl border border-[hsl(222,30%,22%)] bg-[hsl(222,47%,13%)] p-8 md:p-10">
              <div className="rule-gold mb-6" />
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[hsl(43,85%,48%)]/30 bg-[hsl(43,85%,48%)]/10">
                  <Phone className="h-5 w-5 text-[hsl(43,85%,55%)]" />
                </div>
                <div>
                  <span className="eyebrow-gold mb-2 block text-[hsl(43,85%,55%)]">Need Help Now?</span>
                  <h3 className="font-serif text-xl font-bold text-white mb-3">
                    National Gambling Helpline — 24/7
                  </h3>
                  <p className="text-sm leading-relaxed text-[hsl(222,15%,65%)] mb-4">
                    Trained advisors offer free, confidential support at any hour. You do not need to be in crisis to call — a conversation can be the first step back to control.
                  </p>
                  <p className="font-serif text-2xl font-bold text-[hsl(43,85%,55%)] mb-1">0808 8020 133</p>
                  <p className="text-xs text-[hsl(222,15%,55%)] mb-5">Free from all UK landlines and mobiles</p>
                  <p className="text-xs leading-relaxed text-[hsl(222,15%,50%)]">
                    18+ only. Gambling can be addictive. Please play responsibly. All featured casinos hold valid UKGC licences.
                  </p>
                </div>
              </div>
              <div className="rule-gold mt-6 opacity-30" />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
