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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link href="/dashboard" className="flex items-center gap-3">
          <Wordmark />
          <span className="hidden rounded-full border border-gold/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold sm:inline-flex">
            Operations
          </span>
        </Link>

        <Link
          href="/"
          className="shrink-0 whitespace-nowrap rounded-full border border-white/30 px-3 py-1.5 text-[11px] font-semibold text-white transition hover:bg-white hover:text-ink sm:px-5 sm:py-3 sm:text-sm"
        >
          View Guest Site
        </Link>
      </div>
    </header>
  );
}
