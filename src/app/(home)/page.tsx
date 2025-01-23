import ExperienceSection from "@src/app/(home)/(sections)/(experience)/ExperienceSection";
import AboutSection from "@src/app/(home)/(sections)/AboutSection";
import HomeSection from "@src/app/(home)/(sections)/HomeSection";
import AdeNavigation from "@src/app/components/navigations/AdeNavigation";

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
