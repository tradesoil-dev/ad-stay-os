/**
 * AD Stay OS core domain types.
 *
 * These describe the shapes the UI renders today (sourced from `lib/data`).
 * When Supabase lands, the database schema should converge onto these names so
 * the swap from mock data to real data is a change of source, not of shape.
 */

export type BookingStatus =
  | "awaiting_confirmation"
  | "deposit_pending"
  | "confirmed"
  | "cancelled";

/** A bookable accommodation — the real Aqua Dunhinda Villa or one of the chalets. */
export interface Accommodation {
  slug: string;
  name: string;
  kind: "Villa" | "Chalet";
  /** Short line used in the booking journey. */
  shortDescription: string;
  /** Longer line used on the landing page. */
  description: string;
  capacity: string;
  size: string;
  /** Public image URL from aquadunhinda.com. */
  image: string;
  recommended?: boolean;
}

/** A bookable experience / add-on. */
export interface Experience {
  slug: string;
  title: string;
  description: string;
  price: string;
}

/** Person details captured during the booking journey. */
export interface Guest {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  specialRequests?: string;
}

/** Compact booking row for the staff dashboard list. */
export interface BookingSummary {
  id: string;
  guestName: string;
  stay: string;
  dates: string;
  status: string;
}

/** Full booking record for the staff detail screen. */
export interface BookingDetail {
  id: string;
  reference: string;
  guestName: string;
  stay: string;
  dates: string;
  guests: string;
  experience: string;
  paymentStatus: string;
  specialRequest: string;
}
