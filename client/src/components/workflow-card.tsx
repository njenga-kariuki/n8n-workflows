import { TrendingUp } from 'lucide-react';
import { FaUserPlus, FaShareAlt, FaFilter } from 'react-icons/fa';

interface Workflow {
  id: number;
  title: string;
  category: string;
  description: string;
  problem: string;
  integrations: string[];
  image: string;
  impact: string;
}

interface WorkflowCardProps {
  workflow: Workflow;
}

const categoryColors = {
  CRM: 'bg-blue-100 text-blue-800',
  Marketing: 'bg-purple-100 text-purple-800',
  Sales: 'bg-green-100 text-green-800',
};

const categoryIcons = {
  CRM: FaUserPlus,
  Marketing: FaShareAlt,
  Sales: FaFilter,
};

const categoryGradients = {
  CRM: 'bg-gradient-to-br from-blue-50 to-indigo-100',
  Marketing: 'bg-gradient-to-br from-purple-50 to-pink-100',
  Sales: 'bg-gradient-to-br from-green-50 to-emerald-100',
};

export default function WorkflowCard({ workflow }: WorkflowCardProps) {
  const IconComponent = categoryIcons[workflow.category as keyof typeof categoryIcons];
  const gradientClass = categoryGradients[workflow.category as keyof typeof categoryGradients];
  const categoryColorClass = categoryColors[workflow.category as keyof typeof categoryColors];

  return (
    <div className="workflow-card bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="relative overflow-hidden">
        {/* Placeholder image with workflow visualization */}
        <div className={`${gradientClass} h-48 flex items-center justify-center relative`}>
          <div className="text-center p-6">
            <IconComponent className="text-4xl text-primary mb-3 mx-auto" />
            <h3 className="font-semibold text-gray-800">{workflow.title.split(' ')[0]} {workflow.title.split(' ')[1]}</h3>
            <p className="text-sm text-gray-600">N8N Workflow</p>
          </div>
          <div className="absolute top-3 right-3">
            <span className={`${categoryColorClass} text-xs font-medium px-2.5 py-1 rounded-full`}>
              {workflow.category}
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">{workflow.title}</h3>
        </div>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {workflow.description}
        </p>
        
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Problem Solved:</h4>
          <p className="text-sm text-gray-600 bg-red-50 p-3 rounded-lg border-l-4 border-red-200">
            {workflow.problem}
          </p>
        </div>
        
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Integrations:</h4>
          <div className="flex flex-wrap gap-2">
            {workflow.integrations.map((integration, index) => (
              <span 
                key={index}
                className="integration-badge bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-all cursor-pointer"
              >
                {integration}
              </span>
            ))}
          </div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <div className="flex items-center">
            <TrendingUp className="text-green-600 mr-2 w-4 h-4" />
            <span className="text-sm font-semibold text-green-800">Impact:</span>
          </div>
          <p className="text-sm text-green-700 mt-1">{workflow.impact}</p>
        </div>
      </div>
    </div>
  );
}
