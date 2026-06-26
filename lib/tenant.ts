/**
 * Active tenant branding + integration links.
 *
 * Today AD Stay OS serves a single hotel (Aqua Dunhinda), so this is one static
 * object. It is deliberately the *only* place hotel/product names and external
 * links live, so the move to multi-tenant later is "resolve this per request"
 * rather than a find-and-replace across the component tree.
 */
export interface TenantBrand {
  /** Hotel name in sentence case. */
  hotelName: string;
  /** Hotel wordmark as shown in the logo (all caps). */
  hotelWordmark: string;
  /** Logo tagline. */
  tagline: string;
  /** The SaaS platform name. */
  productName: string;
  /** Live booking-engine URL (IPMS247). */
  bookingUrl: string;
  /** Public contact details (from aquadunhinda.com). */
  contact: {
    address: string;
    phone: string;
    email: string;
  };
}

export const tenant: TenantBrand = {
  hotelName: "Aqua Dunhinda",
  hotelWordmark: "AQUA DUNHINDA",
  tagline: "Nature | Wellness | Luxury",
  productName: "AD Stay OS",
  bookingUrl:
    "https://live.ipms247.com/booking/book-rooms-aquadunhindavillanatureretreatbyhotrev",
  contact: {
    address: "Dunhinda Road, Ethgala, Gampola, Kandy, Sri Lanka",
    phone: "+94 (77) 692 5599 / +94 (77) 593 4119",
    email: "info@aquadunhinda.com",
  },
};
