/**
 * Single source of truth for the demo content.
 *
 * Content and photography are drawn from aquadunhinda.com. The chalet *names*
 * (Kotmale, Mahaweli, Tea Garden, Riverstone) are themed placeholders inspired
 * by the real surroundings — swap them for the owners' actual chalet names.
 *
 * This is the seam Supabase will replace: keep the exported shapes stable
 * (see `types`) and the data fetch can move server-side without touching the
 * components.
 */
import type {
  Accommodation,
  BookingDetail,
  BookingSummary,
  Experience,
  OccupancyState,
} from "@/types";

const IMG = "https://www.aquadunhinda.com/assets/images";

/** The real accommodations: one Villa + four Chalets. */
export const accommodations: Accommodation[] = [
  {
    slug: "aqua-dunhinda-villa",
    name: "Aqua Dunhinda Villa",
    kind: "Villa",
    shortDescription:
      "A private three-bedroom villa for families and groups.",
    description:
      "A three-bedroom private villa set on a cliff in a tea garden, with panoramic forest, mountain and river views, wrap-around verandas, an infinity pool and jacuzzi.",
    capacity: "Up to 6 guests · 3 bedrooms",
    size: "4,000 sq ft",
    image: `${IMG}/villa/aquadunhinda-villa1.jpg`,
    recommended: true,
  },
  {
    slug: "kotmale-chalet",
    name: "Kotmale Chalet",
    kind: "Chalet",
    shortDescription: "Water-front chalet facing the Kotmale forest.",
    description:
      "A water-front chalet facing the Kotmale forest, with a private river-view balcony, king bed, air-conditioning and a rain spa shower.",
    capacity: "2 guests · King bed",
    size: "300–500 sq ft",
    image: `${IMG}/chalets/aquadunhinda-chalets1.jpg`,
  },
  {
    slug: "mahaweli-chalet",
    name: "Mahaweli Chalet",
    kind: "Chalet",
    shortDescription: "River-facing chalet above the Mahaweli.",
    description:
      "A river-facing chalet above the Mahaweli, framed by greenery and birdsong, with a private balcony and rain spa shower.",
    capacity: "2 guests · King bed",
    size: "300–500 sq ft",
    image: `${IMG}/chalets/aquadunhinda-chalets2.jpg`,
  },
  {
    slug: "tea-garden-chalet",
    name: "Tea Garden Chalet",
    kind: "Chalet",
    shortDescription: "Chalet nestled beside the tea garden.",
    description:
      "A chalet nestled beside the tea garden, with forest views, air-conditioning, a king bed and a private balcony overlooking the valley.",
    capacity: "2 guests · King bed",
    size: "300–500 sq ft",
    image: `${IMG}/chalets/aquadunhinda-chalets3.jpg`,
  },
  {
    slug: "riverstone-chalet",
    name: "Riverstone Chalet",
    kind: "Chalet",
    shortDescription: "Secluded river-view chalet with spring access.",
    description:
      "A secluded river-view chalet with natural-spring access, a quiet forest-facing deck, king bed and rain spa shower.",
    capacity: "2 guests · King bed",
    size: "300–500 sq ft",
    image: `${IMG}/chalets/aquadunhinda-chalets4.jpg`,
  },
];

export const villa = accommodations[0];
export const chalets = accommodations.filter((a) => a.kind === "Chalet");

/** Bookable experiences offered during the journey (real Aqua Dunhinda activities). */
export const experiences: Experience[] = [
  {
    slug: "nature-hikes",
    title: "Nature Hikes",
    description:
      "Guided and self-guided trails through Kotmale forest and the waterfalls.",
    price: "On request",
  },
  {
    slug: "culinary-lessons",
    title: "Culinary Lessons",
    description: "Cook family recipes and local dishes with the host kitchen.",
    price: "On request",
  },
  {
    slug: "pluck-your-own-tea",
    title: "Pluck Your Own Tea",
    description: "A signature morning in the surrounding tea garden.",
    price: "On request",
  },
  {
    slug: "yoga-meditation",
    title: "Yoga & Meditation",
    description: "Outdoor wellness sessions overlooking the river.",
    price: "On request",
  },
];

/** "Why guests love" reasons on the landing page. */
export const reasons: { title: string; description: string }[] = [
  {
    title: "River-side Serenity",
    description:
      "A peaceful setting shaped by flowing water, greenery, and stillness.",
  },
  {
    title: "Nature All Around",
    description:
      "A boutique escape surrounded by trees, mountain air, and Sri Lankan beauty.",
  },
  {
    title: "Personal Hospitality",
    description:
      "A family-run experience where every guest feels personally welcomed.",
  },
  {
    title: "Memorable Experiences",
    description:
      "From private dinners to wellness moments, every stay can become special.",
  },
];

/** Booking summary shown on the guest portal. */
export const guestBooking = {
  reference: "AQD-2026-0001",
  status: "Awaiting Confirmation",
  stay: "Kotmale Chalet",
  dates: "25 Jun 2026 – 27 Jun 2026",
  guests: "2 Adults",
  experience: "Pluck Your Own Tea Included",
};

/** Read-only rows on the journey summary step. */
export const bookingSummaryRows: [string, string][] = [
  ["Stay", "Kotmale Chalet"],
  ["Dates", "25 Jun 2026 - 27 Jun 2026"],
  ["Guests", "2 Adults"],
  ["Experience", "Pluck Your Own Tea"],
  ["Estimated Total", "Rates on request"],
  ["Payment", "Deposit pending"],
];

/** Staff dashboard KPI tiles. `icon` maps to an inline SVG in the dashboard. */
export const dashboardKpis: {
  label: string;
  value: string;
  hint: string;
  icon: "arrivals" | "departures" | "guests" | "occupancy" | "revenue";
}[] = [
  { label: "Arrivals", value: "3", hint: "1 checked in", icon: "arrivals" },
  { label: "Departures", value: "2", hint: "By 11:00 AM", icon: "departures" },
  { label: "In-house", value: "9", hint: "guests tonight", icon: "guests" },
  { label: "Occupancy", value: "68%", hint: "▲ 12% vs last week", icon: "occupancy" },
  { label: "Revenue", value: "LKR 428k", hint: "this month", icon: "revenue" },
];

/** Weekly occupancy across the property (the villa + four chalets). */
export const occupancyWeek: {
  days: { label: string; date: string; today?: boolean }[];
  units: string[];
  grid: OccupancyState[][];
} = {
  days: [
    { label: "M", date: "23" },
    { label: "T", date: "24" },
    { label: "W", date: "25" },
    { label: "T", date: "26", today: true },
    { label: "F", date: "27" },
    { label: "S", date: "28" },
    { label: "S", date: "29" },
  ],
  units: [
    "Aqua Dunhinda Villa",
    "Kotmale Chalet",
    "Mahaweli Chalet",
    "Tea Garden Chalet",
    "Riverstone Chalet",
  ],
  grid: [
    ["vacant", "vacant", "occupied", "occupied", "arriving", "occupied", "occupied"],
    ["occupied", "occupied", "occupied", "occupied", "occupied", "arriving", "occupied"],
    ["occupied", "vacant", "vacant", "occupied", "occupied", "vacant", "vacant"],
    ["vacant", "vacant", "vacant", "arriving", "occupied", "occupied", "occupied"],
    ["occupied", "occupied", "vacant", "vacant", "arriving", "occupied", "occupied"],
  ],
};

/** Today's check-ins. */
export const todayArrivals: {
  time: string;
  guest: string;
  stay: string;
  guests: string;
  status: string;
}[] = [
  { time: "2:00 PM", guest: "Sarah & Daniel", stay: "Kotmale Chalet", guests: "2 guests", status: "Deposit Pending" },
  { time: "3:00 PM", guest: "Perera Family", stay: "Aqua Dunhinda Villa", guests: "4 guests", status: "Confirmed" },
  { time: "4:00 PM", guest: "Maya Chen", stay: "Tea Garden Chalet", guests: "1 guest", status: "Confirmed" },
];

/** Open guest requests needing staff attention. */
export const guestRequests: {
  title: string;
  who: string;
  priority: string;
  icon: "heart" | "car" | "clock";
}[] = [
  { title: "Anniversary dinner setup", who: "Sarah & Daniel", priority: "High", icon: "heart" },
  { title: "Airport transfer", who: "Perera Family", priority: "Open", icon: "car" },
  { title: "Early check-in (1:00 PM)", who: "Maya Chen", priority: "Open", icon: "clock" },
];

/** Revenue snapshot — reinforces the direct-booking story. */
export const revenueSummary = {
  month: "LKR 428,000",
  directPct: 72,
  otaPct: 28,
  months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  trend: [58, 64, 71, 69, 82, 88],
};

/** Live status per unit. */
export const unitStatus: { name: string; status: string }[] = [
  { name: "Aqua Dunhinda Villa", status: "Occupied" },
  { name: "Kotmale Chalet", status: "Occupied" },
  { name: "Mahaweli Chalet", status: "Cleaning" },
  { name: "Tea Garden Chalet", status: "Arriving 4:00 PM" },
  { name: "Riverstone Chalet", status: "Vacant" },
];

/** Staff dashboard upcoming-bookings list. */
export const upcomingBookings: BookingSummary[] = [
  {
    id: "sarah-daniel",
    guestName: "Sarah & Daniel",
    stay: "Kotmale Chalet",
    dates: "25–27 Jun",
    guests: "2",
    status: "Deposit Pending",
  },
  {
    id: "perera-family",
    guestName: "Perera Family",
    stay: "Aqua Dunhinda Villa",
    dates: "28–30 Jun",
    guests: "4",
    status: "Confirmed",
  },
  {
    id: "maya-chen",
    guestName: "Maya Chen",
    stay: "Tea Garden Chalet",
    dates: "01–03 Jul",
    guests: "1",
    status: "Confirmed",
  },
  {
    id: "j-fernando",
    guestName: "J. Fernando",
    stay: "Mahaweli Chalet",
    dates: "04–06 Jul",
    guests: "2",
    status: "Awaiting",
  },
];

/** Full booking records keyed by id, for the staff detail screen. */
const bookingDetails: Record<string, BookingDetail> = {
  "sarah-daniel": {
    id: "sarah-daniel",
    reference: "AQD-2026-0001",
    guestName: "Sarah & Daniel",
    stay: "Kotmale Chalet",
    dates: "25 Jun 2026 - 27 Jun 2026",
    guests: "2 Adults",
    experience: "Pluck Your Own Tea",
    paymentStatus: "Deposit Pending",
    specialRequest:
      "Guest mentioned this is an anniversary stay. Recommend preparing a private dinner setup and welcome note.",
  },
  "perera-family": {
    id: "perera-family",
    reference: "AQD-2026-0002",
    guestName: "Perera Family",
    stay: "Aqua Dunhinda Villa",
    dates: "28 Jun 2026 - 30 Jun 2026",
    guests: "2 Adults, 2 Children",
    experience: "Nature Hikes",
    paymentStatus: "Confirmed",
    specialRequest:
      "Travelling with young children — request the ground-floor villa bedroom.",
  },
  "maya-chen": {
    id: "maya-chen",
    reference: "AQD-2026-0003",
    guestName: "Maya Chen",
    stay: "Tea Garden Chalet",
    dates: "01 Jul 2026 - 03 Jul 2026",
    guests: "1 Adult",
    experience: "Yoga & Meditation",
    paymentStatus: "Confirmed",
    specialRequest:
      "Prefers a quiet chalet away from common areas for morning practice.",
  },
  "j-fernando": {
    id: "j-fernando",
    reference: "AQD-2026-0004",
    guestName: "J. Fernando",
    stay: "Mahaweli Chalet",
    dates: "04 Jul 2026 - 06 Jul 2026",
    guests: "2 Adults",
    experience: "Culinary Lessons",
    paymentStatus: "Awaiting Confirmation",
    specialRequest:
      "Celebrating a birthday — asked about a cake and a river-side table.",
  },
};

export function getBookingDetail(id: string): BookingDetail | undefined {
  return bookingDetails[id];
}
