import React from 'react';

type User = {
  id: number;
  name: string;
};

type Project = {
  id: number;
  name: string;
  description: string;
  assignedUsers: User[];
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
  },
  {
    id: 2,
    name: 'Educational Resource Hub',
    description: 'An application to streamline access to resources, notes, and exam papers for students.',
    assignedUsers: [
      { id: 103, name: 'Charlie' },
      { id: 104, name: 'Diana' },
    ],
  },
];

const UserTablePage: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">User and Project Overview</h1>
      <table className="table-auto w-full bg-white shadow-md rounded-lg border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-black text-left">
            <th className="px-4 py-2">User ID</th>
            <th className="px-4 py-2">User Name</th>
            <th className="px-4 py-2">Project ID</th>
            <th className="px-4 py-2">Project Name</th>
          </tr>
        </thead>
        <tbody className='text-black'>
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
    </div>
  );
};

export default UserTablePage;
