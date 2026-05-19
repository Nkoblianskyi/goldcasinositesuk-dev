import type { ReactNode } from "react"

type PageHeroProps = {
  eyebrow: string
  title: string
  subtitle?: string
  meta?: string
}

export function PageHero({ eyebrow, title, subtitle, meta }: PageHeroProps) {
  return (
    <section className="pt-[66px] bg-[hsl(222,47%,13%)]">
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[hsl(43,85%,48%)] to-transparent" />
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className={subtitle ? "max-w-2xl mx-auto text-center" : "max-w-2xl"}>
          <span className="eyebrow-gold mb-3 block text-[hsl(43,85%,55%)]">{eyebrow}</span>
          <h1 className="font-serif font-bold text-3xl md:text-4xl text-white mb-3 text-balance">{title}</h1>
          {subtitle && (
            <>
              <div className="rule-gold mx-auto my-4 w-32" />
              <p className="text-sm leading-relaxed text-[hsl(222,15%,68%)] max-w-xl mx-auto">{subtitle}</p>
            </>
          )}
          {meta && <p className="text-sm text-[hsl(222,15%,60%)] font-sans mt-2">{meta}</p>}
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-[hsl(43,85%,48%)]/20 to-transparent" />
    </section>
  )
}

type IconCardProps = {
  icon: ReactNode
  title: string
  body: string
  accent?: "gold" | "navy" | "emerald"
}

const accentMap = {
  gold: { color: "hsl(43,85%,42%)", bg: "hsl(43,60%,96%)", border: "hsl(220,20%,88%)" },
  navy: { color: "hsl(222,47%,25%)", bg: "hsl(222,40%,96%)", border: "hsl(222,30%,88%)" },
  emerald: { color: "hsl(152,60%,36%)", bg: "hsl(152,40%,96%)", border: "hsl(152,25%,86%)" },
}

export function IconCard({ icon, title, body, accent = "gold" }: IconCardProps) {
  const { color, bg, border } = accentMap[accent]
  return (
    <div
      className="flex gap-4 rounded-xl border p-5 md:p-6 shadow-sm"
      style={{ borderLeft: `4px solid ${color}`, background: bg, borderColor: border }}
    >
      <div
        className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
        style={{ color, background: `${color}15`, border: `1px solid ${color}30` }}
      >
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="mb-2 font-serif text-base font-bold md:text-lg" style={{ color }}>
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-[hsl(222,15%,40%)]">{body}</p>
      </div>
    </div>
  )
}

type SectionHeaderProps = {
  eyebrow: string
  title: string
  centered?: boolean
}

export function SectionHeader({ eyebrow, title, centered }: SectionHeaderProps) {
  return (
    <div className={centered ? "mb-8 text-center" : "mb-6"}>
      <span className="eyebrow-gold mb-3 block">{eyebrow}</span>
      <h2 className="font-serif font-bold text-2xl md:text-3xl text-[hsl(222,47%,13%)] mb-4 text-balance">{title}</h2>
      <div className={`rule-gold ${centered ? "mx-auto w-32" : "w-full max-w-xs"}`} />
    </div>
  )
}
