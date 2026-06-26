import Button from "@/components/ui/Button";
import BookingProgress from "@/components/layout/BookingProgress";

export default function BookingPage() {
  return (
    <>
      <BookingProgress current={1} />

      <div className="rounded-[2rem] bg-white p-8 shadow-2xl shadow-black/10">
        <p className="text-sm uppercase tracking-[0.35em] text-primary">
          Stay Planner
        </p>

        <h1 className="mt-4 text-5xl font-serif text-ink">
          When would you like to escape?
        </h1>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
          Choose your dates and guests. AD Stay OS will guide you toward the
          most suitable stay and experiences.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-line p-5 transition focus-within:border-primary">
            <label className="text-xs uppercase tracking-[0.25em] text-subtle">
              Check-in
            </label>
            <input
              type="date"
              className="mt-3 w-full bg-transparent text-lg font-semibold text-ink outline-none"
            />
          </div>

          <div className="rounded-2xl border border-line p-5 transition focus-within:border-primary">
            <label className="text-xs uppercase tracking-[0.25em] text-subtle">
              Check-out
            </label>
            <input
              type="date"
              className="mt-3 w-full bg-transparent text-lg font-semibold text-ink outline-none"
            />
          </div>

          <div className="rounded-2xl border border-line p-5 transition focus-within:border-primary">
            <label className="text-xs uppercase tracking-[0.25em] text-subtle">
              Guests
            </label>
            <select className="mt-3 w-full bg-transparent text-lg font-semibold text-ink outline-none">
              <option>2 Adults</option>
              <option>2 Adults, 1 Child</option>
              <option>Family of 4</option>
              <option>Group Stay</option>
            </select>
          </div>
        </div>

        <div className="mt-10 flex justify-end">
          <Button href="/booking/retreat">Continue My Journey</Button>
        </div>
      </div>
    </>
  );
}
