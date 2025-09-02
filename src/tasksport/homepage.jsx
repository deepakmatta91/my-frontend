import React from "react";
import Head from "./header";
import Body from "./bodyimg";

import { Outlet } from "react-router-dom";
import style from "./totalpage.module.css"
import Footer from "./footer";
// import Loginpage from "./loginpage";







const Homepage = () => {
  return (
    <div className={style.main}>
      
      <Head />
      {/* <Loginpage/> */}
      <Outlet />
     

    
      
      <Footer/>
      
    </div>
  );
};

export default Homepage;