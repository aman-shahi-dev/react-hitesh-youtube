import React from 'react'
import {Link, NavLink}  from 'react-router-dom'

function Header() {
  return (
    <div className="h-16 py-2 px-2 md:px-8 flex items-center justify-between sticky z-50 top-0 bg-slate-800 text-white">
      <Link to="/" className="text-sm md:text-2xl tracking-wide text-shadow-lg flex gap-2 items-center">
        <svg
          width="30"
          height="30"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-none"
          role="img"
          aria-hidden="false"
        >
          <title>React Router</title>
          <circle cx="32" cy="32" r="30" fill="#0EA5A9" />
          <path
            d="M32 12c11.046 0 20 8.954 20 20s-8.954 20-20 20S12 43.046 12 32c0-3.98 1.038-7.71 2.86-10.95C17.73 18.78 24.5 12 32 12z"
            fill="#fff"
            opacity="0.9"
          />
          <path
            d="M40.5 23.5c-2 1-4.5 3-6.5 5-2 2-4 4.5-5 6.5"
            stroke="#0EA5A9"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity="0.95"
          />
        </svg>
        <span className="text-sm md:text-lg font-semibold text-slate-800 dark:text-slate-100">
          React Router
        </span>
      </Link>
      <div className="max-w-lg h-full flex gap-6 md:gap-10 items-center justify-between px-2 text-md">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "text-orange-400 text-lg" : "text-white"} transition-all duration-200`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? "text-orange-400 text-lg" : "text-white"} transition-all duration-200`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${isActive ? "text-orange-400 text-lg" : "text-white"} transition-all duration-200`
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/github"
          className={({ isActive }) =>
            `${isActive ? "text-orange-400 text-lg" : "text-white"} transition-all duration-200`
          }
        >
          Github
        </NavLink>
      </div>
    </div>
  );
}

export default Header