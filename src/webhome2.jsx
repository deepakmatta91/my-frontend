import React from "react";
import styles from "./webhome2.module.css";
import electricianImg from "../public/repairs890.avif";

const WebHome2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>
          A Trusted Campus Fix <br />
          <span className={styles.highlight}>Electrical Contractor</span> <br />
          Ready to Tackle all of Your Needs
        </h1>
        <p className={styles.description}>
       From flickering lights to faulty outlets and power surges, our electricians are trained to diagnose and repair all types of electrical issues. We understand that electrical problems can disrupt your business, so we respond fast, troubleshoot thoroughly, and deliver long-lasting repairs—backed by our expertise and commitment to safety
        </p>
        <ul className={styles.services}>
          <li>✔ Commercial Electrical Planning</li>
          <li>✔ Commercial Electrical Installation</li>
          <li>✔ Remodel Rewiring and Electrical Updating</li>
          <li>✔ Commercial Buildout Wiring</li>
        </ul>
        <button className={styles.button}>CONTACT US</button>
      </div>
      <div className={styles.right}>
        <img src={electricianImg} alt="Electrician working on wiring" />
      </div>
    </div>
  );
};

export default WebHome2;
