'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use next/navigation for Next.js 13+

const UserForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);  // Navigate to the specified path
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the form submission logic (e.g., save user data)
    console.log("User created:", { name, email });
  };

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-xl shadow-xl space-y-8">
      <h3 className="text-3xl font-extrabold text-white text-center mb-6">
        Create a New User
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email address"
            />
          </div>
        </div>
        <div className="pt-4 flex justify-end">
          <button
            type="submit"
            className="py-3 px-8 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          >
            Create User
          </button>
        </div>
      </form>
      <div className="flex justify-center pt-6 space-x-4">
        <button
          onClick={() => handleNavigation('/projects')}
          className="py-3 px-8 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
        >
          View Projects
        </button>
        <button
          onClick={() => handleNavigation('/projects/tasksdetail')}
          className="py-3 px-8 bg-blue-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
        >
          Tasks Details
        </button>
        <button
          onClick={() => handleNavigation('/projects/projectdetail')}
          className="py-3 px-8 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
        >
          Project Details
        </button>
        <button
          onClick={() => handleNavigation('/projects/userdetail')}
          className="py-3 px-8 bg-blue-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
        >
          users Details
        </button>
      </div>
    </div>
  );
};

export default UserForm;
