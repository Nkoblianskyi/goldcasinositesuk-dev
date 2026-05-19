import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Terms and Conditions | VIPCasinoSitesUK.com",
  description:
    "Review the terms and conditions that govern your use of VIPCasinoSitesUK.com, Britain's premier independent VIP casino comparison platform.",
}

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using VIPCasinoSitesUK.com, you confirm that you have read, understood, and agree to be bound by these Terms and Conditions together with our Privacy Policy. If you do not agree with any part of these terms, you must discontinue use of this website immediately. We reserve the right to amend these terms at any time. Your continued use of the site following any such amendment constitutes acceptance of the updated terms.",
  },
  {
    title: "2. Nature of Our Service",
    body: "VIPCasinoSitesUK.com is an independent editorial comparison and information service. We do not operate as a casino, accept wagers, or provide gambling services of any kind. Our platform provides expert reviews, comparative analysis, and hyperlinks to third-party UKGC-licensed casino operators. We accept no responsibility for the services, content, conduct, terms, or practices of any third-party casino referenced on our platform.",
  },
  {
    title: "3. Eligibility",
    body: null,
    items: [
      ["Age Requirement", "You must be 18 years of age or older to use this website. Gambling is strictly prohibited for anyone under 18. By accessing our platform, you confirm that you meet the legal age requirement applicable in your jurisdiction."],
      ["Geographic Scope", "Our service is designed for users based in the United Kingdom. Gambling regulations vary considerably across different jurisdictions. It is solely your responsibility to ensure that accessing online casino services is lawful in your location before proceeding."],
      ["Self-Exclusion Compliance", "You must not use this website if you are currently enrolled in the GamStop national self-exclusion scheme or have self-excluded from any individual casino featured on our platform."],
    ],
  },
  {
    title: "4. Affiliate Disclosure",
    body: "VIPCasinoSitesUK.com participates in affiliate marketing programmes. When visitors click our links to casino operators and subsequently register or make a deposit, we may receive a commission payment. This commercial arrangement is fully disclosed and has no influence whatsoever on our editorial reviews, ratings, or rankings, which are determined exclusively by objective assessment criteria applied consistently to all operators.",
  },
  {
    title: "5. Accuracy of Information",
    body: "We make every reasonable effort to ensure that all content on VIPCasinoSitesUK.com, including bonus details, casino features, and promotional terms, is accurate and current at the time of publication. However, casino offers and terms change frequently, and we cannot guarantee the ongoing accuracy of all listed information. Always verify current promotional terms directly with the relevant casino operator before registering or making a deposit.",
  },
  {
    title: "6. Intellectual Property",
    body: "All content on VIPCasinoSitesUK.com, including text, graphics, logos, design elements, and editorial reviews, is the exclusive intellectual property of VIPCasinoSitesUK.com or its licensed content partners, and is protected under UK and international copyright law. Reproduction, redistribution, or commercial exploitation of any content without our prior written consent is strictly prohibited.",
  },
  {
    title: "7. Limitation of Liability",
    body: "VIPCasinoSitesUK.com is provided on an as-is basis without warranties of any kind. To the maximum extent permitted by applicable UK law, we disclaim all liability for any losses, damages, or claims arising from your use of our website, reliance on any information contained on it, or your use of any third-party casino site accessed through our links. We accept no liability for gambling losses incurred at any operator we review or reference.",
  },
  {
    title: "8. Third-Party Links",
    body: "Our website contains links to third-party casino sites and services provided for your convenience. We exercise no control over the content, privacy policies, terms, or practices of those external sites and accept no responsibility for them. Your use of any linked third-party site is entirely at your own risk and is governed by that site's own terms and conditions.",
  },
  {
    title: "9. Responsible Gambling",
    body: "We are firmly committed to promoting responsible gambling. If you are experiencing difficulties related to gambling, please seek immediate support from BeGambleAware.org on 0808 8020 133, GamCare.org.uk, or self-exclude from all UK-licensed operators simultaneously via GamStop.co.uk. Full details of available responsible gambling tools are published on our dedicated Responsible Gaming page.",
  },
  {
    title: "10. Governing Law",
    body: "These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
  },
  {
    title: "11. Contact Us",
    body: "For any questions or concerns about these Terms and Conditions, please contact our team at: legal@vipcasinositesuk.com.",
  },
]

export default function Terms() {
  return (
    <main className="min-h-screen flex flex-col bg-[hsl(0,0%,5%)]">
      <SiteHeader />

      {/* Hero */}
      <section className="pt-[66px] bg-[hsl(0,0%,7%)]">
        <div className="h-[2px] bg-[hsl(43,72%,48%)]" />
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-2xl">
            <p className="text-xs font-sans font-semibold tracking-[0.28em] uppercase text-[hsl(43,72%,48%)] mb-3">Legal</p>
            <h1 className="font-serif font-bold text-3xl md:text-4xl text-[hsl(43,20%,88%)] mb-3 text-balance">
              Terms and Conditions
            </h1>
            <p className="text-sm text-[hsl(43,10%,50%)] font-sans">Last updated: 2026</p>
          </div>
        </div>
        <div className="h-px bg-[hsl(43,72%,48%)]/20" />
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-[hsl(0,0%,5%)] flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-[hsl(43,10%,50%)] leading-relaxed mb-10 border-l-2 border-[hsl(43,72%,48%)] pl-5">
              Please read these Terms and Conditions carefully before using VIPCasinoSitesUK.com. By accessing our casino comparison platform, you agree to be bound by the terms set out below, which constitute a legally binding agreement between you and VIPCasinoSitesUK.com.
            </p>

            <div className="space-y-10">
              {sections.map((section) => (
                <div key={section.title} className="space-y-4">
                  <div>
                    <h2 className="font-serif font-bold text-xl text-[hsl(43,20%,88%)] mb-1">{section.title}</h2>
                    <div className="h-px bg-[hsl(0,0%,18%)]" />
                  </div>
                  {section.body && (
                    <p className="text-sm text-[hsl(43,10%,50%)] leading-relaxed">{section.body}</p>
                  )}
                  {section.items && (
                    <ul className="space-y-3 pl-4">
                      {section.items.map(([title, desc]) => (
                        <li key={title} className="flex gap-3 text-sm text-[hsl(43,10%,50%)] border-l border-[hsl(0,0%,18%)] pl-4">
                          <span className="font-serif font-semibold text-[hsl(43,20%,88%)] whitespace-nowrap">{title}:</span>
                          <span className="leading-relaxed">{desc}</span>
                        </li>
                      ))}
                    </ul>
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
