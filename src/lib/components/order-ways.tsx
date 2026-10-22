import { mailHref, site, smsHref, telHref } from "@/lib/site"

/**
 * The three verified ways to reach Lady D. Used on the Order page and,
 * in compact form, at the end of other pages.
 */
export default function OrderWays({ compact = false }: { compact?: boolean }) {
  const orderBody = "Hi Lady D, I’d like to order: "
  const items = [
    {
      title: "Call",
      detail: site.phone.display,
      note: "Quickest for same-day food.",
      href: telHref,
      cta: "Call now",
    },
    {
      title: "Text",
      detail: site.phone.display,
      note: "Send your order and your address.",
      href: smsHref(orderBody),
      cta: "Start a text",
    },
    {
      title: "Email",
      detail: site.email,
      note: "Best for parties and larger orders.",
      href: mailHref("Order from the website", orderBody),
      cta: "Write an email",
    },
  ]

  return (
    <ul className={`grid gap-px bg-crust ${compact ? "sm:grid-cols-3" : "md:grid-cols-3"}`}>
      {items.map((item, i) => (
        <li
          key={item.title}
          data-reveal
          style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
          className="flex flex-col gap-3 bg-paper p-6"
        >
          <h3 className="font-display text-2xl leading-none text-pepper">{item.title}</h3>
          <p className="break-all text-lg font-semibold leading-tight">{item.detail}</p>
          <p className="text-clay">{item.note}</p>
          <a href={item.href} className="btn-ghost mt-auto self-start">
            {item.cta}
          </a>
        </li>
      ))}
    </ul>
  )
}
