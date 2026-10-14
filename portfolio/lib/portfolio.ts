export const photographer = {
  name: "Alex Morgan",
  email: "hello@example.com",
  emailLink: "mailto:hello@example.com",
}
export const categories = [
  "All work",
  "Landscapes",
  "Portraits",
  "Editorial",
] as const
export type Category = (typeof categories)[number]
export const photographs = [
  {
    id: "mountain",
    title: "A little closer to the sky",
    category: "Landscapes",
    src: "/images/mountain.jpg",
    alt: "Sunlit mountain valley with evergreen trees beneath a blue, cloud-dotted sky",
    shape: "landscape",
  },
  {
    id: "portrait",
    title: "In her own light",
    category: "Portraits",
    src: "/images/portrait.jpg",
    alt: "Studio portrait of a woman illuminated by blue and violet light",
    shape: "portrait",
  },
  {
    id: "architecture",
    title: "Lines & light",
    category: "Editorial",
    src: "/images/architecture.jpg",
    alt: "Angular white and glass architecture beneath a cloudy sky",
    shape: "portrait",
  },
  {
    id: "forest",
    title: "Where the world goes quiet",
    category: "Landscapes",
    src: "/images/forest.jpg",
    alt: "Sunlight filtering between tall trees in a green forest",
    shape: "landscape",
  },
  {
    id: "ocean",
    title: "An open horizon",
    category: "Landscapes",
    src: "/images/ocean.jpg",
    alt: "Rolling ocean waves beneath an open sky",
    shape: "landscape",
  },
  {
    id: "study",
    title: "An ordinary kind of magic",
    category: "Portraits",
    src: "/images/study.jpg",
    alt: "Studio portrait of a woman in a black top against a dark background",
    shape: "portrait",
  },
] as const
export const services = [
  {
    name: "Portrait session",
    category: "FOR THE INDIVIDUAL",
    description:
      "A little time to slow down and be yourself. Natural, unhurried portraits, made together.",
    price: "$350",
    includes: [
      "60-minute session · one location",
      "20 thoughtfully edited photographs",
      "Private online gallery",
      "Personal-use image rights",
    ],
  },
  {
    name: "Couples & stories",
    category: "FOR THE CONNECTION",
    description:
      "For the two of you, just as you are. The small gestures and the space in between.",
    price: "$550",
    includes: [
      "90-minute session · one location",
      "40 thoughtfully edited photographs",
      "Private online gallery",
      "Personal-use image rights",
    ],
  },
  {
    name: "Brand & editorial",
    category: "FOR THE VISION",
    description:
      "People, details, and spaces that tell your story. A considered collection with a clear point of view.",
    price: "$900",
    includes: [
      "Half-day shoot · up to 4 hours",
      "Creative planning conversation",
      "30 thoughtfully edited photographs",
      "Usage licensing agreed in your quote",
    ],
  },
] as const
