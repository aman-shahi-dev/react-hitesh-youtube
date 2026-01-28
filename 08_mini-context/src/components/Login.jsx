import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const { setUser } = useContext(UserContext)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username, password})
  };

  return (
    <div className="py-4 px-12 rounded-lg flex flex-col items-center bg-neutral-700 justify-evenly gap-6">
      <h2 className="text-xl font-bold">Login</h2>
      <input
        className="p-2 border rounded outline-none"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="p-2 border rounded outline-none"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="px-3 py-1 border rounded cursor-pointer"
      >
        Submit
      </button>
    </div>
  );
}
