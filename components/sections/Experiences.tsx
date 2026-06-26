import Link from "next/link";
import { experiences } from "@/lib/data";

export default function Experiences() {
  return (
    <section id="experiences" className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-primary">
            More than just a stay
          </p>
          <h2 className="mt-4 text-5xl font-serif text-ink">
            Turn a booking into a beautiful guest journey.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            Guests can add experiences before arrival, helping Aqua Dunhinda
            increase direct revenue while creating more memorable stays.
          </p>

          <Link
            href="/booking/experiences"
            className="mt-8 inline-flex rounded-full bg-primary px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-ink"
          >
            Add Experiences
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {experiences.map((item) => (
            <div
              key={item.slug}
              className="rounded-[1.5rem] border border-line bg-sand p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-black/5"
            >
              <p className="text-2xl font-serif text-ink">{item.title}</p>
              <p className="mt-3 text-sm leading-6 text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
