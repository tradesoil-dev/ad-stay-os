import StaffNav from "@/components/layout/StaffNav";

/**
 * Staff console shell — NOT guest-facing. Uses `StaffNav` (no guest funnel).
 * When auth lands, this is where staff session/role gating belongs.
 */
export default function StaffLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-sand">
      <StaffNav />
      {children}
    </main>
  );
}
