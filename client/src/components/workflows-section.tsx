import { workflows } from '../../../data/workflows.js';
import WorkflowCard from './workflow-card';

export default function WorkflowsSection() {
  return (
    <section id="workflows" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Automation Workflows
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how these N8N workflows streamline operations and boost productivity across different business functions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {workflows.map((workflow) => (
            <WorkflowCard key={workflow.id} workflow={workflow} />
          ))}
        </div>
      </div>
    </section>
  );
}
