import Link from "next/link";
import Button from "@/components/ui/Button";
import InfoCard from "@/components/ui/InfoCard";
import BookingProgress from "@/components/layout/BookingProgress";
import { bookingSummaryRows } from "@/lib/data";

export default function SummaryPage() {
  return (
    <>
      <BookingProgress current={5} />

      <div className="rounded-[2rem] bg-white p-8 shadow-2xl shadow-black/10">
        <p className="text-sm uppercase tracking-[0.35em] text-primary">
          Booking Summary
        </p>

        <h1 className="mt-4 text-5xl font-serif text-ink">
          Review your escape.
        </h1>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {bookingSummaryRows.map(([label, value]) => (
            <InfoCard key={label} label={label} value={value} />
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between">
          <Link href="/booking/guest" className="text-primary">
            Back
          </Link>

          <Button href="/booking/confirmation">Reserve My Escape</Button>
        </div>
      </div>
    </>
  );
}
