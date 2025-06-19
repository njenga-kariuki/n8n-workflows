import { workflows } from '../../../data/workflows.ts';
import WorkflowCard from './workflow-card';

export default function WorkflowsSection() {
  return (
    <section id="workflows" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {workflows.map((workflow) => (
            <WorkflowCard key={workflow.id} workflow={workflow} />
          ))}
        </div>
      </div>
    </section>
  );
}
