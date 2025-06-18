import { Settings, BarChart3, Mail } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 gradient-overlay">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About the Portfolio
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            This portfolio showcases practical N8N automation workflows designed to solve real business challenges. Each workflow demonstrates how automation can significantly reduce manual effort, improve consistency, and drive measurable results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
            <Settings className="text-3xl text-primary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Expertise</h3>
            <p className="text-gray-600">Specialized in building complex N8N workflows with multiple integrations and advanced logic flows.</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
            <BarChart3 className="text-3xl text-primary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Results</h3>
            <p className="text-gray-600">Delivered measurable improvements in efficiency, cost reduction, and process optimization.</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://www.linkedin.com/in/njengakariuki/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
          >
            <FaLinkedin className="mr-2" />
            View LinkedIn Profile
          </a>
          <a 
            href="mailto:contact@example.com" 
            className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-primary hover:text-primary transition-all inline-flex items-center justify-center"
          >
            <Mail className="mr-2 w-5 h-5" />
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
