import React from 'react';

type User = {
  id: number;
  name: string;
};

type Task = {
  id: number;
  name: string;
  description: string;
};

type Project = {
  id: number;
  name: string;
  description: string;
  assignedUsers: User[];
  tasks: Task[];
};

const projects: Project[] = [
  {
    id: 1,
    name: 'AI Cryptographic Identifier',
    description: 'A project focused on using AI/ML techniques to identify cryptographic algorithms from datasets.',
    assignedUsers: [
      { id: 101, name: 'Alice' },
      { id: 102, name: 'Bob' },
    ],
    tasks: [
      { id: 201, name: 'Dataset Collection', description: 'Gather cryptographic datasets.' },
      { id: 202, name: 'Model Training', description: 'Train the model on the datasets.' },
    ],
  },
  {
    id: 2,
    name: 'Educational Resource Hub',
    description: 'An application to streamline access to resources, notes, and exam papers for students.',
    assignedUsers: [
      { id: 103, name: 'Charlie' },
      { id: 104, name: 'Diana' },
    ],
    tasks: [
      { id: 203, name: 'Frontend Design', description: 'Create the UI for the application.' },
      { id: 204, name: 'Backend Development', description: 'Implement APIs for resource management.' },
    ],
  },
];

const UserTablePage: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen text-black">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">User and Project Overview</h1>
      <table className="table-auto w-full bg-white shadow-md rounded-lg border border-gray-200 mb-8">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-4 py-2">User ID</th>
            <th className="px-4 py-2">User Name</th>
            <th className="px-4 py-2">Project ID</th>
            <th className="px-4 py-2">Project Name</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) =>
            project.assignedUsers.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{project.id}</td>
                <td className="px-4 py-2">{project.name}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">Task List</h2>
      <table className="table-auto w-full bg-white shadow-md rounded-lg border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-4 py-2">Task ID</th>
            <th className="px-4 py-2">Task Name</th>
            <th className="px-4 py-2">Task Description</th>
            <th className="px-4 py-2">Project ID</th>
            <th className="px-4 py-2">Assigned User</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) =>
            project.tasks.map((task, index) => (
              <tr key={task.id} className="border-t">
                <td className="px-4 py-2">{task.id}</td>
                <td className="px-4 py-2">{task.name}</td>
                <td className="px-4 py-2">{task.description}</td>
                <td className="px-4 py-2">{project.id}</td>
                <td className="px-4 py-2">{project.assignedUsers[index % project.assignedUsers.length]?.name}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTablePage;
