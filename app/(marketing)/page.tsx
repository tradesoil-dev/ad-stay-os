import Hero from "@/components/sections/Hero";
import IconStrip from "@/components/sections/IconStrip";
import Story from "@/components/sections/Story";
import Accommodations from "@/components/sections/Accommodations";
import Experiences from "@/components/sections/Experiences";
import Gallery from "@/components/sections/Gallery";
import WhyGuestsLove from "@/components/sections/WhyGuestsLove";
import BookingWidget from "@/components/sections/BookingWidget";

export default function Home() {
  return (
    <main>
      <Hero />
      <IconStrip />
      <Story />
      <Accommodations />
      <Experiences />
      <Gallery />
      <WhyGuestsLove />
      <BookingWidget />
    </main>
  );
}
