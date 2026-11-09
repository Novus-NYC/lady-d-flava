"use client"

import { useMemo, useState } from "react"
import { drinks, saturday, streetFood, type Dish } from "@/lib/menu"
import { mailHref, site, smsHref } from "@/lib/site"

/**
 * Online order builder. There is no payment processing on the site:
 * the customer picks dishes and quantities, then sends the finished order
 * to the kitchen by text or email. Lady D confirms the total and payment
 * (Zelle, Cash App, Apple Pay) the same way she does today.
 */

const groups: { title: string; dishes: Dish[] }[] = [
  { title: streetFood.title, dishes: streetFood.dishes },
  { title: saturday.title, dishes: saturday.dishes },
  { title: "Drinks", dishes: drinks },
]

type Fulfillment = "Delivery" | "Pickup"

export default function OrderForm() {
  const [qty, setQty] = useState<Record<string, number>>({})
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [fulfillment, setFulfillment] = useState<Fulfillment>("Delivery")
  const [address, setAddress] = useState("")
  const [when, setWhen] = useState("")
  const [notes, setNotes] = useState("")
  const [error, setError] = useState("")

  const lines = useMemo(
    () =>
      groups
        .flatMap((g) => g.dishes)
        .filter((d) => (qty[d.id] ?? 0) > 0)
        .map((d) => `${qty[d.id]} x ${d.name}`),
    [qty],
  )

  const itemCount = Object.values(qty).reduce((a, b) => a + b, 0)

  const change = (id: string, delta: number) =>
    setQty((q) => ({ ...q, [id]: Math.max(0, Math.min(50, (q[id] ?? 0) + delta)) }))

  const message = () =>
    [
      "Hi Lady D, I’d like to place an order from the website:",
      "",
      ...lines,
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `${fulfillment}${fulfillment === "Delivery" && address ? ` to: ${address}` : ""}`,
      when ? `When: ${when}` : "",
      notes ? `Notes: ${notes}` : "",
    ]
      .filter((l, i, all) => l !== "" || (i > 0 && all[i - 1] !== ""))
      .join("\n")
      .trim()

  const validate = () => {
    if (lines.length === 0) return "Add at least one dish to your order."
    if (!name.trim()) return "Please add your name."
    if (!phone.trim()) return "Please add a phone number so the kitchen can confirm."
    if (fulfillment === "Delivery" && !address.trim()) return "Please add a delivery address."
    return ""
  }

  const send = (via: "text" | "email") => {
    const problem = validate()
    setError(problem)
    if (problem) return
    window.location.href = via === "text" ? smsHref(message()) : mailHref("Online order from the website", message())
  }

  const field =
    "w-full border-2 border-crust bg-paper px-3 py-2.5 text-lg text-ink placeholder:text-clay/70 focus:border-pepper focus:outline-none"

  return (
    <form
      id="order-online"
      className="grid scroll-mt-28 gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14"
      onSubmit={(e) => {
        e.preventDefault()
        send("text")
      }}
    >
      <div className="space-y-10">
        {groups.map((group) => (
          <fieldset key={group.title}>
            <legend className="font-display text-[clamp(1.6rem,3.4vw,2.2rem)] leading-none text-pepper">
              {group.title}
            </legend>
            <ul className="mt-4 divide-y divide-crust border-y border-crust">
              {group.dishes.map((dish) => {
                const n = qty[dish.id] ?? 0
                return (
                  <li key={dish.id} className="flex items-center gap-4 py-3.5">
                    <div className="min-w-0 flex-1">
                      <p className="text-lg font-semibold leading-tight">{dish.name}</p>
                      <p className="mt-1 text-clay">{dish.description}</p>
                    </div>
                    <div className="flex shrink-0 items-center gap-1" role="group" aria-label={`Quantity of ${dish.name}`}>
                      <button
                        type="button"
                        className="h-10 w-10 border-2 border-ink text-xl font-semibold leading-none disabled:opacity-30"
                        onClick={() => change(dish.id, -1)}
                        disabled={n === 0}
                        aria-label={`Remove one ${dish.name}`}
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-lg font-semibold tabular-nums" aria-live="polite">
                        {n}
                      </span>
                      <button
                        type="button"
                        className="h-10 w-10 border-2 border-ink bg-ink text-xl font-semibold leading-none text-plantain hover:bg-pepper hover:border-pepper"
                        onClick={() => change(dish.id, 1)}
                        aria-label={`Add one ${dish.name}`}
                      >
                        +
                      </button>
                    </div>
                  </li>
                )
              })}
            </ul>
          </fieldset>
        ))}
      </div>

      <div className="lg:sticky lg:top-[calc(var(--nav-h)+1.5rem)] lg:self-start">
        <div className="border-2 border-ink bg-paper p-6 shadow-[8px_8px_0_0_#24150E]">
          <h3 className="font-display text-3xl leading-none">Your order</h3>
          {lines.length === 0 ? (
            <p className="mt-4 text-clay">Nothing yet. Tap + next to a dish to add it.</p>
          ) : (
            <ul className="mt-4 space-y-1.5 text-lg">
              {lines.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          )}

          <div className="mt-6 grid gap-4">
            <label className="grid gap-1.5">
              <span className="font-semibold">Name</span>
              <input className={field} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
            </label>
            <label className="grid gap-1.5">
              <span className="font-semibold">Phone</span>
              <input
                className={field}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                autoComplete="tel"
              />
            </label>
            <fieldset className="grid gap-1.5">
              <legend className="font-semibold">Delivery or pickup</legend>
              <div className="mt-1.5 flex gap-2">
                {(["Delivery", "Pickup"] as Fulfillment[]).map((f) => (
                  <button
                    key={f}
                    type="button"
                    aria-pressed={fulfillment === f}
                    onClick={() => setFulfillment(f)}
                    className={fulfillment === f ? "btn-ink flex-1" : "btn-ghost flex-1"}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </fieldset>
            {fulfillment === "Delivery" && (
              <label className="grid gap-1.5">
                <span className="font-semibold">Delivery address</span>
                <input
                  className={field}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  autoComplete="street-address"
                />
              </label>
            )}
            <label className="grid gap-1.5">
              <span className="font-semibold">
                When <span className="font-normal text-clay">(optional)</span>
              </span>
              <input
                className={field}
                value={when}
                onChange={(e) => setWhen(e.target.value)}
                placeholder="As soon as possible, or a time"
              />
            </label>
            <label className="grid gap-1.5">
              <span className="font-semibold">
                Notes <span className="font-normal text-clay">(optional)</span>
              </span>
              <textarea
                className={`${field} min-h-24`}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Spice level, allergies, a party order…"
              />
            </label>
          </div>

          {error && (
            <p role="alert" className="mt-4 font-semibold text-pepper">
              {error}
            </p>
          )}

          <div className="mt-6 grid gap-3">
            <button type="submit" className="btn-primary text-lg">
              Send order by text{itemCount > 0 ? ` (${itemCount})` : ""}
            </button>
            <button type="button" className="btn-ghost" onClick={() => send("email")}>
              Send by email instead
            </button>
          </div>
          <p className="mt-4 text-sm text-clay">
            Your order opens in your phone’s messages or email app, ready to send to the kitchen. Lady D replies to
            confirm the total. Pay with {site.payments.join(", ").replace(/, ([^,]*)$/, " or $1")}.
          </p>
        </div>
      </div>
    </form>
  )
}
