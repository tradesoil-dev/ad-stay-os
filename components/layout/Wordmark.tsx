import { tenant } from "@/lib/tenant";

/**
 * The Aqua Dunhinda wordmark — serif name over a letter-spaced tagline.
 * On phones the nav variant (size "md") shrinks the name and hides the tagline
 * so the mobile header stays small and tidy. The footer variant ("lg") keeps
 * the tagline since it has room.
 */
export default function Wordmark({
  size = "md",
}: {
  size?: "md" | "lg";
}) {
  const isLg = size === "lg";
  const name = isLg ? "text-xl sm:text-3xl" : "text-sm sm:text-2xl";
  const tag = isLg ? "text-[9px] sm:text-[11px]" : "text-[8px] sm:text-[10px]";
  const tagVisibility = isLg ? "block" : "hidden sm:block";

  return (
    <span className="block leading-none">
      <span
        className={`block whitespace-nowrap font-serif ${name} tracking-[0.08em] text-white sm:tracking-[0.16em]`}
      >
        {tenant.hotelWordmark}
      </span>
      <span
        className={`mt-1.5 ${tagVisibility} whitespace-nowrap ${tag} uppercase tracking-[0.2em] text-gold sm:tracking-[0.3em]`}
      >
        {tenant.tagline}
      </span>
    </span>
  );
}
