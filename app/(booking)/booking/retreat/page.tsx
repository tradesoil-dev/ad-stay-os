import Link from "next/link";
import Button from "@/components/ui/Button";
import BookingProgress from "@/components/layout/BookingProgress";
import { accommodations } from "@/lib/data";

export default function RetreatPage() {
  return (
    <>
      <BookingProgress current={2} />

      <div className="rounded-[2rem] bg-white p-8 shadow-2xl shadow-black/10">
        <p className="text-sm uppercase tracking-[0.35em] text-primary">
          Choose Your Stay
        </p>

        <h1 className="mt-4 text-5xl font-serif text-ink">
          Where would you like to stay?
        </h1>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
          One private villa and four river-view chalets, each with its own view
          of the forest and river.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {accommodations.map((stay) => (
            <div
              key={stay.slug}
              className="rounded-[2rem] border border-line p-6 transition hover:-translate-y-0.5 hover:border-primary hover:shadow-lg hover:shadow-black/5"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-[0.2em] text-primary">
                  {stay.kind}
                </span>
                {stay.recommended && (
                  <span className="inline-flex rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-ink">
                    Recommended
                  </span>
                )}
              </div>

              <h2 className="mt-3 text-2xl font-serif text-ink">{stay.name}</h2>

              <p className="mt-3 leading-7 text-muted">{stay.shortDescription}</p>

              <p className="mt-4 text-xs text-subtle">{stay.capacity}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between">
          <Link href="/booking" className="text-primary">
            Back
          </Link>

          <Button href="/booking/experiences">Continue My Journey</Button>
        </div>
      </div>
    </>
  );
}
