import ExperienceSection from "@src/app/(home)/(sections)/(experience)/ExperienceSection";
import ProjectSection from "@src/app/(home)/(sections)/(projects)/ProjectSection";
import AboutSection from "@src/app/(home)/(sections)/AboutSection";
import ContactSection from "@src/app/(home)/(sections)/ContactSection";
import HomeSection from "@src/app/(home)/(sections)/HomeSection";
import AdeFooter from "@src/app/components/footer/AdeFooter";
import AdeNavigation from "@src/app/components/navigations/AdeNavigation";

export default function Home() {
  return (
    <>
      <AdeNavigation />
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
      <AdeFooter />
    </>
  );
}
