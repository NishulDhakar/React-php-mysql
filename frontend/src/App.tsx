
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Createusers from './components/Createusers'
import ListUsers from './components/ListUsers'

function App() {

  return (
    <BrowserRouter>
<nav className="bg-amber-300 p-4 text-center text-blue-600 font-semibold">
  <Link to="/">List Users</Link> | <Link to="/user/create">Create User</Link>
</nav>
<Routes>
  <Route index element={<ListUsers />} />
  <Route path="user/create" element={<Createusers />} />
</Routes>

    </BrowserRouter>
  )
}

export default App
