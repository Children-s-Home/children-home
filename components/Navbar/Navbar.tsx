'use client'

import Link from "next/link";

export default function Navbar(){

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>
          <a href="/" className="text-decoration-none">
            Chang<span className="ia">ia</span>
          </a>
        </h1>
      </div>

      <div className="options">
        <ul className="menu-items">
          <li>
            <Link className="nav-links" href="/aboutUs">
              About us
            </Link>
          </li>
          <li>
            <Link className="nav-links" href="/impact">
              Discover
            </Link>
          </li>
          <li>
            <Link className="nav-links" href="/searchResults">
              Services
            </Link>
          </li>
          <li>
            <Link className="nav-links" href="/blog">
              Blog
            </Link>
          </li>
          <li className="sign-up button">
            <Link className="nav-links" href="/register">
              Sign Up
            </Link>
          </li>
          <li className="sign-in button">
            <Link className="nav-links" href="/login">
              Sign in
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
