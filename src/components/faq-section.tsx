"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    id: "faq-1",
    question: "How does GoldCasinoSitesUK select the casinos it features?",
    answer:
      "Our specialist team subjects every casino to a rigorous, multi-stage evaluation covering UKGC licence verification, security architecture, gold programme quality, bonus value and fairness, game library depth, software provider credibility, mobile performance, withdrawal processing times, and customer support responsiveness. Only operators that consistently score at the highest level across every dimension earn a place on our platform.",
    color: "gold",
  },
  {
    id: "faq-2",
    question: "Are the casinos on GoldCasinoSitesUK legal and safe for UK players?",
    answer:
      "Every casino featured on goldcasinositesuk.com holds a current UK Gambling Commission licence, guaranteeing strict compliance with player protection standards, fair gaming requirements, secure transaction processing, and mandatory responsible gambling provisions. Player funds are protected by law, and all operators use industry-grade SSL encryption.",
    color: "emerald",
  },
  {
    id: "faq-3",
    question: "What types of welcome bonuses do leading UK gold casinos offer?",
    answer:
      "Top UK operators provide a range of introductory packages including matched deposit bonuses (such as 100% up to £500), free spins bundles, no-deposit bonus credits, cashback promotions, and multi-stage gold welcome series. We assess wagering requirements, eligible game restrictions, and validity windows to highlight the most genuinely rewarding offers available.",
    color: "navy",
  },
  {
    id: "faq-4",
    question: "How do I claim a gold welcome bonus?",
    answer:
      "The process is straightforward. Click our exclusive link to your chosen casino, register a new account with accurate personal details, make a qualifying deposit using an eligible payment method, then opt in or enter any required promotional code. Some bonuses activate automatically on deposit. Always review the specific terms covering wagering requirements and eligible games before proceeding.",
    color: "gold",
  },
  {
    id: "faq-5",
    question: "Which payment methods do UK gold casinos accept?",
    answer:
      "Leading UK casinos support Visa and Mastercard debit cards, e-wallets such as PayPal, Skrill, and Neteller, bank transfers, prepaid cards such as Paysafecard, and digital wallets including Apple Pay and Google Pay. Credit cards are prohibited for gambling transactions in the UK. Most operators process instant deposits and complete withdrawals within 24 hours, with e-wallets typically the fastest option.",
    color: "emerald",
  },
  {
    id: "faq-6",
    question: "Can I play gold casino games on mobile?",
    answer:
      "Yes. Every casino we recommend delivers a first-class mobile experience, either through dedicated iOS and Android applications or fully responsive web platforms. You can access the complete game library, claim bonuses, manage your account, and process withdrawals directly from your smartphone or tablet at any time.",
    color: "navy",
  },
  {
    id: "faq-7",
    question: "What is the UK Gambling Commission and why does it matter?",
    answer:
      "The UK Gambling Commission (UKGC) is the statutory body that licences and regulates all gambling operators serving UK customers. It enforces rigorous standards covering game fairness, data security, anti-money laundering controls, and responsible gambling obligations. UKGC-licensed casinos must maintain segregated player funds, provide self-exclusion tools, and undergo regular compliance audits. A current UKGC licence is the most important quality indicator when selecting a casino.",
    color: "gold",
  },
  {
    id: "faq-8",
    question: "How can I gamble more responsibly?",
    answer:
      "Set firm deposit and loss limits before you begin playing. Never chase losses, take regular breaks, and approach gambling purely as a form of entertainment. All UKGC-licensed casinos are required to provide deposit caps, reality check notifications, time-out periods, and self-exclusion tools. If you have concerns about your gambling habits, contact BeGambleAware.org on 0808 8020 133, visit GamCare.org.uk, or register with GamStop.co.uk to self-exclude from all UK-licensed operators simultaneously.",
    color: "emerald",
  },
]

const colorMap = {
  gold:    { text: "hsl(43,85%,42%)",    border: "hsl(43,85%,48%)",    bg: "hsl(43,60%,97%)",    dot: "hsl(43,85%,48%)"   },
  emerald: { text: "hsl(152,55%,34%)",   border: "hsl(152,55%,40%)",   bg: "hsl(152,40%,97%)",   dot: "hsl(152,55%,40%)"  },
  navy:    { text: "hsl(222,47%,22%)",   border: "hsl(222,47%,30%)",   bg: "hsl(222,40%,97%)",   dot: "hsl(222,47%,30%)"  },
}

export function FaqSection() {
  return (
    <section className="py-10 md:py-20 bg-background">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <span className="eyebrow-gold mb-3 block">FAQ</span>
          <h2 className="font-serif font-bold text-2xl md:text-4xl text-[hsl(222,47%,13%)] mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <div className="rule-gold mx-auto w-32 md:w-48 mb-4" />
          <p className="hidden md:block text-sm text-[hsl(222,15%,45%)] max-w-xl mx-auto leading-relaxed">
            Everything UK players need to know about gold casino sites, bonuses, licensing, and responsible play
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq) => {
              const c = colorMap[faq.color as keyof typeof colorMap]
              return (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border rounded-xl overflow-hidden"
                  style={{
                    borderColor: `${c.border}35`,
                    background: "white",
                  }}
                >
                  <AccordionTrigger
                    className="text-left font-sans font-semibold text-sm md:text-base text-[hsl(222,47%,15%)] py-4 md:py-5 hover:no-underline gap-3 group px-5"
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className="shrink-0 w-2 h-2 rounded-full mt-0.5 transition-transform duration-200 group-data-[state=open]:scale-125"
                        style={{ background: c.dot }}
                      />
                      <span className="group-hover:text-[hsl(43,85%,42%)] transition-colors duration-200">
                        {faq.question}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent
                    className="text-xs md:text-sm pb-5 leading-relaxed px-5 pl-12 border-t"
                    style={{
                      color: "hsl(222,15%,40%)",
                      background: c.bg,
                      borderColor: `${c.border}20`,
                    }}
                  >
                    <div className="pt-3">{faq.answer}</div>
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
