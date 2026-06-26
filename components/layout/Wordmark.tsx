import { tenant } from "@/lib/tenant";

/**
 * The Aqua Dunhinda wordmark — serif name over a letter-spaced tagline,
 * recreating the hotel's logo in type. Used in the navbar, staff nav, and
 * footer so the brand is identical everywhere. Sized down on small screens
 * (and kept on a single line) so the mobile header stays compact.
 */
export default function Wordmark({
  size = "md",
}: {
  size?: "md" | "lg";
}) {
  const name =
    size === "lg" ? "text-2xl sm:text-3xl" : "text-lg sm:text-2xl";
  const tag =
    size === "lg" ? "text-[9px] sm:text-[11px]" : "text-[8px] sm:text-[10px]";

  return (
    <span className="block leading-none">
      <span
        className={`block whitespace-nowrap font-serif ${name} tracking-[0.12em] text-white sm:tracking-[0.16em]`}
      >
        {tenant.hotelWordmark}
      </span>
      <span
        className={`mt-1.5 block whitespace-nowrap ${tag} uppercase tracking-[0.2em] text-gold sm:tracking-[0.3em]`}
      >
        {tenant.tagline}
      </span>
    </span>
  );
}
