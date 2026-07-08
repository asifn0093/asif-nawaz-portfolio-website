import Hero from "../components/Hero";
import FeaturedProjects from "../components/FeaturedProjects";
import StatsBar from "../components/StatsBar";
import HomeCTA from "../components/HomeCTA";
import HomeAbout from "../components/HomeAbout";
import HomeContact from "../components/HomeContact";
import HomeFAQs from "../components/HomeFAQs";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeAbout />
      <FeaturedProjects />
      <StatsBar />
      <HomeContact />
      <HomeFAQs />
      <HomeCTA />
    </>
  );
}
