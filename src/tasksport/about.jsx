// import React from "react";
// import styles from "./about.module.css";

// const About = () => {
//   return (
//     <div className={styles.container}>
//         <h1 className={styles.deepak1}>
//             About <span className={styles.hightlight}>Sport Life</span>  
//         </h1><br></br><br></br><br></br>
//         <p className={styles.para}>
//         <strong>Sports Lite</strong> is your all-in-one hub for sports
//         enthusiasts. From live scores to in-depth analysis, we deliver it fast,
//         clean, and mobile-friendly.


//         </p>
//         <h2 className={styles.deepak2}>Our Mission</h2><br></br>
//         <p className={styles.description}>
//         Our mission is to simplify sports coverage and bring the action closer to fans worldwide. Fast, reliable, and easy-to-use — that’s our promise.
//       </p>

        

     

      
//     </div>
//   );
// };

// export default About;



import React from 'react';
import H1 from './about.module.css';

const About = () => {
  return (
    <>
    <div className={H1.deepak}>
    <div className={H1.container}>
      <h1 className={H1.title}>About <span className={H1.highlight}>Acadamy </span></h1>
      <p className={H1.description}>
        <strong>Sports Lite</strong> is your all-in-one hub for sports enthusiasts. From live scores to in-depth analysis, we deliver it fast, clean, and mobile-friendly.
      </p>
      <h2 className={H1.subtitle}>Our Mission</h2>
      <p className={H1.description}>
        Our mission is to simplify sports coverage and bring the action closer to fans worldwide. Fast, reliable, and easy-to-use — that’s our promise.
      </p>
      <h2 className={H1.subtitle}>Meet the Team</h2>
      <ul className={H1.teamList}>
        <li>Alex Jordan - Founder & CEO</li>
        <li>Maya Lee - Lead Developer</li>
        <li>Ravi Kumar - Content Strategist</li>
        <li>Sofia Martinez - Marketing Head</li>
      </ul>
      <footer className={H1.footer}>
        © 2025 Sports Acadamy. All rights reserved.
      </footer>
    </div>
    </div>
    </>
  );
};

export default About;