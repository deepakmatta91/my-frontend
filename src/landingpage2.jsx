import React from "react";
import styles from "./landingpage2.module.css";
import { Zap, ShieldCheck, Wrench } from "lucide-react";

const CampusStats = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.stats}>
        <div className={styles.statBox}>
          <h2 className={styles.statValue}>0%</h2>
          <p className={styles.statTitle}>Increase in Service Requests</p>
          <p className={styles.statDesc}>
            Since 2022, campus electrical issue reporting has tripled due to improved service awareness.
          </p>
        </div>
        <div className={styles.statBox}>
          <h2 className={styles.statValue}>0%</h2>
          <p className={styles.statTitle}>Student Satisfaction</p>
          <p className={styles.statDesc}>
            Our users report faster, safer fixes and quicker technician turnaround on campus.
          </p>
        </div>
      </div>

      <div className={styles.scrollSection}>
        <p>
          Access <span className={styles.highlight}>100+</span> verified electrical service previews
        </p>
        <div className={styles.arrow}>↓</div>
      </div>

      {/* <div className={styles.grid}>
        {[...Array(8)].map((_, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.icon}><Wrench size={24} /></div>
            <span>Campus Fix Service #{i + 1}</span>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default CampusStats;
