import type { ReactNode } from "react";

/** Gold line-icon feature strip shown under the hero. */
const items: { label: string; icon: ReactNode }[] = [
  {
    label: "Luxury Rooms",
    icon: (
      <path d="M3 18v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5M3 18v2M21 18v2M3 13h18M7 11V8a1 1 0 0 1 1-1h3v4M13 11V7h3a1 1 0 0 1 1 1v3" />
    ),
  },
  {
    label: "Fine Dining",
    icon: (
      <path d="M5 3v7a2 2 0 0 0 2 2v9M5 3v4M8 3v4M16 3c-1.5 0-2 2-2 4s.5 4 2 4v9" />
    ),
  },
  {
    label: "Wellness",
    icon: (
      <path d="M12 20s-6.5-4.4-8.5-8.3C2 8.7 3.6 5.5 6.8 5.5c1.9 0 3.2 1.1 4 2.2.8-1.1 2.1-2.2 4-2.2 3.2 0 4.8 3.2 3.3 6.2C18.5 15.6 12 20 12 20Z" />
    ),
  },
  {
    label: "Experiences",
    icon: (
      <path d="M11 3c4.5.4 7 3.4 7 7.5 0 .9-.2 1.7-.5 2.5M11 3C6.5 3.4 4 6.4 4 10.5 4 15 8 19 12 21c1.3-.6 2.6-1.5 3.7-2.5M11 3v9l4 2" />
    ),
  },
];

export default function IconStrip() {
  return (
    <section className="bg-ink-deep">
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
        {items.map((item, i) => (
          <div
            key={item.label}
            className={`flex flex-col items-center gap-3 px-6 py-10 text-center ${
              i > 0 ? "md:border-l md:border-white/10" : ""
            } ${i >= 2 ? "border-t border-white/10 md:border-t-0" : ""} ${
              i === 1 || i === 3 ? "border-l border-white/10 md:border-l" : ""
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-gold"
              aria-hidden="true"
            >
              {item.icon}
            </svg>
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-white/90">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
