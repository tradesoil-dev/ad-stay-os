import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/** Public marketing shell: guest navigation, page content, then footer. */
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
