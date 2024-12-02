import HeroSection from "@/components/sections/HeroSection";
import Solution from "@/components/sections/Solution";
import AboutUs from "@/components/sections/AboutUs";
import VideoIntro from "@/components/sections/VideoIntro";
import OurProducts from "@/components/sections/OurProducts";
import OurPartners from "@/components/sections/OurPartners";
import LatestNews from "@/components/LastestNews";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <Solution />

      <AboutUs />

      <VideoIntro />

      <OurProducts />

      <OurPartners />
      <LatestNews />
    </div>
  );
}
