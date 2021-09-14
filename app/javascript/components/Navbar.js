import React from 'react'

const Navbar = () => {

  return (
    <nav>
      <div className="nav-wrapper">
      <a href="/" className="brand-logo">Home</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/accounts/new">New Account</a></li>
          <li>
            <a href="/users/sign_out" data-method="delete">
              Sign Out
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;