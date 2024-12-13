"use client";
import React, { useState } from "react";

interface Data {
  id: number;
  name: string;
  email: string;
  project_id: number;
}

const UserTablePage: React.FC = () => {
  const [data, setData] = useState<Data[]>([ // Static data
    // { id: 1, name: "John Doe", email: "john@example.com", project_id: 101 },
    // { id: 2, name: "Jane Smith", email: "jane@example.com", project_id: 102 },
    // { id: 3, name: "Mike Ross", email: "mike@example.com", project_id: 103 },
  ]);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [newUser, setNewUser] = useState<Data>({ id: 0, name: "", email: "", project_id: 0 });

  const handleCreateButtonClick = () => {
    setShowPopup(true);
  };

  const handleSaveButtonClick = () => {
    setData([...data, newUser]);
    setShowPopup(false);
    setNewUser({ id: 0, name: "", email: "", project_id: 0 });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: name === "id" || name === "project_id" ? parseInt(value) : value });
  };

  return (
    <div className="container mx-auto p-4 bg-gradient-to-r from-teal-50 via-indigo-50 to-blue-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">User and Project Overview</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white shadow-md rounded-lg border border-gray-300">
          <thead className="bg-gradient-to-r from-teal-500 to-indigo-600 text-white">
            <tr>

              <th className="px-4 py-2 text-sm font-semibold text-left">User ID</th>
              <th className="px-4 py-2 text-sm font-semibold text-left">User Name</th>
              <th className="px-4 py-2 text-sm font-semibold text-left">Email ID</th>
              <th className="px-4 py-2 text-sm font-semibold text-left">Project ID</th>

            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data.map((user) => (
              <tr key={user.id} className="border-t hover:bg-indigo-100 transition duration-300">
                <td className="px-4 py-2 text-sm whitespace-nowrap">{user.id}</td>
                <td className="px-4 py-2 text-sm whitespace-nowrap">{user.name}</td>
                <td className="px-4 py-2 text-sm whitespace-nowrap">{user.email}</td>
                <td className="px-4 py-2 text-sm text-gray-500 whitespace-nowrap">{user.project_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={handleCreateButtonClick}
          className="px-6 py-2 bg-gradient-to-r from-teal-500 to-indigo-600 text-white font-bold rounded-lg hover:shadow-lg transition">
          Create User
        </button>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center text-black">
          <div className="bg-white p-6 rounded-xl shadow-2xl max-w-md w-full border border-indigo-200">
            <h2 className="text-2xl font-bold mb-4 text-indigo-800 text-center">Create New User</h2>
            <p className="text-sm text-gray-500 text-center mb-6">Fill in the details below to add a new user to the system.</p>
            <div className="space-y-4">
              <div>
                <label htmlFor="id" className="block text-sm font-medium text-gray-700">User ID</label>
                <input
                  type="number"
                  name="id"
                  value={newUser.id}
                  onChange={handleChange}
                  placeholder="Enter User ID"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">User Name</label>
                <input
                  type="text"
                  name="name"
                  value={newUser.name}
                  onChange={handleChange}
                  placeholder="Enter User Name"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email ID</label>
                <input
                  type="email"
                  name="email"
                  value={newUser.email}
                  onChange={handleChange}
                  placeholder="Enter Email ID"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="project_id" className="block text-sm font-medium text-gray-700">Project ID</label>
                <input
                  type="number"
                  name="project_id"
                  value={newUser.project_id}
                  onChange={handleChange}
                  placeholder="Enter Project ID"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                />
              </div>
            </div>
            <div className="flex justify-end mt-6 space-x-3">
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-400 shadow">
                Cancel
              </button>
              <button
                onClick={handleSaveButtonClick}
                className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-teal-500 text-white font-semibold rounded-lg hover:shadow-lg transition">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTablePage;
