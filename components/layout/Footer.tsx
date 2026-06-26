import Link from "next/link";
import Wordmark from "./Wordmark";
import { tenant } from "@/lib/tenant";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-deep text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1.2fr]">
          <div>
            <Wordmark size="lg" />
            <p className="mt-6 max-w-sm leading-7 text-white/65">
              A boutique nature retreat above the Mahaweli River and Kotmale
              forest. Book directly with us for the best available rate and a
              stay shaped around you.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/booking"
                className="inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white"
              >
                Plan My Stay
              </Link>
              <a
                href={tenant.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-ink"
              >
                Book Now
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">
              Explore
            </p>
            <ul className="mt-5 space-y-3 text-white/75">
              <li>
                <Link href="/#stays" className="transition hover:text-white">
                  Villa &amp; Chalets
                </Link>
              </li>
              <li>
                <Link
                  href="/#experiences"
                  className="transition hover:text-white"
                >
                  Experiences
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="transition hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/my-booking" className="transition hover:text-white">
                  My Booking
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">
              Reservations
            </p>
            <ul className="mt-5 space-y-3 text-white/75">
              <li>{tenant.contact.address}</li>
              <li>{tenant.contact.phone}</li>
              <li>
                <a
                  href={`mailto:${tenant.contact.email}`}
                  className="transition hover:text-white"
                >
                  {tenant.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {tenant.hotelName}. All rights reserved.
          </p>
          <p>
            Powered by{" "}
            <span className="font-semibold text-white/70">
              {tenant.productName}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
