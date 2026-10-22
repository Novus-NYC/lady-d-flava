/**
 * Every business detail used on the site lives here.
 *
 * Sources (checked October 21, 2026):
 * - Facebook page "Lady D’s Flava" (About tab): category, phone, email,
 *   address line, delivery, price range, founding date.
 * - Labor Day flyer posted on that Facebook page: menu, payment methods,
 *   Eastern Parkway at Nostrand location for the holiday weekend.
 * - Saturday Lunch Specials flyer on the same page.
 * - Instagram @ladydsflava bio (motto lines).
 *
 * Not published anywhere we could read, so deliberately left out:
 * opening hours, prices, a street number, pickup arrangements.
 */

export const site = {
  name: "Lady D’s Flava",
  shortName: "Lady D’s",
  /** From the Instagram bio and the Facebook intro. */
  motto: "A world of taste, a flavor to chase",
  mottoSecond: "Where taste captivates and flavor thrives",
  promise: "A bite of delight, a memory for life",
  cuisine: "Guyanese and Trini-style Caribbean food",

  phone: {
    display: "(347) 443-1561",
    tel: "+13474431561",
  },
  email: "yummyyuz027@gmail.com",

  area: {
    street: "Grafton Street",
    neighborhood: "Brownsville",
    borough: "Brooklyn",
    region: "NY",
    postalCode: "11212",
  },

  /** The flyer location for the Labor Day weekend stall. */
  laborDay: "Eastern Parkway at the Nostrand Avenue subway",

  payments: ["Zelle", "Cash App", "Apple Pay"],
  founded: "January 2025",

  socials: [
    { label: "Instagram", handle: "@ladydsflava", href: "https://www.instagram.com/ladydsflava/" },
    {
      label: "Facebook",
      handle: "Lady D’s Flava",
      href: "https://www.facebook.com/people/Lady-Ds-Flava/61580053790108/",
    },
  ],

  credit: { label: "Made by Novus", href: "https://novusnyc.org" },
} as const

export const nav = [
  { href: "/menu", label: "Menu" },
  { href: "/story", label: "Our story" },
  { href: "/order", label: "Order" },
] as const

export const telHref = `tel:${site.phone.tel}`
export const smsHref = (body?: string) =>
  body ? `sms:${site.phone.tel}?&body=${encodeURIComponent(body)}` : `sms:${site.phone.tel}`
export const mailHref = (subject?: string, body?: string) => {
  const params = new URLSearchParams()
  if (subject) params.set("subject", subject)
  if (body) params.set("body", body)
  const query = params.toString().replace(/\+/g, "%20")
  return `mailto:${site.email}${query ? `?${query}` : ""}`
}

export const areaLine = `${site.area.street}, ${site.area.neighborhood}, ${site.area.borough}`
