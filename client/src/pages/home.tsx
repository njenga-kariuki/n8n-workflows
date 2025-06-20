import HeroSection from '../components/hero-section';
import WorkflowsSection from '../components/workflows-section';
import AboutSection from '../components/about-section';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WorkflowsSection />
      <AboutSection />
    </div>
  );
}
