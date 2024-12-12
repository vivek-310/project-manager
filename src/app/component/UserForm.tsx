'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const UserForm: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [projectName, setProjectName] = useState<string>('');
  const [showPopup, setShowPopup] = useState<boolean>(false); // To control popup visibility
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Create user data object
    const userData = { username, email, projectName };
    console.log("User data:", userData);

    try {
      // Send data to backend (replace with your API endpoint)
      await axios.post('/api/create-user', userData); // Example endpoint, replace with your backend API URL

      // Show success popup after successful submission
      setShowPopup(true);
    } catch (err) {
      console.error('Error creating user:', err);
      alert('Error creating user!');
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">Create a New User</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your email address"
              />
            </div>
          </div>
          <div>
            <label htmlFor="projectName" className="block text-sm font-semibold text-gray-700 mb-2">
              Project Name
            </label>
            <input
              type="text"
              id="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your project name"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="py-3 px-8 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            >
              Create User
            </button>
          </div>
        </form>
        <div className="flex flex-wrap justify-center gap-4 pt-8">
          <button
            onClick={() => handleNavigation('/projects')}
            className="py-3 px-6 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
          >
            View Projects
          </button>
          <button
            onClick={() => handleNavigation('/projects/tasksdetail')}
            className="py-3 px-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
          >
            Tasks Details
          </button>
          <button
            onClick={() => handleNavigation('/projects/projectdetail')}
            className="py-3 px-6 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200"
          >
            Project Details
          </button>
          <button
            onClick={() => handleNavigation('/projects/userdetail')}
            className="py-3 px-6 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200"
          >
            Users Details
          </button>
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/3 text-center">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">User Created Successfully!</h4>
            <p className="text-gray-600 mb-6">The user has been created successfully.</p>
            <button
              onClick={handleClosePopup}
              className="py-2 px-6 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserForm;
