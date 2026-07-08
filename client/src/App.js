import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Post from "./pages/Post";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const App = () => {
  const [user, setUser] = useState(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(`${API_URL}/auth/login/success`, {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        });

        if (!response.ok) {
          throw new Error("Authentication has failed");
        }

        const data = await response.json();
        setUser(data.user);
      } catch (error) {
        setUser(null);
      } finally {
        setIsLoadingUser(false);
      }
    };

    getUser();
  }, []);

  const loginElement = isLoadingUser ? (
    <div className="pageState">Chargement de la session...</div>
  ) : user ? (
    <Navigate to="/" replace />
  ) : (
    <Login apiBaseUrl={API_URL} />
  );

  const postElement = isLoadingUser ? (
    <div className="pageState">Verification de la session...</div>
  ) : user ? (
    <Post />
  ) : (
    <Navigate to="/login" replace />
  );

  return (
    <BrowserRouter>
      <div className="appShell">
        <Navbar apiBaseUrl={API_URL} user={user} />
        <main className="page">
          <div className="pageInner">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={loginElement} />
              <Route path="/post/:id" element={postElement} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
