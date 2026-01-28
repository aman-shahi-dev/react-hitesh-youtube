import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  // const [data, setData] = useState([])

  // useEffect(() => {
  //     fetch('https://api.github.com/users/aman-shahi-dev')
  //     .then(response => response.json())
  //     .then(data => {
  //         setData(data)
  //     })
  // }, [])

  return (
    <div className="text-center bg-gray-600 text-white p-6 text-xl md:text-3xl w-full">
      <h1 className="font-bold tracking-wide underline underline-offset-4 mb-4">
        Github Details
      </h1>
      <h2 className="text-md md:text-xl mb-2">Username: {data.login}</h2>
      <h2 className="text-md md:text-xl">Followers: {data.followers}</h2>
      <img
        src={data.avatar_url}
        alt="github avatar"
        width={200}
        className="m-auto mt-6 rounded-full"
      />
      <h2 className="mt-2 text-md md:text-xl">Github Avatar</h2>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/aman-shahi-dev");
  return response.json();
};
