import React from 'react';

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
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video bg-gray-50">
        <img 
          src={workflow.screenshot} 
          alt={workflow.title}
          className="w-full h-full object-cover"
        />
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
  );
}
