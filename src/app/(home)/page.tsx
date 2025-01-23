import AboutSection from "@/app/(home)/(sections)/AboutSection";
import HomeSection from "@/app/(home)/(sections)/HomeSections";
import AdeNavigation from "@/app/components/navigations/AdeNavigation";

export default function Home() {
  return (
    <>
      <AdeNavigation />
      <HomeSection />
      <AboutSection />
    </>
  );
}
