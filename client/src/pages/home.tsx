import Navigation from '../components/navigation';
import HeroSection from '../components/hero-section';
import WorkflowsSection from '../components/workflows-section';
import AboutSection from '../components/about-section';
import ContactSection from '../components/contact-section';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WorkflowsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
