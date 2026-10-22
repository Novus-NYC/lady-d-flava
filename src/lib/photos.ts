import type { StaticImageData } from "next/image"
import bake from "../../public/food/bake.jpg"
import chicken from "../../public/food/chicken.jpg"
import plate from "../../public/food/plate.jpg"
import soup from "../../public/food/soup.jpg"
import spread from "../../public/food/spread.jpg"

/**
 * Lady D’s own photos, cropped from the cover collage on the business’s
 * Facebook page (camera watermarks and collage frames trimmed, nothing
 * retouched). The originals are small, so they are never shown larger
 * than roughly their source size.
 */
export type Photo = { src: StaticImageData; alt: string }

export const photos = {
  bake: {
    src: bake,
    alt: "A fried bake split open and stuffed with seasoned saltfish and tomato.",
  },
  chicken: {
    src: chicken,
    alt: "Glazed chicken in a dark, sticky sauce on a bed of lettuce.",
  },
  plate: {
    src: plate,
    alt: "A full plate seen from above: fried chicken, rice, curry, pumpkin, vegetables and a green salad.",
  },
  soup: {
    src: soup,
    alt: "A bowl of golden soup with corn on the cob and carrots.",
  },
  spread: {
    src: spread,
    alt: "A party table seen from above: a bowl of torn roti, plates of glazed chicken, a tray of rice and sliced watermelon.",
  },
} satisfies Record<string, Photo>
