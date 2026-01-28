import React, { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div className="text-xl md:text-2xl">Please login!</div>
  
  return (
    <div className="text-xl md:text-2xl">
      Welcome {user.username}!
    </div>
  )
}
