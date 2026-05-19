import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero, IconCard, SectionHeader } from "@/components/page-section"
import {
  Shield,
  Crown,
  Search,
  Gift,
  ClipboardList,
  Eye,
  PenLine,
  RefreshCw,
  HeartHandshake,
} from "lucide-react"

export const metadata = {
  title: "About Us | GoldCasinoSitesUK.com — Expert UK Casino Reviews",
  description:
    "Meet the team behind GoldCasinoSitesUK.com — independent, specialist-led reviews of every UKGC-licensed gold casino for British players.",
}

const pillars = [
  {
    icon: <Shield className="w-5 h-5" />,
    accent: "gold" as const,
    title: "UKGC Licensed Only",
    body: "We list exclusively operators holding a current UK Gambling Commission licence — ensuring segregated funds, fair play, and robust player protection for every British visitor.",
  },
  {
    icon: <Crown className="w-5 h-5" />,
    accent: "navy" as const,
    title: "Built for UK Players",
    body: "GBP accounts, trusted UK payment rails, premium loyalty tiers, and responsive local support — we prioritise platforms that genuinely serve British gold casino enthusiasts.",
  },
  {
    icon: <Search className="w-5 h-5" />,
    accent: "emerald" as const,
    title: "Hands-On Expert Reviews",
    body: "Our analysts register, deposit, and play at every site we rank — testing game libraries, bonus fairness, withdrawal speed, and support quality from real player experience.",
  },
  {
    icon: <Gift className="w-5 h-5" />,
    accent: "gold" as const,
    title: "Exclusive Welcome Offers",
    body: "Through affiliate partnerships we negotiate enhanced packages available only via GoldCasinoSitesUK — delivering added value without compromising editorial honesty.",
  },
]

const methodology = [
  ["Licensing & Security", "UKGC verification, SSL standards, and segregated player funds"],
  ["Welcome Bonuses", "True value, realistic wagering, and achievable completion terms"],
  ["Game Library", "Slots, live tables, jackpots, published RTP, and studio reputation"],
  ["VIP Programme", "Tier rewards, comp points, account managers, and exclusive perks"],
  ["Payments", "UK methods, instant deposits, and fast withdrawal processing"],
  ["Mobile Experience", "App quality, responsive design, and full mobile game access"],
  ["Customer Support", "Live chat speed, agent knowledge, and UK-based help"],
  ["Responsible Gaming", "Deposit limits, reality checks, self-exclusion, and charity signposting"],
]

const values = [
  { icon: <Eye className="w-5 h-5" />, title: "Transparency", body: "Our scoring criteria are published openly so you understand exactly how and why each casino earns its place." },
  { icon: <PenLine className="w-5 h-5" />, title: "Editorial Independence", body: "Affiliate income never sways our ratings. Every score reflects measured platform quality, not commercial value." },
  { icon: <RefreshCw className="w-5 h-5" />, title: "Continuous Updates", body: "Bonuses change, operators evolve. We revisit listings regularly to keep recommendations accurate for UK players." },
  { icon: <HeartHandshake className="w-5 h-5" />, title: "Responsible Gaming", body: "Player welfare comes first. We signpost BeGambleAware, GamCare, and GamStop on every page and never target vulnerable audiences." },
]

export default function AboutUs() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <PageHero
        eyebrow="Who We Are"
        title="About Gold Casino Sites UK"
        subtitle="An independent guide for British players seeking trusted, UKGC-licensed gold casinos — reviewed honestly, ranked fairly, and updated continuously."
      />

      <div className="section-divider-gold" />

      {/* Mission */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeader eyebrow="Our Mission" title="Cutting Through the Noise" />
            <p className="text-sm text-[hsl(222,15%,40%)] leading-relaxed mb-4">
              The UK online casino market grows more crowded every year. Flashy banners and headline bonuses make every operator look exceptional — but not all deliver. GoldCasinoSitesUK.com exists to separate genuine quality from empty marketing.
            </p>
            <p className="text-sm text-[hsl(222,15%,40%)] leading-relaxed">
              Whether your preference is premium slots, live dealer tables, or high-limit roulette, we connect you with licensed platforms that offer fair terms, swift payouts, and a player experience worth your time and money.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider-gold" />

      {/* Pillars */}
      <section className="py-12 md:py-16 bg-[hsl(40,30%,95%)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeader eyebrow="Why Us" title="What Sets Us Apart" centered />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pillars.map((p) => (
                <IconCard key={p.title} {...p} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-emerald" />

      {/* Methodology */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeader eyebrow="Process" title="How We Review Casinos" />
            <p className="text-sm text-[hsl(222,15%,40%)] leading-relaxed mb-6">
              Every listing passes eight structured checks — the same framework applied to every operator, every time:
            </p>
            <ul className="space-y-2.5">
              {methodology.map(([title, desc]) => (
                <li
                  key={title}
                  className="flex gap-3 rounded-r-lg border border-[hsl(220,20%,90%)] border-l-2 border-l-[hsl(43,85%,48%)]/40 bg-[hsl(43,60%,98%)] py-2.5 pl-4 pr-3 text-sm text-[hsl(222,15%,40%)]"
                >
                  <ClipboardList className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(43,85%,42%)]" />
                  <span>
                    <span className="font-serif font-semibold text-[hsl(222,47%,18%)]">{title}: </span>
                    {desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="section-divider-gold" />

      {/* Values */}
      <section className="py-12 md:py-16 bg-[hsl(40,30%,95%)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeader eyebrow="Values" title="Principles We Stand By" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {values.map((v) => (
                <IconCard key={v.title} icon={v.icon} title={v.title} body={v.body} accent="gold" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Funding */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl border border-[hsl(222,30%,22%)] bg-[hsl(222,47%,13%)] p-8 md:p-10">
              <div className="rule-gold mb-6" />
              <span className="eyebrow-gold mb-3 block text-[hsl(43,85%,55%)]">How We Are Funded</span>
              <h3 className="font-serif text-xl font-bold text-white mb-4">Free for Players, Always</h3>
              <p className="text-sm leading-relaxed text-[hsl(222,15%,65%)] mb-4">
                GoldCasinoSitesUK.com is supported by affiliate commissions when visitors register at casinos through our links. This keeps our comparison service free to use.
              </p>
              <p className="text-sm leading-relaxed text-[hsl(222,15%,65%)]">
                Commercial relationships never dictate our rankings. Scores reflect platform quality, player feedback, and objective testing — never the size of an affiliate fee.
              </p>
              <div className="rule-gold mt-6 opacity-30" />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
