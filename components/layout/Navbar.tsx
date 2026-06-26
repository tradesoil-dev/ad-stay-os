import Link from "next/link";
import Wordmark from "./Wordmark";
import { tenant } from "@/lib/tenant";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-ink/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label={tenant.hotelName}>
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-white/80 lg:flex">
          <Link href="/#stays" className="transition hover:text-white">
            Stays
          </Link>
          <Link href="/#experiences" className="transition hover:text-white">
            Experiences
          </Link>
          <Link href="/#gallery" className="transition hover:text-white">
            Gallery
          </Link>
          <Link href="/booking" className="transition hover:text-white">
            Plan Your Stay
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href={tenant.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden whitespace-nowrap rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-ink sm:inline-flex"
          >
            Book Now
          </a>
          <Link
            href="/booking"
            className="whitespace-nowrap rounded-full bg-gold px-4 py-2 text-xs font-semibold text-ink transition hover:bg-white sm:px-5 sm:py-3 sm:text-sm"
          >
            Plan My Stay
          </Link>
        </div>
      </div>
    </header>
  );
}
