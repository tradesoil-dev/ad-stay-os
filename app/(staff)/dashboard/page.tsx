import Link from "next/link";
import StatusBadge from "@/components/ui/StatusBadge";
import { dashboardStats, upcomingBookings } from "@/lib/data";

const today = new Intl.DateTimeFormat("en-GB", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
}).format(new Date());

export default function DashboardPage() {
  return (
    <section className="px-6 pb-24 pt-36">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-primary">
            Hotel Dashboard
          </p>
          <h1 className="mt-4 text-5xl font-serif text-ink">
            Aqua Dunhinda Operations
          </h1>
          <p className="mt-3 text-muted">{today}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {dashboardStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[2rem] bg-white p-7 shadow-xl shadow-black/5"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-subtle">
                {stat.label}
              </p>
              <p className="mt-5 text-5xl font-serif tabular-nums text-ink">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] bg-white p-8 shadow-xl shadow-black/5">
          <div className="flex items-baseline justify-between">
            <h2 className="text-3xl font-serif text-ink">Upcoming Bookings</h2>
            <p className="text-xs uppercase tracking-[0.2em] text-subtle">
              {upcomingBookings.length} reservations
            </p>
          </div>

          <div className="mt-8 hidden grid-cols-[1.4fr_1.2fr_1fr_auto] gap-4 px-5 text-xs uppercase tracking-[0.2em] text-subtle md:grid">
            <p>Guest</p>
            <p>Stay</p>
            <p>Dates</p>
            <p>Status</p>
          </div>

          <div className="mt-3 space-y-3">
            {upcomingBookings.map((booking) => (
              <Link
                key={booking.id}
                href={`/dashboard/bookings/${booking.id}`}
                className="grid items-center gap-4 rounded-2xl border border-line p-5 transition hover:border-primary hover:shadow-lg hover:shadow-black/5 md:grid-cols-[1.4fr_1.2fr_1fr_auto]"
              >
                <p className="text-lg font-semibold text-ink">
                  {booking.guestName}
                </p>
                <p className="text-muted">{booking.stay}</p>
                <p className="text-muted">{booking.dates}</p>
                <StatusBadge status={booking.status} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
