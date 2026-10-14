# Make this portfolio yours

## Identity and contact

- Update `lib/portfolio.ts`: sample name Alex Morgan, email hello@example.com, and its mailto link. The reserved example.com address is intentionally not a real booking inbox.
- Update the biography and hero copy in `app/page.tsx`. Replace the hard-coded portrait caption too. Do not publish the sample biography as your own without reviewing it.
- Update the title and description in `app/layout.tsx`. The site deliberately uses noindex/nofollow while it contains sample material. Enable indexing only after personalizing and approving publication; add the actual canonical domain and social metadata at that point.
- Replace the generated Next.js favicon at `app/favicon.ico` with your own mark.
- Remove the demo footer notice and Unsplash notice only after replacing the sample material.

## Every photograph to replace

All images below are locally stored Unsplash placeholders, not the portfolio owner's work. Replace them with licensed photographs you own. Keep the filenames or update their references. Sources use images.unsplash.com with the following photo IDs:

| File under public/images | Placement | Unsplash photo ID | Suggested composition |
| --- | --- | --- | --- |
| hero.jpg | Full-width introduction | photo-1470770841072-f978cf4d019e | Wide landscape, roughly 2.4:1 |
| mountain.jpg | Work: A little closer to the sky | photo-1464822759023-fed622ff2c3b | Landscape, roughly 4:3 |
| portrait.jpg | Work: In her own light | photo-1534528741775-53994a69daeb | Portrait, roughly 4:5 |
| architecture.jpg | Work: Lines & light | photo-1487958449943-2429e8be8625 | Portrait, roughly 4:5 |
| forest.jpg | Work: Where the world goes quiet | photo-1448375240586-882707db888b | Landscape, roughly 4:3 |
| ocean.jpg | Work: An open horizon | photo-1518837695005-2083093ee35b | Landscape, roughly 4:3 |
| study.jpg | Work: An ordinary kind of magic | photo-1524504388940-b1c1722653e1 | Portrait, roughly 4:5 |
| about.jpg | About: photographer portrait | photo-1506794778202-cad84cf45f1d | Portrait, roughly 4:5 |

Edit each work's title, category, alt text and image reference in `lib/portfolio.ts`. Update the hero and about alt text in `app/page.tsx` separately. Describe the actual replacement image rather than retaining placeholder descriptions. Confirm subjects' consent and usage rights before publishing. Export web-sized sRGB JPEGs or WebP; Next Image generates responsive versions. The hero is preloaded, other images lazy-load. Photos are local, so visitors do not contact Unsplash.

## Pricing

The three illustrative USD starting rates ($350/$550/$900) live in `lib/portfolio.ts`, together with deliverables and usage terms. Pricing follows work and the introduction so visitors see the photographic approach before considering a session. Update rates, currency, session lengths, quantities, rights, tax and travel policies. No checkout or booking promise is made. Enquiry links open the visitor's email app with the service name in the subject. A configured mail client is required; the address is also visible to copy.

## Design and behavior

Warm paper background, charcoal text, Cormorant Garamond headings and Manrope body text. Google fonts are downloaded at build time and self-hosted by Next.js; initial builds require network access to Google Fonts. A restrained two-column gallery becomes one column on mobile. Category buttons filter the gallery; selecting a photograph opens a native modal with previous/next controls, arrow-key navigation, Escape to close and native focus restoration. Navigation uses section anchors, with no tracking, form collection or external services.
