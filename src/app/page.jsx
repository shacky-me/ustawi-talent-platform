import Hero from "@/components/Hero";
import ShowcaseMarquee from "@/components/ShowcaseMarquee";
import StatsStrip from "@/components/StatsStrip";
import CuratedCollections from "@/components/CuratedCollections";
import FeaturedArtists from "@/components/FeaturedArtists";
import CallToAction from "@/components/CallToAction";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <ShowcaseMarquee />
      <StatsStrip />
      <CuratedCollections />
      <FeaturedArtists />
      <CallToAction />
    </main>
  );
};
export default HomePage;
