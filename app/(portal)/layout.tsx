import Navbar from "@/components/layout/Navbar";

/** Guest portal shell. Guest-facing, so it uses the standard guest nav. */
export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-sand">
      <Navbar />
      {children}
    </main>
  );
}
