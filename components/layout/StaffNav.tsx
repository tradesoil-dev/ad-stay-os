import Link from "next/link";
import Wordmark from "./Wordmark";

/**
 * Navigation for the staff console. Deliberately separate from the guest
 * `Navbar`: no booking CTAs, no guest section links — staff should never be
 * routed back into the guest funnel from operations.
 */
export default function StaffNav() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-ink/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/dashboard" className="flex items-center gap-4">
          <Wordmark />
          <span className="hidden rounded-full border border-gold/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold sm:inline-flex">
            Operations
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          <Link href="/dashboard" className="transition hover:text-white">
            Dashboard
          </Link>
        </nav>

        <Link
          href="/"
          className="shrink-0 whitespace-nowrap rounded-full border border-white/30 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white hover:text-ink sm:px-5 sm:py-3 sm:text-sm"
        >
          View Guest Site
        </Link>
      </div>
    </header>
  );
}
