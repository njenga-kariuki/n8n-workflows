import { Bot, Eye } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

export default function HeroSection() {
  const scrollToWorkflows = () => {
    const element = document.getElementById('workflows');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-24 pb-16 gradient-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-gray-200">
            <Bot className="text-primary w-4 h-4" />
            <span className="text-sm font-medium text-gray-700">Automation Expert</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            J's N8N Workflow
            <span className="block text-primary">Examples</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Examples of N8N workflows to showcase automation toolkit
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToWorkflows}
              className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg inline-flex items-center"
            >
              <Eye className="mr-2 w-5 h-5" />
              View Workflows
            </button>
            <a 
              href="https://www.linkedin.com/in/njengakariuki/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-primary hover:text-primary transition-all inline-flex items-center"
            >
              <FaLinkedin className="mr-2" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
        
        {/* Hero Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center animate-slide-up">
            <div className="text-3xl font-bold text-primary mb-2">85%</div>
            <div className="text-gray-600">Time Reduction</div>
          </div>
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-gray-600">Integrations</div>
          </div>
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl font-bold text-primary mb-2">300%</div>
            <div className="text-gray-600">Efficiency Boost</div>
          </div>
        </div>
      </div>
    </section>
  );
}
