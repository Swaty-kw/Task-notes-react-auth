import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { checkToken, getToken } from "./api/storage";
import UserContext from "./context/userContext";

function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    setUser(checkToken());
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
