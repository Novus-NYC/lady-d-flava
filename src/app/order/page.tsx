import type { Metadata } from "next"
import Link from "next/link"
import OrderForm from "@/lib/components/order-form"
import OrderWays from "@/lib/components/order-ways"
import { areaLine, site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Order",
  description: `Order from ${site.name} online, or by phone, text or email. Delivery around ${site.area.neighborhood}, ${site.area.borough}. ${site.payments.join(", ")} accepted.`,
}

const steps = [
  { title: "Send your order", body: "Build it online above, or call or text with what you’d like. Not sure? Ask what’s cooking today." },
  { title: "Confirm and pay", body: `The kitchen confirms your order and total. Pay with ${site.payments.join(", ").replace(/, ([^,]*)$/, " or $1")}.` },
  { title: "Food on the way", body: "Your food is packed up hot and sent out for delivery." },
]

export default function OrderPage() {
  return (
    <>
      <header className="wrap pb-10 pt-10 md:pb-14 md:pt-16">
        <h1 className="hero-in font-display text-[clamp(3rem,9vw,5.5rem)] leading-[0.95] text-pepper">Order</h1>
        <p className="hero-in mt-5 max-w-xl text-xl leading-snug" style={{ "--hero-delay": "100ms" } as React.CSSProperties}>
          Pick your dishes below and send your order straight to the kitchen. Lady D confirms the total and you pay
          by {site.payments.join(", ").replace(/, ([^,]*)$/, " or $1")}.
        </p>
      </header>

      <section aria-labelledby="online-title" className="wrap pb-16 md:pb-20">
        <h2 id="online-title" className="sr-only">
          Order online
        </h2>
        <OrderForm />
      </section>

      <section aria-labelledby="ways-title" className="wrap pb-16 md:pb-20">
        <h2 id="ways-title" className="font-display text-[clamp(1.8rem,4vw,2.6rem)] leading-[1.05]">
          Rather call, text or email?
        </h2>
        <div className="mt-6">
          <OrderWays />
        </div>
      </section>

      <section className="bg-callaloo text-plantain">
        <div className="wrap py-16 md:py-20">
          <h2 data-reveal className="font-display text-[clamp(2rem,4.5vw,3rem)] leading-[1] text-turmeric">
            How it works
          </h2>
          {/* A real sequence, so it is numbered. */}
          <ol className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step, i) => (
              <li
                key={step.title}
                data-reveal
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
                className="border-t-2 border-turmeric pt-5"
              >
                <span aria-hidden="true" className="font-display text-4xl leading-none text-turmeric">
                  {i + 1}
                </span>
                <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-plantain/85">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wrap grid gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-20">
        <div data-reveal>
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] leading-[1.05]">Where we cook</h2>
          <p className="mt-4 text-lg">{areaLine}, NY {site.area.postalCode}.</p>
          <p className="mt-3 max-w-prose text-clay">
            Delivery is available. Call to check that it reaches your block. Over Labor Day weekend, the stall was on{" "}
            {site.laborDay}.
          </p>
        </div>
        <div data-reveal>
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] leading-[1.05]">Good to know</h2>
          <ul className="mt-4 space-y-3 text-lg">
            <li>
              <strong className="font-semibold">Payment:</strong> {site.payments.join(", ")}.
            </li>
            <li>
              <strong className="font-semibold">Bigger orders:</strong> parties and events are easiest by email, with
              the date and head count.
            </li>
            <li>
              <strong className="font-semibold">What’s ready:</strong> the menu changes with the day, and Saturdays
              bring{" "}
              <Link href="/menu#saturday" className="link-underline">
                lunch specials
              </Link>
              .
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
