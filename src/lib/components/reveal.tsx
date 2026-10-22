"use client"

import { useEffect } from "react"

/**
 * Turns on scroll reveals for every element with a data-reveal attribute.
 * Does nothing when the visitor prefers reduced motion, so content is
 * simply visible. Elements are also visible before hydration (no-JS safe).
 */
export default function RevealManager() {
  useEffect(() => {
    const motionOk = window.matchMedia("(prefers-reduced-motion: no-preference)").matches
    if (!motionOk || !("IntersectionObserver" in window)) return

    const root = document.documentElement
    root.classList.add("reveal-ready")

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in")
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    )

    const observe = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)").forEach((el) => {
        const rect = el.getBoundingClientRect()
        // Anything already on screen at load should not wait for a scroll.
        if (rect.top < window.innerHeight * 0.92) el.classList.add("is-in")
        else observer.observe(el)
      })
    }
    observe()

    // Route changes render new elements; pick them up without a full reload.
    const mo = new MutationObserver(observe)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mo.disconnect()
      root.classList.remove("reveal-ready")
    }
  }, [])

  return null
}
