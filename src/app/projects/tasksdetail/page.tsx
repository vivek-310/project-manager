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
    <div className="container mx-auto p-4 sm:p-6 bg-gradient-to-r from-teal-100 to-indigo-200 min-h-screen text-black">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-8 drop-shadow-lg">
        User and Project Overview
      </h1>

      {/* User Table */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Assigned Users in Projects</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-white shadow-lg rounded-lg border border-gray-300">
            <thead className="bg-gradient-to-r from-indigo-500 to-teal-500 text-white">
              <tr>
                <th className="px-4 py-2 text-xs sm:text-sm font-medium">User ID</th>
                <th className="px-4 py-2 text-xs sm:text-sm font-medium">User Name</th>
                <th className="px-4 py-2 text-xs sm:text-sm font-medium">Project ID</th>
                <th className="px-4 py-2 text-xs sm:text-sm font-medium">Project Name</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) =>
                project.assignedUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="border-t hover:bg-indigo-100 transition-colors duration-300">
                    <td className="px-4 py-3 text-xs sm:text-sm text-gray-800 text-center">{user.id}</td>
                    <td className="px-4 py-3 text-xs sm:text-sm text-gray-800 text-center">{user.name}</td>
                    <td className="px-4 py-3 text-xs sm:text-sm text-gray-800 text-center">{project.id}</td>
                    <td className="px-4 py-3 text-xs sm:text-sm text-gray-800 text-center">{project.name}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Task Table */}
     {/* Task Table */}
<div>
  <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Task List Overview</h2>
  <div className="overflow-x-auto">
    <table className="table-auto w-full bg-white shadow-lg rounded-lg border border-gray-300">
      <thead className="bg-gradient-to-r from-indigo-500 to-teal-500 text-white">
        <tr>
          <th className="px-4 py-2 text-xs sm:text-sm font-medium">Task ID</th>
          <th className="px-4 py-2 text-xs sm:text-sm font-medium">Task Name</th>
          <th className="px-4 py-2 text-xs sm:text-sm font-medium">Task Description</th>
          <th className="px-4 py-2 text-xs sm:text-sm font-medium">Project ID</th>
          <th className="px-4 py-2 text-xs sm:text-sm font-medium">Assigned User</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project) =>
          project.tasks.map((task, index) => (
            <tr
              key={task.id}
              className="border-t hover:bg-indigo-100 transition-colors duration-300">
              <td className="px-4 py-3 text-xs sm:text-sm text-gray-800 text-center">{task.id}</td>
              <td className="px-4 py-3 text-xs sm:text-sm text-gray-800 text-center">{task.name}</td>
              <td className="px-4 py-3 text-xs sm:text-sm text-gray-800 text-center">{task.description}</td>
              <td className="px-4 py-3 text-xs sm:text-sm text-gray-800 text-center">{project.id}</td>
              <td className="px-4 py-3 text-xs sm:text-sm text-gray-800 text-center">
                {/* Responsive container for assigned user */}
                <div className="flex flex-col items-center sm:flex-row sm:items-start sm:justify-center">
                  <span className="text-gray-900 font-bold mr-2">{project.assignedUsers[index % project.assignedUsers.length]?.name}</span>
                  <span className="text-gray-600 text-xs sm:text-sm">(User ID: {project.assignedUsers[index % project.assignedUsers.length]?.id})</span>
                </div>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
</div>


    </div>
  );
};

export default UserTablePage;
