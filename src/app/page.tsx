import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import AboutSection from '@/components/AboutSection';
import ProgramsSection from '@/components/ProgramsSection';
import StatsSection from '@/components/StatsSection';
import CTAFooter from '@/components/CTAFooter';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ProgramsSection />
      <StatsSection />
      <CTAFooter />
    </>
  );
}
