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
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">User and Project Overview</h1>
      <table className="table-auto w-full bg-white shadow-md rounded-lg border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-black text-left">
            <th className="px-4 py-2">User ID</th>
            <th className="px-4 py-2">User Name</th>
            <th className="px-4 py-2">Email ID</th>
            <th className="px-4 py-2">Project Name</th>
          </tr>
        </thead>
        <tbody className="text-black">
          {/* Loop through the fetched data and render each user */}
          {data?.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="px-4 py-2">{user.id}</td>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTablePage;
