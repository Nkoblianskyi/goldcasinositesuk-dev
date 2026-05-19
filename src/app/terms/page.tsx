import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero, IconCard } from "@/components/page-section"
import {
  FileCheck,
  Scale,
  UserCheck,
  HandCoins,
  Info,
  Copyright,
  ShieldAlert,
  ExternalLink,
  HeartHandshake,
  Gavel,
  Mail,
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Terms and Conditions | GoldCasinoSitesUK.com",
  description:
    "Read the terms governing your use of GoldCasinoSitesUK.com — Britain's independent gold casino comparison and review platform.",
}

const sections = [
  {
    icon: <FileCheck className="w-5 h-5" />,
    accent: "gold" as const,
    title: "1. Acceptance of Terms",
    body: "By visiting GoldCasinoSitesUK.com you confirm that you have read, understood, and agree to these Terms and Conditions together with our Privacy Policy. If any provision is unacceptable, please discontinue use immediately. We may update these terms at any time; continued use after changes constitutes acceptance.",
  },
  {
    icon: <Scale className="w-5 h-5" />,
    accent: "navy" as const,
    title: "2. Nature of Our Service",
    body: "GoldCasinoSitesUK.com is an independent editorial comparison website. We do not operate a casino, accept wagers, or process payments. We publish expert reviews, rankings, and links to third-party UKGC-licensed operators. We are not responsible for the content, conduct, or terms of any external casino you choose to visit.",
  },
  {
    icon: <UserCheck className="w-5 h-5" />,
    accent: "emerald" as const,
    title: "3. Eligibility",
    body: null,
    items: [
      ["Age Requirement", "You must be 18 or older. By using this site you confirm you meet the legal age for gambling in your jurisdiction."],
      ["Geographic Scope", "Our content is written for UK residents. Laws differ abroad — verify that online gambling is lawful where you are before proceeding."],
      ["Self-Exclusion", "Do not use this website if you are registered with GamStop or have self-excluded from any operator we feature."],
    ],
  },
  {
    icon: <HandCoins className="w-5 h-5" />,
    accent: "gold" as const,
    title: "4. Affiliate Disclosure",
    body: "We earn commission when visitors register at casinos through our referral links. This arrangement is disclosed openly and does not influence our editorial ratings, which are based solely on objective testing criteria applied equally to every operator.",
  },
  {
    icon: <Info className="w-5 h-5" />,
    accent: "navy" as const,
    title: "5. Accuracy of Information",
    body: "We work hard to keep bonus details, features, and promotional terms accurate at publication. Casino offers change frequently — always confirm current terms directly with the operator before registering or depositing.",
  },
  {
    icon: <Copyright className="w-5 h-5" />,
    accent: "gold" as const,
    title: "6. Intellectual Property",
    body: "All text, graphics, logos, and editorial content on GoldCasinoSitesUK.com are protected by UK and international copyright law. Reproduction or commercial use without our prior written consent is prohibited.",
  },
  {
    icon: <ShieldAlert className="w-5 h-5" />,
    accent: "emerald" as const,
    title: "7. Limitation of Liability",
    body: "This website is provided as-is without warranties. To the fullest extent permitted by UK law, we disclaim liability for losses arising from your use of our content or any third-party casino accessed via our links, including gambling losses.",
  },
  {
    icon: <ExternalLink className="w-5 h-5" />,
    accent: "navy" as const,
    title: "8. Third-Party Links",
    body: "Links to external casinos are provided for convenience. We do not control those sites and accept no responsibility for their content, privacy practices, or terms. Your use of any linked site is at your own risk.",
  },
  {
    icon: <HeartHandshake className="w-5 h-5" />,
    accent: "emerald" as const,
    title: "9. Responsible Gambling",
    body: null,
    bodyRich: true,
  },
  {
    icon: <Gavel className="w-5 h-5" />,
    accent: "gold" as const,
    title: "10. Governing Law",
    body: "These terms are governed by the laws of England and Wales. Disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    accent: "navy" as const,
    title: "11. Contact Us",
    body: "Questions about these terms? Email us at legal@goldcasinositesuk.com.",
  },
]

export default function Terms() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <PageHero
        eyebrow="Legal"
        title="Terms and Conditions"
        meta="Last updated: May 2026"
      />

      <div className="section-divider-gold" />

      <section className="py-12 md:py-16 bg-background flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-[hsl(222,15%,40%)] leading-relaxed mb-10 border-l-4 border-[hsl(43,85%,48%)] pl-5 bg-[hsl(43,60%,97%)] py-4 pr-4 rounded-r-xl">
              Please read these Terms carefully before using GoldCasinoSitesUK.com. By accessing our independent casino comparison platform, you enter a binding agreement with us on the conditions set out below.
            </p>

            <div className="space-y-6">
              {sections.map((section) => (
                <div key={section.title}>
                  {section.body && !section.bodyRich && (
                    <IconCard
                      icon={section.icon}
                      title={section.title}
                      body={section.body}
                      accent={section.accent}
                    />
                  )}
                  {section.bodyRich && (
                    <div
                      className="flex gap-4 rounded-xl border p-5 md:p-6 shadow-sm"
                      style={{
                        borderLeft: "4px solid hsl(152,60%,36%)",
                        background: "hsl(152,40%,96%)",
                        borderColor: "hsl(152,25%,86%)",
                      }}
                    >
                      <div
                        className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                        style={{
                          color: "hsl(152,60%,36%)",
                          background: "hsl(152,60%,36%)15",
                          border: "1px solid hsl(152,60%,36%)30",
                        }}
                      >
                        {section.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h2 className="mb-2 font-serif text-base font-bold md:text-lg text-[hsl(152,60%,36%)]">
                          {section.title}
                        </h2>
                        <p className="text-sm leading-relaxed text-[hsl(222,15%,40%)]">
                          We are committed to responsible gambling. If you need support, contact BeGambleAware on{" "}
                          <strong className="text-[hsl(222,47%,18%)]">0808 8020 133</strong>, visit GamCare.org.uk, or
                          self-exclude nationwide via GamStop.co.uk. Full guidance is on our{" "}
                          <Link href="/responsible-gaming" className="text-[hsl(43,85%,42%)] underline underline-offset-2 hover:text-[hsl(43,85%,35%)]">
                            Responsible Gaming
                          </Link>{" "}
                          page.
                        </p>
                      </div>
                    </div>
                  )}
                  {section.items && (
                    <div
                      className="rounded-xl border p-5 md:p-6 shadow-sm"
                      style={{
                        borderLeft: "4px solid hsl(152,60%,36%)",
                        background: "hsl(152,40%,96%)",
                        borderColor: "hsl(152,25%,86%)",
                      }}
                    >
                      <div className="flex gap-4 mb-4">
                        <div
                          className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                          style={{
                            color: "hsl(152,60%,36%)",
                            background: "hsl(152,60%,36%)15",
                            border: "1px solid hsl(152,60%,36%)30",
                          }}
                        >
                          {section.icon}
                        </div>
                        <h2 className="font-serif text-base font-bold md:text-lg text-[hsl(152,60%,36%)]">
                          {section.title}
                        </h2>
                      </div>
                      <ul className="space-y-3 pl-2">
                        {section.items.map(([title, desc]) => (
                          <li
                            key={title}
                            className="flex gap-3 rounded-r-lg border border-[hsl(220,20%,90%)] border-l-2 border-l-[hsl(43,85%,48%)]/40 bg-white py-2.5 pl-4 pr-3 text-sm text-[hsl(222,15%,40%)] shadow-sm"
                          >
                            <span className="font-serif font-semibold text-[hsl(222,47%,18%)] whitespace-nowrap">
                              {title}:
                            </span>
                            <span className="leading-relaxed">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
