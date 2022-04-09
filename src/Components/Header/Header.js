import React from 'react'
import classes from "./Header.module.css"
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className={classes.header}>
          <h1>React Route</h1>
          <nav>
            <ul>
              <li>
                <NavLink activeClassName={classes.active} to='/welcome'>Welcome</NavLink>
              </li>
              <li>
                <NavLink activeClassName={classes.active} to='/product'>Product</NavLink>
              </li>
              {/* <li>
                <NavLink activeClassName={classes.active} to='/productdetail'>Product Detail</NavLink>
              </li> */}
              {/* you dont need special link for dynamic pages */}
              <li>
                <button>Logout</button>
              </li>
            </ul>
          </nav>
        </header>
      )
}

export default Header