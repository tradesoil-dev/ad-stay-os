/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { tenant } from "@/lib/tenant";
import { villa, chalets } from "@/lib/data";

export default function Accommodations() {
  return (
    <section id="stays" className="bg-sand px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.35em] text-primary">
          Stay With Us
        </p>
        <h2 className="mt-4 text-5xl font-serif text-ink">Villa &amp; Chalets</h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
          One private villa and four river-view chalets — choose the space that
          suits your escape, then book directly with us.
        </p>

        {/* Featured villa */}
        <div className="mt-12 grid overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-black/5 lg:grid-cols-2">
          <img
            src={villa.image}
            alt={villa.name}
            className="h-72 w-full object-cover lg:h-full"
          />
          <div className="p-8 md:p-12">
            <span className="inline-flex rounded-full bg-gold/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-ink">
              {villa.kind} · Featured
            </span>
            <h3 className="mt-5 text-4xl font-serif text-ink">{villa.name}</h3>
            <p className="mt-4 leading-8 text-muted">{villa.description}</p>

            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-subtle">
              <span>{villa.capacity}</span>
              <span>{villa.size}</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/booking"
                className="rounded-full bg-primary px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-ink"
              >
                Plan My Stay
              </Link>
              <a
                href={tenant.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-primary px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-primary transition hover:bg-primary hover:text-white"
              >
                Check Availability
              </a>
            </div>
          </div>
        </div>

        {/* Chalets */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {chalets.map((chalet) => (
            <div
              key={chalet.slug}
              className="group overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-black/5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={chalet.image}
                  alt={chalet.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-primary">
                  {chalet.kind}
                </p>
                <h3 className="mt-2 text-2xl font-serif text-ink">
                  {chalet.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {chalet.shortDescription}
                </p>
                <p className="mt-4 text-xs text-subtle">{chalet.capacity}</p>

                <Link
                  href="/booking"
                  className="mt-5 inline-flex text-sm font-semibold text-primary transition hover:text-ink"
                >
                  Plan My Stay →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
