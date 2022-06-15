import LogIn from "./components/Login";
import { useState } from "react";
import SignUp from "./components/SignUp";
import Homepage from "./components/Homepage";
import { Route, Router, Routes } from "react-router-dom";
function App() {
  const [user, setLoginUser] = useState({
    fist_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={user && user._id ? <Homepage setLoginUser={setLoginUser}/> : <LogIn setLoginUser={setLoginUser}/>}/>
        <Route path="/login"  element={<LogIn setLoginUser={setLoginUser} />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
