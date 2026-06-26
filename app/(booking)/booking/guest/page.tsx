import Link from "next/link";
import Button from "@/components/ui/Button";
import BookingProgress from "@/components/layout/BookingProgress";

export default function GuestPage() {
  return (
    <>
      <BookingProgress current={4} />

      <div className="rounded-[2rem] bg-white p-8 shadow-2xl shadow-black/10">
        <p className="text-sm uppercase tracking-[0.35em] text-primary">
          Guest Details
        </p>

        <h1 className="mt-4 text-5xl font-serif text-ink">
          Tell us who is coming.
        </h1>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <input
            className="rounded-2xl border border-line p-5 text-ink outline-none transition placeholder:text-subtle focus:border-primary focus:ring-2 focus:ring-primary/15"
            placeholder="Full name"
          />
          <input
            className="rounded-2xl border border-line p-5 text-ink outline-none transition placeholder:text-subtle focus:border-primary focus:ring-2 focus:ring-primary/15"
            placeholder="Email address"
          />
          <input
            className="rounded-2xl border border-line p-5 text-ink outline-none transition placeholder:text-subtle focus:border-primary focus:ring-2 focus:ring-primary/15"
            placeholder="Phone / WhatsApp"
          />
          <input
            className="rounded-2xl border border-line p-5 text-ink outline-none transition placeholder:text-subtle focus:border-primary focus:ring-2 focus:ring-primary/15"
            placeholder="Country"
          />
          <textarea
            className="min-h-32 rounded-2xl border border-line p-5 text-ink outline-none transition placeholder:text-subtle focus:border-primary focus:ring-2 focus:ring-primary/15 md:col-span-2"
            placeholder="Special requests"
          />
        </div>

        <div className="mt-10 flex items-center justify-between">
          <Link href="/booking/experiences" className="text-primary">
            Back
          </Link>

          <Button href="/booking/summary">Review My Stay</Button>
        </div>
      </div>
    </>
  );
}
