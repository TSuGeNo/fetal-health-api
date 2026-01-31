import Navbar from '@/components/Navbar';
import FetalHeroSection from '@/components/FetalHeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <FetalHeroSection />
      <FeaturesSection />
      <AboutSection />
      <HowItWorksSection />
      <Footer />
    </main>
  );
}
