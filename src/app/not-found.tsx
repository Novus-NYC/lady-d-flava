import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Page not found",
}

export default function NotFound() {
  return (
    <section className="wrap py-24">
      <h1 className="font-display text-[clamp(2.6rem,7vw,4.5rem)] leading-[1] text-pepper">That plate’s empty</h1>
      <p className="mt-5 max-w-prose text-lg">This page doesn’t exist. The menu does, though.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/menu" className="btn-primary">
          See the menu
        </Link>
        <Link href="/" className="btn-ghost">
          Go home
        </Link>
      </div>
    </section>
  )
}
