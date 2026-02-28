import { AboutMeSection } from "./AboutMeSection";
import { ContactInfoSection } from "./ContactInfoSection";
import { HeroIntroSection } from "./HeroIntroSection";
import { NavigationBarSection } from "./NavigationBarSection";
import { ProjectGallerySection } from "./ProjectGallerySection";

export const Desktop = () => {
  return (
    <div className="relative flex flex-col items-start overflow-hidden bg-[#f1efe8]">
      <img
        className="pointer-events-none absolute top-0 left-1/2 h-[2708px] w-[1920px] -translate-x-1/2"
        alt="Background"
        src="/background.svg"
      />

      <NavigationBarSection />
      <HeroIntroSection />
      <AboutMeSection />
      <ProjectGallerySection />
      <ContactInfoSection />
    </div>
  );
};
