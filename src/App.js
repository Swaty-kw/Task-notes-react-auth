import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { getToken } from "./api/storage";
import UserContext from "./context/userContext";

function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    const token = getToken;
    if (token) {
      setUser(true);
    }
  }, []);
  return ( 
    <UserContext.Provider value={[user, setUser]}>
      <div className="App font-mono ">
        <Navbar />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
}

export default App;
