# Lady D’s Flava

First-draft website for **Lady D’s Flava**, a Guyanese and Trini-style Caribbean kitchen in Brownsville, Brooklyn. Built by Novus from the business’s public Instagram and Facebook pages, to show the client and collect feedback.

## Pages

| Route    | Job                                                                       |
| -------- | ------------------------------------------------------------------------- |
| `/`      | Who she is, what she cooks, call to order                                 |
| `/menu`  | Street food board, Saturday lunch specials, drinks                        |
| `/story` | The kitchen’s story in her own public words                               |
| `/order` | Call, text or email, how ordering works, payment, where she cooks         |

## Art direction

**Street-stall sign, home kitchen plate.** The name is set big like a hand-painted sign over a stall (Shrikhand), the photos are pinned up like snapshots with hard offset shadows, and the palette comes from the food: plantain (canvas), pepper red (action), callaloo green (menu board), turmeric (accent), ink (text and footer). Body text is Bricolage Grotesque. Motion is one load-in for each hero plus quiet scroll reveals; all of it switches off under `prefers-reduced-motion`.

## Where things live

- `src/lib/site.ts` business details (phone, email, area, socials, payments) with sources noted
- `src/lib/menu.ts` menu data, dish names exactly as on her flyers
- `src/lib/photos.ts` photos and alt text
- `public/food/` five photos cropped from her Facebook cover collage
- `src/app/icon.svg`, `apple-icon.png`, `favicon.ico`, `opengraph-image.png` brand mark and share image

## Open questions for the client

1. **Name and logo.** Her Facebook profile picture and flyers say **“Yummy Yumz”** (Instagram handle on the flyer: Jsyummyyumz) with a crowned J and snake logo. The site uses **Lady D’s Flava** and a “D” mark instead. Which name should lead, and can we get the logo as a high-resolution file?
2. **Phone number.** The Facebook page lists **(347) 443-1561** (used on the site). The Labor Day flyer lists **(347) 663-0280** and Zelle at (347) 635-3617. Which is the order line?
3. **Address.** Facebook says “Grafton, Brownville, NY 11212”, which is Grafton Street in Brownsville, Brooklyn. The site shows the street only. Is there a pickup spot she wants listed?
4. **Hours and prices.** None are published, so the site asks people to call. Send hours and prices to add them.
5. **Parties and catering.** The site invites party orders by email, based on her party-table photos. Confirm she takes them.
6. **Photos.** The current photos are small crops from one collage. Full-size originals (and any of the stall, the cooks or doubles) would improve every page.
7. **Dish descriptions** on the menu page are short explainers we wrote. She should check them.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 3. Hosted on Vercel.
