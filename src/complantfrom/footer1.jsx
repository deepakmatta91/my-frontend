import React from "react";
import styles from "./footer1.module.css";

const OurServices = () => {
  return (
    
    <section className={styles.servicesSection}>
      <h1 className={styles.heading}>Our Services</h1>
      <p className={styles.intro}>
        At CampusFix, we are committed to maintaining a safe, functional, and comfortable campus environment. Our services are designed to address the most common maintenance issues faced by students and staff, with quick response and transparent tracking.
      </p>
      <div className={styles.servicesContainer}>
        <div className={styles.service}>
          <h2>Electrical Repairs</h2>
          <p>Fixing issues related to fans, lights, switches, plug points, and more.</p>
        </div>
        <div className={styles.service}>
          <h2>Plumbing Assistance</h2>
          <p>Addressing leaks, broken taps, and water supply problems.</p>
        </div>
        <div className={styles.service}>
          <h2>Room Maintenance</h2>
          <p>Repairs for doors, windows, furniture, and other room facilities.</p>
        </div>
        <div className={styles.service}>
          <h2>Complaint Tracking</h2>
          <p>Submit complaints and track their status: Submitted → In Progress → Fixed</p>
        </div>
        <div className={styles.service}>
          <h2>Photo-Based Reporting</h2>
          <p>Upload images for more accurate problem identification.</p>
        </div>
        <div className={styles.service}>
          <h2>Admin Dashboard</h2>
          <p>Our maintenance staff can view, filter, and update complaints efficiently.</p>
        </div>
        <div className={styles.service}>
          <h2>Notification Alerts (Optional)</h2>
          <p>Receive alerts when your complaint status is updated.</p>
        </div>
        <div className={styles.service}>
          <h2>contact Us</h2>
          <p>direct contact serviecs and customercare</p>
        </div>
      </div>
      <button className={styles.solutionButton}>Discover Our Solutions</button>
    </section>
  );
};

export default OurServices;