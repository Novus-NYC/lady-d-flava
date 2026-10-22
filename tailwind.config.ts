import type { Config } from "tailwindcss"

/**
 * Brand tokens for Lady D’s Flava.
 * Roles: canvas (plantain), surface (paper), text (ink / clay), action (pepper),
 * accent (turmeric), secondary surface (callaloo), border (crust).
 */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        plantain: "#FBF0CF",
        paper: "#FFFAEE",
        ink: "#24150E",
        clay: "#6A5444",
        pepper: { DEFAULT: "#B92D17", deep: "#A3260F" },
        turmeric: "#F2B12C",
        callaloo: { DEFAULT: "#163F2D", deep: "#0F2E21" },
        crust: "#E3CFA0",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "72rem",
        prose: "38rem",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
}
export default config
