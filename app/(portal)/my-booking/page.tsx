import Button from "@/components/ui/Button";
import StatusBadge from "@/components/ui/StatusBadge";
import { guestBooking } from "@/lib/data";

const nextSteps = [
  "Our reservations team will review your request.",
  "You’ll receive secure payment instructions by email.",
  "Once confirmed, your arrival details will appear here.",
];

export default function MyBookingPage() {
  return (
    <section className="px-6 pb-24 pt-36">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-[0.35em] text-primary">
          Guest Portal
        </p>

        <h1 className="mt-4 text-5xl font-serif text-ink">My Booking</h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          Welcome back. Everything about your upcoming stay lives here — no
          inbox-digging required.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-black/5">
            <p className="text-xs uppercase tracking-[0.25em] text-subtle">
              Booking Reference
            </p>
            <h2 className="mt-3 text-3xl font-serif text-ink">
              {guestBooking.reference}
            </h2>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-black/5">
            <p className="text-xs uppercase tracking-[0.25em] text-subtle">
              Booking Status
            </p>
            <div className="mt-4">
              <StatusBadge
                status={guestBooking.status}
                className="text-sm px-4 py-2"
              />
            </div>
            <p className="mt-4 text-sm text-muted">
              We’ll notify you the moment your stay is confirmed.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-black/5">
            <p className="text-xs uppercase tracking-[0.25em] text-subtle">
              Stay
            </p>
            <h2 className="mt-3 text-3xl font-serif text-ink">
              {guestBooking.stay}
            </h2>
            <p className="mt-4 text-muted">{guestBooking.dates}</p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-black/5">
            <p className="text-xs uppercase tracking-[0.25em] text-subtle">
              Guests
            </p>
            <h2 className="mt-3 text-3xl font-serif text-ink">
              {guestBooking.guests}
            </h2>
            <p className="mt-4 text-muted">{guestBooking.experience}</p>
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] bg-white p-8 shadow-xl shadow-black/5">
          <h2 className="text-3xl font-serif text-ink">What&apos;s Next?</h2>

          <div className="mt-8 space-y-4">
            {nextSteps.map((step, index) => (
              <div
                key={step}
                className="flex items-start gap-4 rounded-2xl border border-line p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {index + 1}
                </span>
                <p className="leading-7 text-muted">{step}</p>
              </div>
            ))}
          </div>

          <Button href="/" variant="outline" className="mt-10">
            Back to Home
          </Button>
        </div>
      </div>
    </section>
  );
}
