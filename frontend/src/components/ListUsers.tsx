import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface User {
  id: number;
  name: string;
  email: string;
  mobile: string;
}

const ListUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('http://localhost:8000/fetch.php');
        setUsers(res.data);
      } catch (error) {
        console.error('Failed to fetch users', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="p-4 text-center">Loading users...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">User List</h2>
      {users.length === 0 ? (
        <p className="text-center text-gray-600">No users found.</p>
      ) : (
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Mobile</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="border p-2 text-center">{user.id}</td>
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">{user.mobile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ListUsers
