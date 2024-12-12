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
    <div className="container mx-auto p-6 bg-gradient-to-r from-teal-100 to-indigo-200 min-h-screen text-black">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12 drop-shadow-lg">User and Project Overview</h1>

      {/* User Table */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Assigned Users in Projects</h2>
        <table className="table-auto w-full bg-white shadow-lg rounded-lg border border-gray-300 overflow-hidden">
          <thead className="bg-gradient-to-r from-indigo-500 to-teal-500 text-white">
            <tr>
              <th className="px-6 py-3 text-sm font-medium">User ID</th>
              <th className="px-6 py-3 text-sm font-medium">User Name</th>
              <th className="px-6 py-3 text-sm font-medium">Project ID</th>
              <th className="px-6 py-3 text-sm font-medium">Project Name</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) =>
              project.assignedUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-t hover:bg-indigo-100 transition-colors duration-300 cursor-pointer"
                >
                  <td className="px-6 py-4 text-sm text-gray-800">{user.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{user.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{project.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{project.name}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Task Table */}
      <div>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Task List Overview</h2>
        <table className="table-auto w-full bg-white shadow-lg rounded-lg border border-gray-300 overflow-hidden">
          <thead className="bg-gradient-to-r from-indigo-500 to-teal-500 text-white">
            <tr>
              <th className="px-6 py-3 text-sm font-medium">Task ID</th>
              <th className="px-6 py-3 text-sm font-medium">Task Name</th>
              <th className="px-6 py-3 text-sm font-medium">Task Description</th>
              <th className="px-6 py-3 text-sm font-medium">Project ID</th>
              <th className="px-6 py-3 text-sm font-medium">Assigned User</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) =>
              project.tasks.map((task, index) => (
                <tr
                  key={task.id}
                  className="border-t hover:bg-indigo-100 transition-colors duration-300 cursor-pointer"
                >
                  <td className="px-6 py-4 text-sm text-gray-800">{task.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{task.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{task.description}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{project.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {project.assignedUsers[index % project.assignedUsers.length]?.name}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTablePage;
