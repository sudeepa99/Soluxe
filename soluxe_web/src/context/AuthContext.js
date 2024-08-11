import React, { createContext, useState, useContext, useEffect } from 'react';
import Axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('authToken'); // Ensure 'authToken' is the correct key
      if (!token) {
        console.error('No token found');
        return;
      }

      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await Axios.get('http://localhost:3001/api/user', config);
        setUser(response.data);
        setIsLoggedIn(true); // Set isLoggedIn to true on successful data fetch
        console.log(response.data.email);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setIsLoggedIn(false); // Set isLoggedIn to false if there’s an error
      }
    };

    fetchUserData();
  }, []);

  const login = (userData, token) => {
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('authToken', token); // Ensure the token is saved during login
    setUser(userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('authToken'); // Clear the token on logout
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export const useEmail = () => {
  const { user } = useAuth();
  return user ? user.email : null;
};
