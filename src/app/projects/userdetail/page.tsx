"use client"
import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';

interface Data {
    // Example fields, adjust based on your response structure
    id: number;
    name: string;
    email: string;
  }
  


const UserTablePage: React.FC = () => {

    const [data, setData] = useState<Data[] | null>(null); // Data type is an array of 'Data' or null
    const [loading, setLoading] = useState<boolean>(true); // Loading type is a boolean
    const [error, setError] = useState<string | null>(null); // Error type is a string or null
  
    useEffect(() => {
      // Fetch data when the component mounts
      console.log("hello")
      axios
      .post(
        'http://localhost:3000/graphql', // Correct GraphQL endpoint
        {
          query: `
            query {
              users {
                id
                name
                email
              }
            }
          `, // Adjust this query based on your GraphQL schema
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
        .then(response => {
          setData(response.data.data.users);  // Update state with fetched data
          setLoading(false);  // Set loading to false when done
          console.log(response.data); // Log the data
        })
        .catch(err => {
          setError('Error fetching data');  // Handle error
          setLoading(false);
          console.log(err);
        });
    }, []);

    return (
      <div className="container mx-auto p-6 bg-gradient-to-r from-teal-50 via-indigo-50 to-blue-50 min-h-screen">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">User and Project Overview</h1>
        <table className="table-auto w-full bg-white shadow-xl rounded-lg border border-gray-300">
          <thead className="bg-gradient-to-r from-teal-500 to-indigo-600 text-white">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold">User ID</th>
              <th className="px-6 py-3 text-sm font-semibold">User Name</th>
              <th className="px-6 py-3 text-sm font-semibold">Email ID</th>
              <th className="px-6 py-3 text-sm font-semibold">Project Name</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data?.map((user) => (
              <tr key={user.id} className="border-t hover:bg-indigo-100 transition-all duration-300">
                <td className="px-6 py-4 text-sm">{user.id}</td>
                <td className="px-6 py-4 text-sm">{user.name}</td>
                <td className="px-6 py-4 text-sm">{user.email}</td>
                <td className="px-6 py-4 text-sm text-gray-500">Project Placeholder</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    
};

export default UserTablePage;
