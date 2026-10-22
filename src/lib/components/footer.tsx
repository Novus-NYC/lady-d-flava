import Link from "next/link"
import { areaLine, mailHref, nav, site, telHref } from "@/lib/site"

export default function Footer() {
  return (
    <footer className="bg-ink text-plantain">
      <div className="wrap grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
        <div>
          <p className="font-display text-3xl leading-none text-turmeric">{site.name}</p>
          <p className="mt-3 max-w-xs text-plantain/80">
            {site.cuisine}, cooked in {site.area.neighborhood}, {site.area.borough}. {site.promise}.
          </p>
        </div>

        <div>
          <h2 className="font-semibold">Reach Lady D</h2>
          <ul className="mt-3 space-y-2 text-plantain/85">
            <li>
              <a href={telHref} className="link-underline">
                {site.phone.display}
              </a>
            </li>
            <li>
              <a href={mailHref()} className="link-underline break-all">
                {site.email}
              </a>
            </li>
            <li>{areaLine}</li>
            {site.socials.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noreferrer" className="link-underline">
                  {s.label}: {s.handle}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-semibold">Pages</h2>
          <ul className="mt-3 space-y-2 text-plantain/85">
            <li>
              <Link href="/" className="link-underline">
                Home
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-plantain/15">
        <div className="wrap flex flex-col gap-2 py-5 text-sm text-plantain/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Cooking since {site.founded}.
          </p>
          <a href={site.credit.href} target="_blank" rel="noreferrer" className="link-underline text-plantain">
            {site.credit.label}
          </a>
        </div>
      </div>
    </footer>
  )
}
