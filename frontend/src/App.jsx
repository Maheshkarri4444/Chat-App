import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import SignUp from "./pages/signup/SignUp.jsx";
import {Toaster} from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext.jsx";
import { Navigate } from "react-router-dom";
import Profile from "./pages/profile/Profile.jsx";
const App=()=>{
  const {authUser}=useAuthContext();
  return(
    <div className="flex items-center justify-center w-full h-screen p-4">
      <Routes>
        <Route path="/" element={authUser ? <Home/> :<Navigate to={"/login"}/>}/>
        <Route path="/login" element={authUser ? <Navigate to="/"/>:<Login/>}/>
        <Route path="/signup" element={authUser ? <Navigate to="/"/>:<SignUp/>}/>
        <Route path="/profile" element={authUser ? <Profile/> : <Navigate to="/" />}/>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App;