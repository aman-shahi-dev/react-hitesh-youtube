import React from "react";

function Home() {
  return (
    <main className="flex flex-col md:flex-row flex-1 p-4 items-center justify-evenly">
      <img
        src="https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="home image"
        className="w-full md:w-1/3 h-1/2 md:h-full rounded-xl hover:-translate-y-2 transition duration-300 object-cover"
      />
      <h1 className="text-xl md:text-2xl p-4 max-w-xl">
        You can learn about React Router DOM from it's official documentation: 
        <a
          href="https://reactrouter.com/home"
          className="text-blue-500 ml-2 hover:underline-offset-2 hover:underline font-bold"
        >
          Open Docs
        </a>
      </h1>
    </main>
  );
}

export default Home;
