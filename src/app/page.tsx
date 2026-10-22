import Image from "next/image"
import Link from "next/link"
import { photos } from "@/lib/photos"
import { saturday, streetFood } from "@/lib/menu"
import { site, telHref } from "@/lib/site"

export default function HomePage() {
  return (
    <>
      {/* Hero: the name is the sign over the stall, the food sits under it. */}
      <section className="relative">
        <div className="wrap grid items-end gap-10 pb-12 pt-8 md:grid-cols-[1.15fr_1fr] md:gap-12 md:pb-20 md:pt-14">
          <div>
            <p className="hero-in font-semibold text-clay">
              {site.cuisine} from {site.area.neighborhood}, {site.area.borough}
            </p>
            <h1
              className="hero-in mt-3 font-display text-[clamp(3.2rem,12vw,4.6rem)] leading-[0.92] text-pepper md:text-[clamp(3.4rem,8.2vw,7.5rem)]"
              style={{ "--hero-delay": "80ms" } as React.CSSProperties}
            >
              <span className="whitespace-nowrap">Lady D’s</span>
              <br />
              Flava
            </h1>
            <p
              className="hero-in mt-6 max-w-md text-xl leading-snug"
              style={{ "--hero-delay": "160ms" } as React.CSSProperties}
            >
              Doubles, bake and salt fish, puri and curry, and a pot of soup every Saturday. Call or text and it’s
              on the way.
            </p>
            <div
              className="hero-in mt-8 flex flex-wrap gap-3"
              style={{ "--hero-delay": "240ms" } as React.CSSProperties}
            >
              <a href={telHref} className="btn-primary text-lg">
                Call to order
              </a>
              <Link href="/menu" className="btn-ghost text-lg">
                See the menu
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <figure
              className="hero-in relative ml-auto w-[78%] border-[6px] border-paper shadow-[8px_8px_0_0_#24150E]"
              style={{ "--hero-delay": "120ms" } as React.CSSProperties}
            >
              <Image
                src={photos.bake.src}
                alt={photos.bake.alt}
                priority
                sizes="(min-width: 768px) 360px, 78vw"
                className="h-auto w-full"
              />
            </figure>
            <figure
              className="hero-in absolute -bottom-6 left-0 w-[46%] -rotate-3 border-[6px] border-paper shadow-[6px_6px_0_0_#B92D17]"
              style={{ "--hero-delay": "260ms" } as React.CSSProperties}
            >
              <Image
                src={photos.chicken.src}
                alt={photos.chicken.alt}
                sizes="(min-width: 768px) 220px, 40vw"
                className="h-auto w-full"
              />
            </figure>
            <p className="absolute -top-3 left-[6%] rotate-[-6deg] bg-turmeric px-3 py-1.5 font-display text-lg text-ink">
              Delivery
            </p>
          </div>
        </div>
      </section>

      {/* Motto band */}
      <section aria-label="Motto" className="bg-pepper text-paper">
        <div className="wrap py-6 text-center md:py-7">
          <p className="font-display text-[clamp(1.35rem,3.4vw,2.2rem)] leading-tight">
            {site.motto}. {site.promise}.
          </p>
        </div>
      </section>

      {/* Menu board preview */}
      <section className="bg-callaloo text-plantain">
        <div className="wrap grid gap-10 py-16 md:grid-cols-[1fr_1.3fr] md:gap-16 md:py-24">
          <div data-reveal>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.4rem)] leading-[1] text-turmeric">
              What’s on the board
            </h2>
            <p className="mt-5 max-w-sm text-lg text-plantain/85">
              Guyanese cooking with Trini street food in the mix. Ask what’s ready today when you call.
            </p>
            <Link href="/menu" className="btn-light mt-8">
              Full menu
            </Link>
          </div>

          <ul className="divide-y divide-plantain/15 border-y border-plantain/15">
            {streetFood.dishes.map((dish, i) => (
              <li
                key={dish.id}
                data-reveal
                style={{ "--reveal-delay": `${i * 50}ms` } as React.CSSProperties}
                className="flex items-baseline gap-4 py-3.5"
              >
                <span className="font-display text-xl leading-tight sm:text-2xl">{dish.name}</span>
                <span aria-hidden="true" className="leader h-3 flex-1 text-turmeric" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Saturday */}
      <section className="bg-paper">
        <div className="wrap grid items-center gap-10 py-16 md:grid-cols-[1fr_1fr] md:gap-16 md:py-24">
          <figure data-reveal="mask" className="order-last md:order-first">
            <Image
              src={photos.soup.src}
              alt={photos.soup.alt}
              sizes="(min-width: 768px) 392px, 90vw"
              className="h-auto w-full max-w-[392px]"
            />
          </figure>
          <div data-reveal>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.4rem)] leading-[1] text-pepper">
              Saturday is soup day
            </h2>
            <p className="mt-5 max-w-prose text-lg">
              On Saturdays Lady D puts on lunch specials for the weekend crowd.
            </p>
            <ul className="mt-6 space-y-3 text-lg">
              {saturday.dishes.map((dish) => (
                <li key={dish.id} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 h-2.5 w-2.5 shrink-0 rotate-45 bg-turmeric" />
                  <span>
                    <strong className="font-semibold">{dish.name}</strong>
                    {dish.id === "fried-snapper" ? ", eggplant or ochro" : ""}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Story teaser */}
      <section>
        <div className="wrap grid items-center gap-10 py-16 md:grid-cols-[1.2fr_1fr] md:gap-16 md:py-24">
          <div data-reveal>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.4rem)] leading-[1]">Made with love by a Guyanese cook</h2>
            <p className="mt-5 max-w-prose text-lg">
              Lady D’s kitchen cooks out of {site.area.neighborhood} for neighbors, parties and street days, and she has
              firm opinions about doubles. (They should never come out brown.)
            </p>
            <Link href="/story" className="btn-ghost mt-8">
              Read her story
            </Link>
          </div>
          <figure data-reveal="mask" className="justify-self-center md:justify-self-end">
            <Image
              src={photos.spread.src}
              alt={photos.spread.alt}
              sizes="(min-width: 768px) 360px, 85vw"
              className="h-auto w-full max-w-[360px] -rotate-2 border-[6px] border-paper shadow-[8px_8px_0_0_#163F2D]"
            />
          </figure>
        </div>
      </section>

      {/* Order CTA */}
      <section className="bg-turmeric">
        <div className="wrap flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between">
          <div data-reveal>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] leading-[1]">Hungry now?</h2>
            <p className="mt-3 text-lg">
              Call or text {site.phone.display}. We take {site.payments.join(", ").replace(/, ([^,]*)$/, " and $1")}.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={telHref} className="btn-ink text-lg">
              Call to order
            </a>
            <Link href="/order" className="btn-ghost text-lg">
              Other ways to order
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
