/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  const logOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios(`${import.meta.env.VITE_URL}/userInfo`, {
        headers: {
          authorization: token,
        },
      });

      setUser(data);
      setLoading(false);
    };
    setLoading(false);
    fetchUser();
  }, [token]);

  const info = {
    user,
    setUser,
    loading,
    setLoading,
    logOut,
  };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
