import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { photos } from "@/lib/photos"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Our story",
  description: `${site.name} is a home-style Guyanese and Caribbean kitchen in ${site.area.neighborhood}, ${site.area.borough}, cooking since ${site.founded}.`,
}

/*
 * Copy is drawn only from what the business has said publicly (Instagram bio,
 * Facebook intro and flyers, post captions). The client should replace or
 * extend it with her own words after the first review.
 */

export default function StoryPage() {
  return (
    <>
      <header className="bg-pepper text-paper">
        <div className="wrap pb-14 pt-12 md:pb-20 md:pt-20">
          <h1 className="hero-in max-w-4xl font-display text-[clamp(2.6rem,7.5vw,5.5rem)] leading-[0.98]">
            {site.motto}
          </h1>
          <p
            className="hero-in mt-6 max-w-xl text-xl leading-snug text-paper/90"
            style={{ "--hero-delay": "120ms" } as React.CSSProperties}
          >
            {site.mottoSecond}. That’s how Lady D describes her kitchen, and it’s the whole idea.
          </p>
        </div>
      </header>

      <section className="wrap grid gap-12 py-16 md:grid-cols-[1fr_1.15fr] md:gap-16 md:py-24">
        <div className="relative mx-auto w-full max-w-sm md:mx-0">
          <figure data-reveal="mask">
            <Image
              src={photos.spread.src}
              alt={photos.spread.alt}
              sizes="(min-width: 768px) 380px, 85vw"
              className="h-auto w-full border-[6px] border-paper shadow-[8px_8px_0_0_#163F2D]"
            />
          </figure>
        </div>

        <div className="max-w-prose space-y-5 text-lg" data-reveal>
          <h2 className="font-display text-[clamp(1.9rem,4vw,2.6rem)] leading-[1.05] text-pepper">
            A Guyanese kitchen in {site.area.neighborhood}
          </h2>
          <p>
            {site.name} started cooking for {site.area.borough} in {site.founded}. It’s home-style Caribbean food: Guyanese
            cooking, plus the Trini street food everyone in Brooklyn loves.
          </p>
          <p>
            Some days that means a full table of glazed chicken, torn roti and fried rice for a party. Some days it’s a
            pot of Saturday soup with corn and carrots. Over Labor Day weekend it was a stall on {site.laborDay},
            selling doubles and patties to everyone walking past, with a friendly crew of cooks behind the table.
          </p>
          <p>
            The promise behind all of it: <em>“{site.promise}.”</em>
          </p>
        </div>
      </section>

      <section className="bg-turmeric">
        <div className="wrap grid gap-10 py-16 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-16 md:py-20">
          <div data-reveal>
            <h2 className="font-display text-[clamp(1.9rem,4vw,2.6rem)] leading-[1.05]">Street food, done her way</h2>
            <p className="mt-5 max-w-prose text-lg">
              The bake comes split open and packed with saltfish and tomato (that’s one in the photo). The doubles are
              made the Guyanese way, and Lady D stands by them: the bara should come out soft and golden, never brown
              like a crayon. Order a pair and judge for yourself.
            </p>
            <Link href="/menu" className="btn-ink mt-8">
              See the menu
            </Link>
          </div>
          <figure data-reveal="mask" className="justify-self-center md:justify-self-end">
            <Image
              src={photos.bake.src}
              alt={photos.bake.alt}
              sizes="(min-width: 768px) 340px, 85vw"
              className="h-auto w-full max-w-[340px] rotate-2 border-[6px] border-paper shadow-[8px_8px_0_0_#24150E]"
            />
          </figure>
        </div>
      </section>

      <section className="wrap flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between">
        <div data-reveal>
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] leading-[1]">Cooking for a party?</h2>
          <p className="mt-3 max-w-prose text-lg">
            Tell Lady D the date, how many people and what you’re craving.
          </p>
        </div>
        <Link href="/order" className="btn-primary text-lg">
          Plan an order
        </Link>
      </section>
    </>
  )
}
