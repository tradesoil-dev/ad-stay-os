/**
 * Label / value card used on the summary, booking detail, and similar read-only
 * surfaces. The repeated `rounded-2xl border border-line` pattern lives here.
 */
export default function InfoCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-line p-5">
      <p className="text-xs uppercase tracking-[0.25em] text-subtle">{label}</p>
      <p className="mt-3 text-xl font-semibold text-ink">{value}</p>
    </div>
  );
}
