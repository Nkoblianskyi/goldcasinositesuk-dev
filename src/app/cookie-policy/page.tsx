import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Cookie Policy | GoldCasinoSitesUK.com",
  description:
    "Learn how GoldCasinoSitesUK.com uses cookies and tracking technologies on our casino comparison platform, and how you can manage your preferences.",
}

const sections = [
  {
    title: "1. What Are Cookies?",
    body: "Cookies are small text files placed on your device when you visit a website. They are widely used to make sites function reliably, improve the user experience, and provide website operators with analytical data. Cookies typically contain a unique identifier along with information about your browsing preferences and interactions with the site.",
  },
  {
    title: "2. Types of Cookies We Use",
    body: null,
    subsections: [
      {
        title: "2.1 Strictly Necessary Cookies",
        body: "These cookies are essential for our website to function correctly and cannot be switched off. They respond to actions you take such as adjusting privacy settings or completing forms. Without these cookies, services you have requested cannot be delivered.",
      },
      {
        title: "2.2 Performance and Analytics Cookies",
        body: "These cookies help us understand how visitors interact with our site by collecting anonymised statistical data. They allow us to count sessions, identify traffic sources, and discover which content resonates most with UK players.",
      },
      {
        title: "2.3 Functional Cookies",
        body: "These cookies enable enhanced personalisation such as remembering your language or regional preferences. If you choose to decline them, certain features of the site may not perform as intended.",
      },
      {
        title: "2.4 Targeting and Advertising Cookies",
        body: "Our advertising partners may set these cookies to build an interest profile and serve relevant advertisements across other platforms. They do not store directly identifiable personal information.",
      },
    ],
  },
  {
    title: "3. First-Party and Third-Party Cookies",
    body: "First-party cookies are placed directly by goldcasinositesuk.com and are used primarily for core site functionality and internal analytics. Third-party cookies are set by external services such as Google Analytics, social media networks, and advertising partners, each governed by their own privacy and cookie policies.",
  },
  {
    title: "4. How to Manage Your Cookie Preferences",
    body: null,
    subsections: [
      {
        title: "4.1 Through Our Cookie Banner",
        body: "When you first visit our site, a consent banner allows you to accept or decline non-essential cookies. You can revisit and update your preferences at any time through the Cookie Policy link in our footer.",
      },
      {
        title: "4.2 Through Your Browser Settings",
        body: "Most browsers allow you to control cookies through their settings menu. You can view and delete existing cookies, block third-party cookies, or block all cookies. Be aware that disabling all cookies may reduce the functionality of this and other websites you visit.",
      },
      {
        title: "4.3 Advertising Opt-Out",
        body: "To opt out of interest-based advertising from participating companies, visit the Digital Advertising Alliance portal at www.youronlinechoices.com/uk.",
      },
    ],
  },
  {
    title: "5. Third-Party Services We Use",
    body: "We use cookies from the following trusted third-party providers: Google Analytics for traffic analysis and user behaviour insights, social media platforms for content sharing functionality, advertising networks for campaign measurement and relevant ad delivery, and affiliate partners for referral and conversion tracking.",
  },
  {
    title: "6. Cookie Lifespan",
    body: "Session cookies are temporary files that are deleted automatically when you close your browser. Persistent cookies remain on your device for a defined period, which can range from a few days to several years, or until you delete them manually through your browser settings.",
  },
  {
    title: "7. Updates to This Policy",
    body: "We may update this Cookie Policy from time to time to reflect changes in our practices, technology, or applicable legal requirements. We will indicate any significant changes by updating the date at the top of this page.",
  },
  {
    title: "8. Contact Us",
    body: "If you have questions about our use of cookies or wish to exercise any data rights, please contact us at: cookies@goldcasinositesuk.com.",
  },
]

export default function CookiePolicy() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="pt-[66px] bg-[hsl(222,47%,13%)]">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[hsl(43,85%,48%)] to-transparent" />
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-2xl">
            <p className="text-xs font-sans font-semibold tracking-[0.28em] uppercase text-[hsl(43,85%,55%)] mb-3">Legal</p>
            <h1 className="font-serif font-bold text-3xl md:text-4xl text-white mb-3 text-balance">
              Cookie Policy
            </h1>
            <p className="text-sm text-[hsl(222,15%,60%)] font-sans">Last updated: 2026</p>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[hsl(43,85%,48%)]/20 to-transparent" />
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-background flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            <p className="text-sm text-[hsl(222,15%,40%)] leading-relaxed mb-10 border-l-4 border-[hsl(152,55%,36%)] pl-5 bg-[hsl(152,40%,97%)] py-4 pr-4 rounded-r-xl">
              This Cookie Policy explains how GoldCasinoSitesUK.com uses cookies and similar tracking technologies when you visit our platform, in full compliance with the Privacy and Electronic Communications Regulations (PECR) and UK GDPR.
            </p>

            <div className="space-y-10">
              {sections.map((section) => (
                <div key={section.title} className="space-y-4">
                  <div>
                    <h2 className="font-serif font-bold text-xl text-[hsl(222,47%,13%)] mb-1">{section.title}</h2>
                    <div className="h-px bg-[hsl(220,20%,88%)]" />
                  </div>
                  {section.body && (
                    <p className="text-sm text-[hsl(222,15%,40%)] leading-relaxed">{section.body}</p>
                  )}
                  {section.subsections && (
                    <div className="space-y-3 pl-2">
                      {section.subsections.map((sub) => (
                        <div key={sub.title} className="border-l-2 border-[hsl(152,55%,36%)]/40 pl-4 bg-white py-3 pr-3 rounded-r-lg border border-[hsl(220,20%,90%)] shadow-sm">
                          <h3 className="font-serif font-semibold text-sm text-[hsl(222,47%,18%)] mb-1.5">{sub.title}</h3>
                          <p className="text-sm text-[hsl(222,15%,40%)] leading-relaxed">{sub.body}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact callout */}
            <div className="mt-12 bg-[hsl(222,47%,13%)] rounded-2xl p-6 border border-[hsl(222,30%,22%)]">
              <div className="h-px bg-[hsl(43,85%,48%)] mb-5" />
              <p className="text-xs font-sans font-semibold tracking-[0.28em] uppercase text-[hsl(43,85%,55%)] mb-2">
                Questions About Cookies?
              </p>
              <p className="text-sm text-[hsl(222,15%,65%)] leading-relaxed">
                If you have any questions about how GoldCasinoSitesUK.com uses cookies, or would like to manage your preferences, please contact us at{" "}
                <span className="text-[hsl(43,85%,55%)]">cookies@goldcasinositesuk.com</span>.
              </p>
              <div className="h-px bg-[hsl(43,85%,48%)]/20 mt-5" />
            </div>

          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
