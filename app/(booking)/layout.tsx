import Navbar from "@/components/layout/Navbar";

/** Booking journey shell: sand canvas + guest nav, centred content column. */
export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-sand">
      <Navbar />
      <section className="px-6 pb-20 pt-36">
        <div className="mx-auto max-w-5xl">{children}</div>
      </section>
    </main>
  );
}
