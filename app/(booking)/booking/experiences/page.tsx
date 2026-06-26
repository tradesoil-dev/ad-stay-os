import Link from "next/link";
import Button from "@/components/ui/Button";
import BookingProgress from "@/components/layout/BookingProgress";
import { experiences } from "@/lib/data";

export default function ExperiencesPage() {
  return (
    <>
      <BookingProgress current={3} />

      <div className="rounded-[2rem] bg-white p-8 shadow-2xl shadow-black/10">
        <p className="text-sm uppercase tracking-[0.35em] text-primary">
          Enhance Your Journey
        </p>

        <h1 className="mt-4 text-5xl font-serif text-ink">
          Would you like to make your stay even more memorable?
        </h1>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {experiences.map((item) => (
            <div
              key={item.slug}
              className="rounded-[2rem] border border-line p-6 transition hover:-translate-y-0.5 hover:border-primary hover:shadow-lg hover:shadow-black/5"
            >
              <h2 className="text-3xl font-serif text-ink">{item.title}</h2>
              <p className="mt-4 leading-7 text-muted">{item.description}</p>
              <p className="mt-5 font-semibold text-ink">{item.price}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between">
          <Link href="/booking/retreat" className="text-primary">
            Back
          </Link>

          <Button href="/booking/guest">Continue My Journey</Button>
        </div>
      </div>
    </>
  );
}
