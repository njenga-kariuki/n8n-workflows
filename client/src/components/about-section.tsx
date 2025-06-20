import { FaLinkedin } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <a 
          href="https://www.linkedin.com/in/njengakariuki/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          <FaLinkedin className="mr-2" />
          Njenga's LinkedIn
        </a>
      </div>
    </section>
  );
}
