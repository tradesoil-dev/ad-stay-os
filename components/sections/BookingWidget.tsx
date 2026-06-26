import Link from "next/link";
import { tenant } from "@/lib/tenant";

export default function BookingWidget() {
  return (
    <section id="booking" className="bg-sand px-6 py-20">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-white p-8 shadow-2xl shadow-black/10">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.35em] text-primary">
            Plan Your Stay
          </p>
          <h2 className="mt-3 text-4xl font-serif text-ink">
            Find your perfect escape.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-line p-5">
            <p className="text-xs uppercase tracking-[0.25em] text-subtle">
              Check-in
            </p>
            <p className="mt-3 text-xl font-semibold text-ink">25 Jun 2026</p>
          </div>

          <div className="rounded-2xl border border-line p-5">
            <p className="text-xs uppercase tracking-[0.25em] text-subtle">
              Check-out
            </p>
            <p className="mt-3 text-xl font-semibold text-ink">27 Jun 2026</p>
          </div>

          <div className="rounded-2xl border border-line p-5">
            <p className="text-xs uppercase tracking-[0.25em] text-subtle">
              Guests
            </p>
            <p className="mt-3 text-xl font-semibold text-ink">2 Adults</p>
          </div>

          <a
            href={tenant.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-2xl bg-primary px-6 py-5 text-center text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-ink"
          >
            Check Availability
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-sm text-muted">
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <p>✓ Best direct rate</p>
            <p>✓ Add experiences before arrival</p>
            <p>✓ Personal concierge support</p>
          </div>

          <Link
            href="/booking"
            className="font-semibold text-primary transition hover:text-ink"
          >
            Or plan your stay with us →
          </Link>
        </div>
      </div>
    </section>
  );
}
