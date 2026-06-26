import { reasons } from "@/lib/data";

export default function WhyGuestsLove() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.35em] text-primary">
          Why Guests Love Aqua Dunhinda
        </p>

        <h2 className="mt-4 max-w-4xl text-5xl font-serif text-ink">
          A stay designed around calm, nature, and thoughtful hospitality.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="rounded-[2rem] border border-line bg-sand p-7"
            >
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold-deep">
                0{index + 1}
              </p>

              <h3 className="mt-5 text-3xl font-serif text-ink">
                {reason.title}
              </h3>

              <p className="mt-4 leading-7 text-muted">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
