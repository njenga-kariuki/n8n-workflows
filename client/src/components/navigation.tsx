import { useState, useEffect } from 'react';
import { Settings, Menu, X } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200' : 'bg-white/80 backdrop-blur-md border-b border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Settings className="text-primary text-xl" />
            <span className="font-semibold text-lg text-gray-900">N8N Portfolio</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-600 hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollToSection('workflows')} className="text-gray-600 hover:text-primary transition-colors">Workflows</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-primary transition-colors">Contact</button>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.linkedin.com/in/njengakariuki/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors inline-flex items-center"
            >
              <FaLinkedin className="mr-2" />
              Connect
            </a>
            
            <button 
              className="md:hidden text-gray-600 hover:text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('hero')} className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors w-full text-left">Home</button>
              <button onClick={() => scrollToSection('workflows')} className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors w-full text-left">Workflows</button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors w-full text-left">About</button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors w-full text-left">Contact</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
