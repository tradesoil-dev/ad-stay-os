import { tenant } from "@/lib/tenant";

/**
 * The Aqua Dunhinda wordmark — serif name over a letter-spaced tagline,
 * recreating the hotel's logo in type. Used in the navbar, staff nav, and
 * footer so the brand is identical everywhere.
 */
export default function Wordmark({
  size = "md",
}: {
  size?: "md" | "lg";
}) {
  const name = size === "lg" ? "text-3xl" : "text-2xl";
  const tag = size === "lg" ? "text-[11px]" : "text-[10px]";

  return (
    <span className="block leading-none">
      <span className={`block font-serif ${name} tracking-[0.16em] text-white`}>
        {tenant.hotelWordmark}
      </span>
      <span
        className={`mt-1.5 block ${tag} uppercase tracking-[0.3em] text-gold`}
      >
        {tenant.tagline}
      </span>
    </span>
  );
}
