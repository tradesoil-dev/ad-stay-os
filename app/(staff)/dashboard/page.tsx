import Link from "next/link";
import type { ReactNode } from "react";
import StatusBadge from "@/components/ui/StatusBadge";
import OccupancyGrid from "@/components/dashboard/OccupancyGrid";
import {
  dashboardKpis,
  todayArrivals,
  guestRequests,
  revenueSummary,
  unitStatus,
  upcomingBookings,
} from "@/lib/data";

const today = new Intl.DateTimeFormat("en-GB", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
}).format(new Date());

// Shared column template so the bookings header and rows stay perfectly aligned.
// Full literal class strings (incl. the `md:` variant) so Tailwind emits them.
const COLS = "grid-cols-[minmax(0,1.6fr)_minmax(0,1.4fr)_minmax(0,1fr)_3rem_8rem]";

const kpiIcons: Record<string, ReactNode> = {
  arrivals: (
    <>
      <path d="M12 3v9m0 0 3.5-3.5M12 12 8.5 8.5" />
      <path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
    </>
  ),
  departures: (
    <>
      <path d="M12 13V4m0 0 3.5 3.5M12 4 8.5 7.5" />
      <path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
    </>
  ),
  guests: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 6a3 3 0 0 1 0 6M20.5 19a5.5 5.5 0 0 0-3-4.9" />
    </>
  ),
  occupancy: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 12V3.5M12 12l7 3.5" />
    </>
  ),
  revenue: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v9M14.6 9.4A2.6 2 0 0 0 12 8c-1.4 0-2.5.8-2.5 2s1.1 1.7 2.5 2 2.5.8 2.5 2-1.1 2-2.5 2a2.6 2 0 0 1-2.6-1.4" />
    </>
  ),
};

const requestIcons: Record<string, ReactNode> = {
  heart: <path d="M12 20s-7-4.6-7-9.5A3.5 3.5 0 0 1 12 8a3.5 3.5 0 0 1 7 1.5C19 15.4 12 20 12 20z" />,
  car: (
    <>
      <path d="M4 13l1.6-5A2 2 0 0 1 7.5 6.5h9A2 2 0 0 1 18.4 8l1.6 5M4 13h16v4H4zM7 17v1.5M17 17v1.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
};

function Glyph({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export default function DashboardPage() {
  return (
    <section className="px-6 pb-24 pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4 sm:mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary sm:text-sm sm:tracking-[0.35em]">
              Operations
            </p>
            <h1 className="mt-2 text-3xl font-serif text-ink sm:mt-3 sm:text-5xl">
              Good morning, Aqua Dunhinda
            </h1>
            <p className="mt-2 text-sm text-muted sm:mt-3 sm:text-base">{today}</p>
          </div>

          <div className="flex overflow-hidden rounded-full border border-line bg-white text-sm">
            <span className="bg-primary px-4 py-2 text-white">Today</span>
            <span className="px-4 py-2 text-muted">Week</span>
            <span className="px-4 py-2 text-muted">Month</span>
          </div>
        </div>

        {/* KPI tiles */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
          {dashboardKpis.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-[1.25rem] border border-line bg-white p-4 shadow-sm shadow-black/5 sm:p-5"
            >
              <div className="flex items-center gap-2 text-subtle">
                <span className="text-primary">
                  <Glyph>{kpiIcons[kpi.icon]}</Glyph>
                </span>
                <span className="text-[11px] uppercase tracking-[0.12em] sm:text-xs sm:tracking-[0.14em]">
                  {kpi.label}
                </span>
              </div>
              <p className="mt-3 font-serif text-2xl text-ink sm:mt-4 sm:text-4xl">
                {kpi.value}
              </p>
              <p
                className={`mt-1.5 text-xs ${
                  kpi.icon === "occupancy" ? "text-primary" : "text-muted"
                }`}
              >
                {kpi.hint}
              </p>
            </div>
          ))}
        </div>

        {/* Occupancy */}
        <div className="mt-6 rounded-[2rem] border border-line bg-white p-7 shadow-sm shadow-black/5">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary">
                This week
              </p>
              <h2 className="mt-1 text-2xl font-serif text-ink">
                Occupancy across the property
              </h2>
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-muted">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Occupied
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Arriving
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-line" />
                Vacant
              </span>
            </div>
          </div>
          <OccupancyGrid />
        </div>

        {/* Today + requests */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-line bg-white p-7 shadow-sm shadow-black/5">
            <p className="text-xs uppercase tracking-[0.25em] text-primary">
              Today
            </p>
            <h2 className="mt-1 text-2xl font-serif text-ink">Arrivals</h2>

            <div className="mt-6 overflow-x-auto">
              <div className="min-w-[460px] space-y-4">
                {todayArrivals.map((a) => (
                  <div
                    key={a.guest}
                    className="grid grid-cols-[4rem_minmax(150px,1fr)_auto] items-center gap-4"
                  >
                    <p className="text-sm text-subtle">{a.time}</p>
                    <div>
                      <p className="whitespace-nowrap font-semibold text-ink">
                        {a.guest}
                      </p>
                      <p className="whitespace-nowrap text-sm text-muted">
                        {a.stay} · {a.guests}
                      </p>
                    </div>
                    <StatusBadge status={a.status} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-line bg-white p-7 shadow-sm shadow-black/5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-primary">
                  Guest requests
                </p>
                <h2 className="mt-1 text-2xl font-serif text-ink">
                  Needs attention
                </h2>
              </div>
              <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-white">
                {guestRequests.length}
              </span>
            </div>

            <div className="mt-6 space-y-3">
              {guestRequests.map((r) => (
                <div
                  key={r.title}
                  className="flex items-center gap-3 rounded-2xl border border-line p-4"
                >
                  <span className="text-gold-deep">
                    <Glyph>{requestIcons[r.icon]}</Glyph>
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-ink">{r.title}</p>
                    <p className="text-sm text-muted">{r.who}</p>
                  </div>
                  <StatusBadge status={r.priority} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Revenue + unit status */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-line bg-white p-7 shadow-sm shadow-black/5">
            <p className="text-xs uppercase tracking-[0.25em] text-primary">
              Revenue · June
            </p>
            <h2 className="mt-1 text-2xl font-serif text-ink">Direct vs OTA</h2>

            <div className="mt-6 flex h-3.5 overflow-hidden rounded-full border border-line">
              <div
                className="bg-primary"
                style={{ width: `${revenueSummary.directPct}%` }}
              />
              <div
                className="bg-gold"
                style={{ width: `${revenueSummary.otaPct}%` }}
              />
            </div>
            <div className="mt-3 flex justify-between text-sm text-muted">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Direct {revenueSummary.directPct}%
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                OTA {revenueSummary.otaPct}%
              </span>
            </div>

            <div className="mt-7 flex h-16 items-end gap-2">
              {revenueSummary.trend.map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-md ${
                    i === revenueSummary.trend.length - 1
                      ? "bg-primary"
                      : "bg-primary/25"
                  }`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="mt-2 flex justify-between text-[11px] text-subtle">
              {revenueSummary.months.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-line bg-white p-7 shadow-sm shadow-black/5">
            <p className="text-xs uppercase tracking-[0.25em] text-primary">
              Rooms
            </p>
            <h2 className="mt-1 text-2xl font-serif text-ink">Unit status</h2>

            <div className="mt-6 overflow-x-auto">
              <div className="min-w-[380px] space-y-3">
                {unitStatus.map((u) => (
                  <div
                    key={u.name}
                    className="flex items-center justify-between gap-6"
                  >
                    <p className="whitespace-nowrap text-ink">{u.name}</p>
                    <StatusBadge status={u.status} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming bookings */}
        <div className="mt-6 overflow-hidden rounded-[2rem] border border-line bg-white shadow-sm shadow-black/5">
          <div className="flex items-center justify-between px-7 py-5">
            <h2 className="text-2xl font-serif text-ink">Upcoming bookings</h2>
            <span className="text-xs uppercase tracking-[0.18em] text-subtle">
              {upcomingBookings.length} reservations
            </span>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[640px]">
              <div
                className={`grid ${COLS} gap-4 px-7 pb-3 text-xs uppercase tracking-[0.16em] text-subtle`}
              >
                <span>Guest</span>
                <span>Stay</span>
                <span>Dates</span>
                <span>Pax</span>
                <span>Status</span>
              </div>

              {upcomingBookings.map((b) => (
                <Link
                  key={b.id}
                  href={`/dashboard/bookings/${b.id}`}
                  className={`grid ${COLS} items-center gap-4 border-t border-line px-7 py-4 transition hover:bg-sand-light`}
                >
                  <span className="whitespace-nowrap font-semibold text-ink">
                    {b.guestName}
                  </span>
                  <span className="whitespace-nowrap text-muted">{b.stay}</span>
                  <span className="whitespace-nowrap text-muted">{b.dates}</span>
                  <span className="text-muted">{b.guests}</span>
                  <span className="justify-self-start">
                    <StatusBadge status={b.status} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
