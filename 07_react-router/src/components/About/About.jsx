import React from 'react'

function About() {
  return(
    <div className="flex flex-1 flex-col p-4 items-center justify-start mt-6 gap-6">
      <h1 className='font-bold text-xl md:text-3xl'>About React Router DOM</h1>
      <div className='max-w-2xl  flex items-center justify-between gap-6 flex-col'>
        <p>
          React Router DOM is a collection of navigational components that enable
          client-side routing in React applications. It lets you define routes,
          render components based on the current URL, and navigate between views
          without a full page reload.
        </p>
        <p>
          Key features include declarative <code>Route</code> definitions,
          nested routes, dynamic route params via <code>useParams</code>, and
          programmatic navigation with <code>useNavigate</code>. Use
          <code>BrowserRouter</code> (or <code>HashRouter</code>) at the app root,
          then compose routes with <code>Routes</code> and <code>Route</code>.
        </p>
        <p>
          Together, these tools keep your UI and URL in sync and make building
          single-page applications with client-side navigation straightforward.
        </p>
      </div>
    </div>
  )
}

export default About