import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css"
import { FaGoogle, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Mylogin = () => {
    const[username, setUsername]= useState("");
    const[password,setPassword]=useState("");
    console.log(username)
    console.log(password)
const handlelogin =() =>{
    if(username==="deepak"&&password==="deepu123"){
        toast.success("Login Successful!", {
            position: "top-center",
            autoClose: 2000,
          });
    
    }else {
        toast.error("Invalid Username or Password!", {
          position: "top-center",
          autoClose: 2000,
        });
      }
  
}
return(
  <>
  <div className="main">
    <div className="card">
    <h2>login</h2>
    <input type="text"  placeholder="username" value={username} onChange={(e) =>setUsername(e.target.value)}/><p></p>
    <input type="password"  placeholder="password" value={password} onChange={(e) =>setPassword(e.target.value)}/><p></p>
    <button onClick={handlelogin}>login</button><p></p>
    <button ><Link to="/Signup" className="button_name">Sign Up</Link></button>
    <p>Forget Password</p>

    <div className="social-icons">
            <FaGoogle className="icongoogle" />
            <FaFacebook className="iconfacebook" />
            <FaTwitter className="icontwitter" />
            <FaInstagram className="iconinstagram" />
          </div>
  </div>
  <ToastContainer/>

    </div>
   
  </>
    
)       

}
export default Mylogin;
