import Link from "next/link";
import { tenant } from "@/lib/tenant";

const HERO_IMAGE = "https://www.aquadunhinda.com/assets/images/slider/1.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#06130df2_0%,#06130dab_45%,#06130d33_100%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28">
        <div className="max-w-3xl">
          <p className="mb-3 font-serif text-3xl italic text-gold">
            Where nature restores you
          </p>

          <h1 className="text-6xl font-serif leading-[1.02] md:text-8xl">
            Luxury Living
            <br />
            in Nature
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">
            Against the breathtaking backdrop of Kotmale Forest and the Mahaweli
            River, experience tranquility, wellness and family-run hospitality at
            Aqua Dunhinda.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/booking"
              className="rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-ink transition hover:bg-white"
            >
              Plan My Stay
            </Link>

            <a
              href={tenant.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/40 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-ink"
            >
              Book Now
            </a>

            <a
              href="#stays"
              className="rounded-full border border-white/40 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-ink"
            >
              Explore Stays
            </a>
          </div>

          <div className="mt-14 grid max-w-3xl gap-4 text-sm text-white/75 md:grid-cols-3">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-2xl font-serif text-white">Direct</p>
              <p className="mt-2">Book with the hotel, not an OTA.</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-2xl font-serif text-white">Personal</p>
              <p className="mt-2">A stay shaped around you.</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-2xl font-serif text-white">Premium</p>
              <p className="mt-2">Boutique, family-run hospitality.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
