import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "About Us | GoldCasinoSitesUK.com — Expert UK Casino Reviews",
  description:
    "Discover our editorial mission, review methodology, and commitment to helping UK players find the finest UKGC-licensed gold casinos at GoldCasinoSitesUK.com.",
}

const pillars = [
  {
    title: "UKGC Licensed Operators Only",
    body: "Every casino we feature holds a current UK Gambling Commission licence, guaranteeing the highest standards of player protection, fund security, and fair gaming for all British players.",
  },
  {
    title: "Built for UK Gold Players",
    body: "We prioritise operators that understand premium British gaming culture: GBP accounts, UK-friendly payment methods, exclusive gold programmes, and dedicated local customer support.",
  },
  {
    title: "Independent Expert Reviews",
    body: "Our experienced casino analysts perform hands-on testing of every platform, evaluating game quality, bonus fairness, payout speed, and the overall player experience from first deposit to final withdrawal.",
  },
  {
    title: "Exclusive Gold Bonus Offers",
    body: "We negotiate enhanced welcome packages and exclusive promotions available only through our platform, delivering exceptional value for discerning UK gold casino players.",
  },
]

export default function AboutUs() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="pt-[66px] bg-[hsl(222,47%,13%)]">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[hsl(43,85%,48%)] to-transparent" />
        <div className="container mx-auto px-4 py-14 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-sans font-semibold tracking-[0.32em] uppercase text-[hsl(43,85%,55%)] mb-4">
              Who We Are
            </p>
            <h1 className="font-serif font-bold text-3xl md:text-5xl text-white mb-5 text-balance">
              About GoldCasinoSitesUK
            </h1>
            <div className="h-px bg-gradient-to-r from-transparent via-[hsl(43,85%,48%)]/50 to-transparent w-32 mx-auto mb-5" />
            <p className="text-sm text-[hsl(222,15%,68%)] leading-relaxed max-w-xl mx-auto">
              Your trusted authority on UK gold casino sites, dedicated to helping British players discover the finest UKGC-licensed operators through independent, specialist-led analysis and honest editorial reviews.
            </p>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[hsl(43,85%,48%)]/20 to-transparent" />
      </section>

      {/* Content */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            {/* Mission */}
            <div className="mb-14">
              <p className="text-xs font-sans font-semibold tracking-[0.28em] uppercase text-[hsl(43,85%,42%)] mb-3">Our Mission</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-[hsl(222,47%,13%)] mb-4">
                Clarity in a Crowded Market
              </h2>
              <div className="h-px bg-[hsl(220,20%,88%)] w-full mb-6" />
              <p className="text-sm text-[hsl(222,15%,40%)] leading-relaxed mb-4">
                At GoldCasinoSitesUK.com, we have built Britain&apos;s most trusted destination for casino evaluation and comparison. In a marketplace saturated with operators competing for attention, our specialist team cuts through promotional noise to identify genuinely exceptional gold casino experiences crafted for discerning British players.
              </p>
              <p className="text-sm text-[hsl(222,15%,40%)] leading-relaxed">
                Whether you favour high-stakes slots, live blackjack, premium roulette, or progressive jackpots, we connect you with operators that deliver outstanding value, a superior game library, and first-class personalised service throughout every session.
              </p>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
              {pillars.map((p, i) => (
                <div key={i} className="border border-[hsl(220,20%,88%)] bg-white rounded-xl p-6 hover:border-[hsl(43,85%,48%)]/50 transition-colors duration-200 shadow-sm">
                  <div className="h-px bg-[hsl(43,85%,48%)] w-8 mb-4" />
                  <h3 className="font-serif font-bold text-base text-[hsl(222,47%,13%)] mb-2">{p.title}</h3>
                  <p className="text-sm text-[hsl(222,15%,40%)] leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>

            {/* Methodology */}
            <div className="mb-14">
              <p className="text-xs font-sans font-semibold tracking-[0.28em] uppercase text-[hsl(43,85%,42%)] mb-3">Process</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-[hsl(222,47%,13%)] mb-4">
                Our Review Methodology
              </h2>
              <div className="h-px bg-[hsl(220,20%,88%)] w-full mb-6" />
              <p className="text-sm text-[hsl(222,15%,40%)] leading-relaxed mb-6">
                Every recommendation on our platform is backed by a comprehensive evaluation process refined by industry veterans across eight critical dimensions:
              </p>
              <ul className="space-y-3">
                {[
                  ["Licensing and Security",   "UKGC licence verification, SSL encryption standards, and player fund segregation requirements"],
                  ["Welcome Bonuses",           "Value assessment, realistic wagering requirements, and genuinely achievable completion terms"],
                  ["Game Library",              "Slot variety, live dealer tables, jackpots, published RTP rates, and software studio credibility"],
                  ["Gold Programme",            "Tier structure, comp point earning, dedicated account manager access, and exclusive player perks"],
                  ["Payment Methods",           "UK-compatible options, instant deposit processing, and sub-24-hour withdrawal speeds"],
                  ["Mobile Experience",         "Application quality, responsive design performance, and full game library availability on mobile"],
                  ["Customer Support",          "Live chat availability, response quality and speed, and access to UK-based support agents"],
                  ["Responsible Gaming",        "Deposit limits, reality check tools, self-exclusion pathways, and BeGambleAware signposting"],
                ].map(([title, desc]) => (
                  <li key={title} className="flex gap-3 text-sm text-[hsl(222,15%,40%)] border-l-2 border-[hsl(43,85%,48%)]/30 pl-4 bg-[hsl(43,60%,98%)] py-2.5 pr-3 rounded-r-lg">
                    <span className="font-serif font-semibold text-[hsl(222,47%,18%)] whitespace-nowrap">{title}:</span>
                    <span className="leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Values */}
            <div className="mb-14">
              <p className="text-xs font-sans font-semibold tracking-[0.28em] uppercase text-[hsl(43,85%,42%)] mb-3">Values</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-[hsl(222,47%,13%)] mb-4">
                Our Core Principles
              </h2>
              <div className="h-px bg-[hsl(220,20%,88%)] w-full mb-6" />
              <div className="space-y-4">
                {[
                  ["Transparency",            "We publish our full testing methodology and scoring criteria so you understand precisely how and why we rank each casino."],
                  ["Editorial Independence",  "Our reviews remain entirely impartial. Affiliate commissions never influence our assessments. Every rating reflects genuine platform quality measured against objective criteria."],
                  ["Continuous Updates",      "The casino landscape changes rapidly. We regularly reassess every listing to ensure our recommendations remain accurate and current for UK players."],
                  ["Responsible Gaming",      "We are firmly committed to player welfare. All pages feature prominent links to BeGambleAware, GamCare, and GamStop, and we never promote gambling to vulnerable individuals."],
                ].map(([title, desc]) => (
                  <div key={title} className="border-l-4 border-[hsl(43,85%,48%)] pl-5 bg-white py-4 pr-5 rounded-r-xl border border-[hsl(220,20%,90%)] shadow-sm">
                    <p className="font-serif font-semibold text-sm text-[hsl(222,47%,13%)] mb-1.5">{title}</p>
                    <p className="text-sm text-[hsl(222,15%,40%)] leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Funding callout */}
            <div className="bg-[hsl(222,47%,13%)] rounded-2xl p-8 border border-[hsl(222,30%,22%)]">
              <div className="h-px bg-gradient-to-r from-transparent via-[hsl(43,85%,48%)] to-transparent mb-7" />
              <p className="text-xs font-sans font-semibold tracking-[0.28em] uppercase text-[hsl(43,85%,55%)] mb-3">
                How We Are Funded
              </p>
              <h3 className="font-serif font-bold text-xl text-white mb-4">
                Always Free for UK Players
              </h3>
              <p className="text-sm text-[hsl(222,15%,65%)] leading-relaxed mb-4">
                GoldCasinoSitesUK.com is sustained through affiliate partnerships with licensed casino operators, who pay us a commission when visitors register through our referral links. This model allows us to deliver a comprehensive comparison service at no cost to users.
              </p>
              <p className="text-sm text-[hsl(222,15%,65%)] leading-relaxed">
                These commercial arrangements never compromise our editorial integrity. Casino rankings are determined exclusively by platform quality, player satisfaction, and objective performance metrics, not by commercial considerations or the size of affiliate fees.
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-[hsl(43,85%,48%)]/30 to-transparent mt-7" />
            </div>

          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
