import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import InfoCard from "@/components/ui/InfoCard";
import StatusBadge from "@/components/ui/StatusBadge";
import { getBookingDetail } from "@/lib/data";

export default async function BookingDetailPage({
  params,
}: {
  params: Promise<{ bookingId: string }>;
}) {
  const { bookingId } = await params;
  const booking = getBookingDetail(bookingId);

  if (!booking) {
    notFound();
  }

  const rows: [string, string][] = [
    ["Booking Reference", booking.reference],
    ["Stay", booking.stay],
    ["Dates", booking.dates],
    ["Guests", booking.guests],
    ["Experience", booking.experience],
  ];

  return (
    <section className="px-6 pb-24 pt-36">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/dashboard"
          className="text-sm font-semibold text-primary transition hover:text-ink"
        >
          ← Back to Dashboard
        </Link>

        <div className="mt-8 rounded-[2rem] bg-white p-10 shadow-2xl shadow-black/10">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-primary">
                Booking Request
              </p>
              <h1 className="mt-4 text-5xl font-serif text-ink">
                {booking.guestName}
              </h1>
            </div>
            <StatusBadge status={booking.paymentStatus} />
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {rows.map(([label, value]) => (
              <InfoCard key={label} label={label} value={value} />
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-line bg-sand-light p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-subtle">
              Special Request
            </p>
            <p className="mt-3 leading-7 text-muted">{booking.specialRequest}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="md">Confirm Booking</Button>
            <Button size="md" variant="outline">
              Mark Deposit Paid
            </Button>
            <Button size="md" variant="neutral">
              Add Internal Note
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
