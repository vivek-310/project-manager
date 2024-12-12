import React from 'react';
import UserForm from './component/UserForm';  // Correct path for src/app/component

const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-100 to-teal-200 p-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Project Manager
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Manage your projects, tasks, and users easily. Streamline your workflow and boost productivity.
        </p>
        
        {/* Include the UserForm component here */}
        <div className="bg-white p-6 rounded-xl shadow-2xl">
          <UserForm />
        </div>
      </div>
    </main>
  );
};

export default Home;
