import { Mail, Calendar, Rocket } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Let's Connect
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Interested in automation solutions for your business? Let's discuss how N8N workflows can streamline your operations and boost productivity.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-6">
            <FaLinkedin className="text-4xl text-primary mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">LinkedIn</h3>
            <p className="text-gray-600 mb-4">Connect for professional networking</p>
            <a 
              href="https://www.linkedin.com/in/njengakariuki/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:text-primary-dark font-medium"
            >
              Connect Now
            </a>
          </div>
          
          <div className="p-6">
            <Mail className="text-4xl text-primary mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 mb-4">Reach out for project inquiries</p>
            <a href="mailto:contact@example.com" className="text-primary hover:text-primary-dark font-medium">Send Email</a>
          </div>
          
          <div className="p-6">
            <Calendar className="text-4xl text-primary mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Schedule</h3>
            <p className="text-gray-600 mb-4">Book a consultation call</p>
            <a href="#" className="text-primary hover:text-primary-dark font-medium">Book Call</a>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Automate?</h3>
          <p className="text-gray-600 mb-6">Transform your business processes with custom N8N automation workflows.</p>
          <a 
            href="https://www.linkedin.com/in/njengakariuki/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg inline-flex items-center"
          >
            <Rocket className="mr-2 w-5 h-5" />
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
