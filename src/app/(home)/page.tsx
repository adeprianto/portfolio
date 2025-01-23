import AboutSection from "@/app/(home)/(sections)/AboutSection";
import ExperienceSection from "@/app/(home)/(sections)/ExperienceSection";
import HomeSection from "@/app/(home)/(sections)/HomeSection";
import AdeNavigation from "@/app/components/navigations/AdeNavigation";

export default function Home() {
  return (
    <>
      <AdeNavigation />
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
    </>
  );
}
