"use client"

import { useCookieConsent } from "@/context/cookie-consent-context"
import Link from "next/link"
import { Cookie } from "lucide-react"

export function CookieBanner() {
  const { showBanner, acceptAll, declineAll } = useCookieConsent()

  if (!showBanner) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50"
      role="dialog"
      aria-label="Cookie consent"
    >
      {/* Gold top accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[hsl(43,85%,48%)] to-transparent" />

      {/* Light card with soft shadow */}
      <div className="bg-white border-t border-[hsl(40,30%,88%)] shadow-[0_-8px_40px_rgba(0,0,0,0.10)]">
        <div className="container mx-auto px-4 py-4 md:py-5">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">

            {/* Icon + Text */}
            <div className="flex items-start gap-3 flex-1">
              <div className="shrink-0 w-9 h-9 bg-[hsl(43,85%,48%)]/10 border border-[hsl(43,85%,48%)]/25 rounded-lg flex items-center justify-center mt-0.5">
                <Cookie className="w-4 h-4 text-[hsl(43,85%,42%)]" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[10px] font-sans font-semibold tracking-[0.3em] uppercase text-[hsl(43,85%,42%)] mb-1">
                  Cookie Notice
                </p>
                <p className="text-sm text-[hsl(222,15%,40%)] leading-relaxed">
                  GoldCasinoSitesUK.com uses cookies to improve your experience, serve personalised casino recommendations, and analyse site traffic.{" "}
                  <Link
                    href="/cookie-policy"
                    className="text-[hsl(43,85%,38%)] hover:text-[hsl(43,85%,28%)] underline underline-offset-2 transition-colors font-medium"
                  >
                    View Cookie Policy
                  </Link>{" "}
                  for full details.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2.5 shrink-0 w-full md:w-auto">
              <button
                onClick={declineAll}
                className="flex-1 md:flex-none px-5 py-2.5 text-sm font-semibold text-[hsl(222,15%,45%)] border border-[hsl(40,20%,82%)] rounded-xl hover:border-[hsl(222,47%,30%)] hover:text-[hsl(222,47%,20%)] transition-all duration-200 bg-white"
              >
                Decline
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 md:flex-none px-8 py-2.5 text-sm font-black tracking-widest bg-[hsl(43,85%,48%)] text-[hsl(222,47%,13%)] rounded-xl hover:bg-[hsl(43,90%,42%)] transition-all duration-200 shadow-sm"
              >
                Accept All
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
