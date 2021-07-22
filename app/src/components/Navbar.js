/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../index.css'


function Navbar() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="#/Home">
            Clook Rooms
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="/register">
                  Register
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">
                  Login
                </a>
              </li>
            
            </ul>
          </div>
        </nav>
      </div>
    );
}

export default Navbar
