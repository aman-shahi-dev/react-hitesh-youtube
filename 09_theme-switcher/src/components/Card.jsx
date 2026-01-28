import React from "react";

export default function Card() {
  return (
    <div className="w-80 h-100 rounded-md p-4 shadow-2xl dark:shadow-orange-500 flex flex-col items-center justify-around transition-all duration-500">
      <img
        src="https://plus.unsplash.com/premium_photo-1754772566307-814639e1bd01?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-full h-2/3 rounded-md object-cover shadow-2xl dark:shadow-xl dark:shadow-orange-500 transition-all duration-500"
      />
      <h2 className="p-2 mt-6 text-xl md:text-2xl">Hey, I'm Ryan Sebestian. <br /> Nice to meet you!</h2>
    </div>
  );
}
