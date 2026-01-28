import React from 'react'

function Footer() {
  return (
    <div className='w-full h-40 border'>
      <footer className="w-full flex-col p-4 h-full flex items-center justify-between gap-4 px-6 md:px-12 bg-white dark:bg-slate-800">
        <a
          href="https://reactrouter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3"
          aria-label="React Router home"
        >
          <svg
            width="40"
            height="40"
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
          <span className="text-lg font-semibold text-slate-800 dark:text-slate-100">
            React Router
          </span>
        </a>

        <nav className="flex-1 flex justify-center">
          <ul className="flex items-center space-x-4 text-sm">
            <li>
              <a
                href="/"
                className="text-slate-700 hover:text-sky-600 dark:text-slate-200 dark:hover:text-sky-400 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="https://reactrouter.com/en/main"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-sky-600 dark:text-slate-200 dark:hover:text-sky-400 transition-colors"
              >
                Docs
              </a>
            </li>
            <li>
              <a
                href="https://reactrouter.com/en/main/start/overview"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-sky-600 dark:text-slate-200 dark:hover:text-sky-400 transition-colors"
              >
                Guides
              </a>
            </li>
            <li>
              <a
                href="https://github.com/remix-run/react-router"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-sky-600 dark:text-slate-200 dark:hover:text-sky-400 transition-colors flex items-center gap-2"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block"
                  aria-hidden="true"
                >
                  <path d="M12 .5C5.73.5.95 5.28.95 11.56c0 4.7 3.04 8.67 7.26 10.07.53.1.72-.23.72-.5 0-.25-.01-.92-.01-1.8-2.96.64-3.59-1.42-3.59-1.42-.48-1.2-1.17-1.52-1.17-1.52-.96-.66.07-.65.07-.65 1.06.08 1.62 1.09 1.62 1.09.94 1.62 2.47 1.15 3.07.88.1-.69.37-1.15.67-1.42-2.36-.27-4.84-1.18-4.84-5.26 0-1.16.42-2.1 1.11-2.84-.11-.27-.48-1.36.11-2.84 0 0 .9-.29 2.95 1.09a10.2 10.2 0 012.69-.36c.91 0 1.84.12 2.7.36 2.04-1.38 2.94-1.09 2.94-1.09.59 1.48.22 2.57.11 2.84.69.74 1.11 1.68 1.11 2.84 0 4.09-2.49 4.98-4.86 5.25.38.33.72.98.72 1.98 0 1.43-.01 2.58-.01 2.93 0 .27.19.61.73.5 4.22-1.4 7.26-5.37 7.26-10.07C23.05 5.28 18.27.5 12 .5z" />
                </svg>
                GitHub
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex text-center text-xs text-slate-500 dark:text-slate-400 w-full flex-col">
          <div>© {new Date().getFullYear()} React Router</div>
          <div className="mt-1">Built with routes, links & a great community</div>
        </div>
      </footer>
    </div>
  )
}

export default Footer