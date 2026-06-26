/**
 * A small status pill used across staff and guest surfaces. Maps a free-text
 * status (e.g. "Confirmed", "Deposit Pending", "Cleaning", "Arriving 4:00 PM")
 * onto a tasteful, on-brand colour treatment with a leading dot.
 */
type Tone = "confirmed" | "pending" | "service" | "cancelled" | "neutral";

const tones: Record<Tone, { wrap: string; dot: string }> = {
  confirmed: { wrap: "bg-primary/10 text-primary", dot: "bg-primary" },
  pending: { wrap: "bg-gold/20 text-ink", dot: "bg-gold-deep" },
  service: { wrap: "bg-[#faeeda] text-[#8a5a12]", dot: "bg-[#ba7517]" },
  cancelled: { wrap: "bg-line text-subtle", dot: "bg-subtle" },
  neutral: { wrap: "bg-sand text-muted", dot: "bg-subtle" },
};

function toneFor(status: string): Tone {
  const s = status.toLowerCase();
  if (s.includes("cancel")) return "cancelled";
  if (s.includes("clean")) return "service";
  if (s.includes("vacant")) return "neutral";
  if (s.includes("occupied") || s.includes("in-house")) return "confirmed";
  if (
    s.includes("pending") ||
    s.includes("awaiting") ||
    s.includes("deposit") ||
    s.includes("arriv")
  )
    return "pending";
  if (s.includes("confirm")) return "confirmed";
  return "neutral";
}

export default function StatusBadge({
  status,
  className = "",
}: {
  status: string;
  className?: string;
}) {
  const tone = tones[toneFor(status)];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] ${tone.wrap} ${className}`.trim()}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${tone.dot}`} />
      {status}
    </span>
  );
}
