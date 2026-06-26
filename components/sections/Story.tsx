/* eslint-disable @next/next/no-img-element */
const STORY_IMAGE = "https://www.aquadunhinda.com/assets/images/gallery/2/1.jpg";

const pills = [
  "Family-run",
  "River views",
  "Wellness retreat",
  "Nature experiences",
];

export default function Story() {
  return (
    <section id="story" className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-primary">
            Welcome to Aqua Dunhinda
          </p>
          <h2 className="mt-4 text-5xl font-serif text-ink">
            A private retreat overlooking river, forest and tea country.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            Set on 30 acres of tea garden and forest in the Kandy hills, Aqua
            Dunhinda is a family-run escape built for slow mornings, fresh air
            and time together — with everything from arrival to experiences cared
            for personally.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {pills.map((pill) => (
              <span
                key={pill}
                className="rounded-full bg-sand px-4 py-2 text-sm font-semibold text-primary"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        <img
          src={STORY_IMAGE}
          alt="Aqua Dunhinda nature retreat"
          className="h-[28rem] w-full rounded-[2rem] object-cover shadow-xl shadow-black/10"
        />
      </div>
    </section>
  );
}
