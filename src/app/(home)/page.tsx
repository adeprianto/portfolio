import HomeSection from "@/app/(home)/(sections)/HomeSections";
import AdeNavigation from "@/app/components/navigations/AdeNavigation";

export default function Home() {
  return (
    <>
      <AdeNavigation />
      <HomeSection />
      <div className="h-[10000px]"></div>
    </>
  );
}
