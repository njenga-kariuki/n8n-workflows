import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface Workflow {
  id: number;
  title: string;
  problem: string;
  integrations: string[];
  screenshot: string;
  impact: string;
  n8nLink: string;
}

interface WorkflowCardProps {
  workflow: Workflow;
}

export default function WorkflowCard({ workflow }: WorkflowCardProps) {
  const [showModal, setShowModal] = useState(false);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  return (
    <>
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        <div 
          className="aspect-video bg-gray-50 cursor-pointer relative group"
          onClick={() => setShowModal(true)}
        >
          <img 
            src={workflow.screenshot} 
            alt={workflow.title}
            className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-20">
            <span className="text-white text-sm font-medium">Click to view full size</span>
          </div>
        </div>
        
        <div className="p-6">
          <a 
            href={workflow.n8nLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-blue-600 transition-colors"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3 hover:text-blue-600">
              {workflow.title}
            </h3>
          </a>
          
          <p className="text-gray-600 text-sm mb-4">
            {workflow.problem}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {workflow.integrations.map((integration, index) => (
              <span 
                key={index}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
              >
                {integration}
              </span>
            ))}
          </div>
          
          <div className="text-sm text-gray-700">
            {workflow.impact}
          </div>
        </div>
      </div>

      {/* Modal for full-size image */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setShowModal(false)}
        >
          <div className="relative max-w-6xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            <img
              src={workflow.screenshot}
              alt={workflow.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
