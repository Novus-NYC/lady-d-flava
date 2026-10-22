"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { nav, site, telHref } from "@/lib/site"

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close the menu on navigation (adjusting state during render, per React docs).
  const [lastPath, setLastPath] = useState(pathname)
  if (lastPath !== pathname) {
    setLastPath(pathname)
    setOpen(false)
  }

  // Focus management and Escape for the mobile menu.
  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false)
        toggleRef.current?.focus()
        return
      }
      // Keep Tab inside the open menu.
      if (e.key === "Tab") {
        const dialog = document.getElementById("mobile-menu")
        const items = dialog?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")
        if (!items || items.length === 0) return
        const first = items[0]
        const last = items[items.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open])

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header
      className={`sticky top-0 z-40 h-[var(--nav-h)] border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled ? "border-crust bg-plantain/95 shadow-[0_1px_0_0_rgba(36,21,14,0.06)] backdrop-blur-sm" : "border-transparent bg-plantain"
      }`}
    >
      <div className="wrap flex h-full items-center justify-between gap-6">
        <Link
          href="/"
          className="font-display text-2xl leading-none text-pepper sm:text-[1.7rem]"
          aria-label={`${site.name}, home`}
        >
          Lady D’s
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`py-2 font-semibold underline-offset-[6px] decoration-2 hover:underline hover:decoration-pepper ${
                isActive(item.href) ? "underline decoration-turmeric" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a href={telHref} className="btn-ink !min-h-11 px-4 text-[0.95rem]">
            Call {site.phone.display}
          </a>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="btn-ghost !min-h-11 px-3 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Open the site menu"
          onClick={() => setOpen(true)}
        >
          <span aria-hidden="true" className="flex w-5 flex-col gap-[5px]">
            <span className="h-[2px] w-full bg-current" />
            <span className="h-[2px] w-full bg-current" />
            <span className="h-[2px] w-full bg-current" />
          </span>
          Menu
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        hidden={!open}
        className={`fixed inset-0 z-50 flex-col bg-callaloo text-plantain md:hidden ${open ? "flex" : "hidden"}`}
      >
        <div className="wrap flex h-[var(--nav-h)] items-center justify-between">
          <span className="font-display text-2xl text-turmeric">Lady D’s</span>
          <button
            ref={closeRef}
            type="button"
            className="btn-outline-light !min-h-11 px-4"
            onClick={() => {
              setOpen(false)
              toggleRef.current?.focus()
            }}
          >
            Close
          </button>
        </div>
        <nav aria-label="Main, mobile" className="wrap flex flex-1 flex-col justify-center gap-2 pb-16">
          <Link href="/" className="font-display text-4xl leading-tight hover:text-turmeric" aria-current={pathname === "/" ? "page" : undefined}>
            Home
          </Link>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className="font-display text-4xl leading-tight hover:text-turmeric"
            >
              {item.label}
            </Link>
          ))}
          <a href={telHref} className="btn-light mt-8 self-start">
            Call {site.phone.display}
          </a>
        </nav>
      </div>
    </header>
  )
}
