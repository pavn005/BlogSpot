import { createContext,useEffect,useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null); // everything that we store in localStorage is a string, so we parse it to get the object back

  const login = async(inputs) =>{
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", inputs, {
        withCredentials: true
      });
      setCurrentUser(res.data);
    } catch (err) {
      throw err;
    }
  };

  const logout = async(inputs) =>{
    await axios.post("http://localhost:5000/api/auth/logout",inputs);
    setCurrentUser(null);
  }

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser)); // store the current user in localStorage
  }, [currentUser]); // whenever currentUser changes, update localStorage and change it to string back from object

  return (
    <AuthContext.Provider value={{currentUser,login,logout}}>
      {children}
    </AuthContext.Provider>
  );
}