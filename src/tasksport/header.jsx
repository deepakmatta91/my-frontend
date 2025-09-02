import React from "react";
import H1 from "./head.module.css";
import { FaGoogle, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <>
      <div className={H1.container}>
        <div className={H1.main}>
          <div className={H1.m1}>
            <div className={H1.socialicons}>
              {/* <FaGoogle className={H1.icongoogle} />
              <FaFacebook className={H1.iconfacebook} />
              <FaTwitter className={H1.icontwitter} />
              <FaInstagram className={H1.iconinstagram} /> */}
            </div>
          </div>
          <div className={H1.m2}>
            <h1>Sport Academy</h1>
          </div>
          {/* <div className={H1.m3}>
            <button className={H1.b1}><Link to="/click" style={{color:"black"}} >login</Link></button>
            <button>Sign Up</button>
          </div> */}
        </div>
        <div className={H1.main2}>
          <div className={H1.m2d1}>
            <div className={H1.img}></div>
          </div>
          <div className={H1.m2d2}>
            <div className={H1.details}>
              <Link to="/home">Home</Link>
              <Link to="/sports">sports</Link>
              {/* <a href="#">My Account</a> */}
              <a href="#"><Link to="about">about</Link></a>
            </div>
          </div>
          <Link to="/login">
          <div className={H1.m3}>
            <button className={H1.b1}>login</button>
            
            {/* <button>Sign Up</button> */}
          </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Head;