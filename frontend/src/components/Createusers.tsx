import React, { useState } from 'react'
import axios from 'axios'

const Createusers = () => {

  interface Input {
    name: string;
    email: string;
    mobile: string;
  }

  const [input, setInput] = useState<Input>({
    name: "",
    email: "",
    mobile: "",
  });

  const [message, setMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput(prevInput => ({
      ...prevInput,
      [name]: value
    }));
  };

  const handler = async (event: React.FormEvent) => {
    event.preventDefault();

await axios.post('http://localhost:8000/insert.php', input, {
  headers: { 'Content-Type': 'application/json' }
});
  }

  return (
    <div className='flex flex-col items-center mt-10'>
      <h2 className="text-2xl font-bold mb-4">Create User</h2>
      <form onSubmit={handler} className='flex flex-col gap-4'>
        <input
          name="name"
          value={input.name}
          onChange={handleChange}
          type="text"
          placeholder="Name"
          className="border p-2 mb-4 w-40"
        />
        <input
          name="email"
          value={input.email}
          onChange={handleChange}
          type="email"
          placeholder="Email"
          className="border p-2 mb-4 w-40"
        />
        <input
          name="mobile"
          value={input.mobile}
          onChange={handleChange}
          type="text"
          placeholder="Mobile"
          className="border p-2 mb-4 w-40"
        />

        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-40">
          Create
        </button>
      </form>

      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  )
}

export default Createusers
