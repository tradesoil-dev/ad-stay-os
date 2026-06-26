/* eslint-disable @next/next/no-img-element */
const BASE = "https://www.aquadunhinda.com/assets/images";

const images = [
  { src: `${BASE}/gallery/3/1.jpg`, span: true },
  { src: `${BASE}/gallery/5/1.jpg`, span: false },
  { src: `${BASE}/villa/2.jpg`, span: false },
  { src: `${BASE}/chalets/aquadunhinda-chalets5.jpg`, span: false },
  { src: `${BASE}/gallery/4/1.jpg`, span: false },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-sand-light px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.35em] text-primary">
          Gallery
        </p>
        <h2 className="mt-4 text-5xl font-serif text-ink">
          A glimpse of the retreat.
        </h2>

        <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
          {images.map((image, i) => (
            <img
              key={i}
              src={image.src}
              alt="Aqua Dunhinda"
              className={`h-full w-full rounded-[1.5rem] object-cover shadow-lg shadow-black/5 ${
                image.span ? "row-span-2 md:col-span-2" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
