import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
            <button><Link to="/">Input</Link></button>
            <button><Link to="/tasks">Tasks</Link></button>
        </ul>
    </div>
  )
}

export default Navbar