import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/services/auth";
import { logout } from "../../store/authSlice";

export default function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      onClick={logoutHandler}
      className="inline-block px-6 py-2 duration-200 hover:bg-red-500 hover:text-white rounded-full cursor-pointer active:scale-95 transition-all">
      Logout
    </button>
  );
}
