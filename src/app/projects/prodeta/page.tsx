import React from 'react';

interface Project {
  id: string;
  name: string;
  assignedUsers: string[];
}

const ProjectDetails: React.FC = () => {
  const project: Project = {
    id: '1',
    name: 'Example Project',
    assignedUsers: ['User A', 'User B'],
  };

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Project Details</h2>
      <p className="mb-2">
        <span className="font-semibold">Project Name:</span> {project.name}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Description:</span> This is a sample project description.
      </p>
      <p>
        <span className="font-semibold">Assigned Users:</span> {project.assignedUsers.join(', ')}
      </p>
    </div>
  );
};

export default ProjectDetails;
