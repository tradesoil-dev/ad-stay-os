const steps = ["Dates", "Stay", "Experiences", "Guest", "Summary"];

export default function BookingProgress({ current }: { current: number }) {
  return (
    <div className="mb-10 rounded-full bg-white p-3 shadow-lg shadow-black/5">
      <div className="grid grid-cols-5 gap-2">
        {steps.map((step, index) => {
          const active = index + 1 <= current;

          return (
            <div
              key={step}
              className={`rounded-full px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] ${
                active ? "bg-primary text-white" : "bg-sand text-subtle"
              }`}
            >
              {step}
            </div>
          );
        })}
      </div>
    </div>
  );
}
