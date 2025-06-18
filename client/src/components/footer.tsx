import { Settings, Mail } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Settings className="text-primary text-2xl" />
            <span className="text-xl font-semibold">N8N Portfolio</span>
          </div>
          
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Showcasing the power of automation through practical N8N workflow examples.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://www.linkedin.com/in/njengakariuki/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a href="mailto:contact@example.com" className="text-gray-400 hover:text-primary transition-colors">
              <Mail className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <FaGithub className="text-xl" />
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400 text-sm">
              © 2024 N8N Workflow Portfolio. Designed with attention to detail and modern web standards.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
