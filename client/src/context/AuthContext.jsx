import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });

  // Login
  const login = async (email, password) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, { email, password });
      setUser(res.data.user);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      localStorage.setItem('token', res.data.token);
      return res.data;
    } catch (err) {
      throw err;
    }
  };

  // Signup
  const signup = async (name, email, password) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/register`, { name, email, password });
      setUser(res.data.user);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      localStorage.setItem('token', res.data.token);
      return res.data;
    } catch (err) {
      throw err;
    }
  };

  // Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};