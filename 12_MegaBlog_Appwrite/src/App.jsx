import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/services/auth";
import { login, logout } from "./store/authSlice";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : null;
}

export default App;
