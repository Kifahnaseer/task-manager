import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>

        <NavLink to="/">Home</NavLink>
        <NavLink to="/tasks">Tasks</NavLink>
        <NavLink to="/newtasks">New Tasks</NavLink>
        <NavLink to="/taskdetails" >Task Details</NavLink>
        
    </div>
  )
}

export default NavBar
