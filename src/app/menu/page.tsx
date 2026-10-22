import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { drinks, saturday, streetFood, type MenuGroup } from "@/lib/menu"
import { photos } from "@/lib/photos"
import { site, telHref } from "@/lib/site"

export const metadata: Metadata = {
  title: "Menu",
  description: `The ${site.name} menu: doubles, bake and salt fish, puri and curry, pine tart and chicken patties, chow mein, and Saturday lunch specials.`,
}

function Board({ group, tone }: { group: MenuGroup; tone: "light" | "dark" }) {
  const dark = tone === "dark"
  return (
    <section aria-labelledby={`${group.id}-title`} id={group.id}>
      <h2
        id={`${group.id}-title`}
        data-reveal
        className={`font-display text-[clamp(2rem,4.5vw,3rem)] leading-[1] ${dark ? "text-turmeric" : "text-pepper"}`}
      >
        {group.title}
      </h2>
      <p data-reveal className={`mt-3 max-w-prose text-lg ${dark ? "text-plantain/85" : "text-clay"}`}>
        {group.intro}
      </p>
      <ul className={`mt-8 border-t ${dark ? "border-plantain/20" : "border-crust"}`}>
        {group.dishes.map((dish, i) => (
          <li
            key={dish.id}
            data-reveal
            style={{ "--reveal-delay": `${i * 40}ms` } as React.CSSProperties}
            className={`grid gap-1 border-b py-4 sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-8 ${
              dark ? "border-plantain/20" : "border-crust"
            }`}
          >
            <h3 className="font-display text-xl leading-tight sm:text-[1.4rem]">{dish.name}</h3>
            <p className={dark ? "text-plantain/85" : "text-clay"}>{dish.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function MenuPage() {
  return (
    <>
      <header className="wrap grid gap-8 pb-10 pt-10 md:grid-cols-[1.3fr_1fr] md:items-end md:pb-14 md:pt-16">
        <div>
          <h1 className="hero-in font-display text-[clamp(3rem,9vw,5.5rem)] leading-[0.95] text-pepper">The menu</h1>
          <p className="hero-in mt-5 max-w-md text-lg" style={{ "--hero-delay": "100ms" } as React.CSSProperties}>
            Everything is cooked fresh, so what’s ready changes day to day. Call or text to check today’s pot and
            prices.
          </p>
          <nav aria-label="Menu sections" className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-semibold">
            <a href={`#${streetFood.id}`} className="link-underline">
              Street food and plates
            </a>
            <a href={`#${saturday.id}`} className="link-underline">
              Saturday specials
            </a>
          </nav>
        </div>
        <figure className="hero-in hidden md:block" style={{ "--hero-delay": "160ms" } as React.CSSProperties}>
          <Image
            src={photos.plate.src}
            alt={photos.plate.alt}
            priority
            sizes="344px"
            className="ml-auto h-auto w-full max-w-[300px] rotate-2 border-[6px] border-paper shadow-[8px_8px_0_0_#B92D17]"
          />
        </figure>
      </header>

      <div className="bg-paper">
        <div className="wrap py-14 md:py-20">
          <Board group={streetFood} tone="light" />
          <div className="mt-10 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-lg" data-reveal>
            <span className="font-display text-xl">To drink:</span>
            <span>{drinks.map((d) => d.name).join(", ")}, cold.</span>
          </div>
        </div>
      </div>

      <div className="bg-callaloo text-plantain">
        <div className="wrap grid gap-12 py-14 md:grid-cols-[1.5fr_1fr] md:items-start md:py-20">
          <Board group={saturday} tone="dark" />
          <figure data-reveal="mask" className="md:mt-16">
            <Image
              src={photos.soup.src}
              alt={photos.soup.alt}
              sizes="(min-width: 768px) 360px, 90vw"
              className="h-auto w-full max-w-[360px]"
            />
          </figure>
        </div>
      </div>

      <section className="wrap flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between">
        <div data-reveal>
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] leading-[1]">Know what you want?</h2>
          <p className="mt-3 text-lg">Call or text {site.phone.display} with your order and address.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={telHref} className="btn-primary text-lg">
            Call to order
          </a>
          <Link href="/order" className="btn-ghost text-lg">
            How ordering works
          </Link>
        </div>
      </section>
    </>
  )
}
