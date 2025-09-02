









import React from 'react';
import styles from './landingpage.module.css';

const services = [
  {   image: 'ac.jpg' },
//   { title: 'Light Installation', image: '/images/light.png' },
//   { title: 'Wiring & Cabling', image: '/images/wiring.png' },
//   { title: 'MCB & Fuse Repair', image: '/images/fuse.png' },
//   { title: 'Switchboard Setup', image: '/images/switchboard.png' },
//   { title: 'Appliance Connection', image: '/images/appliance.png' },
];

const CampusHero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.left}>
        <div className={styles.badge}>
          ⚡ #1 Trusted Electrical Solution
        </div>
        <h1 className={styles.title}>
        Campus Fix <span className={styles.gradientText}>Electrical Issues</span> <br />
          that <span className={styles.gradientText}>spark</span>
        </h1>
        <p className={styles.subtitle}>
          Book Campus Fix for fast, professional, and safe services — whether it's fan repair or full wiring setup.
        </p>
        <div className={styles.buttons}>
          <button className={styles.primary}>Raise Complaint</button>
          {/* <button className={styles.secondary}>Learn More</button> */}
        </div>
        <div className={styles.testimonial}>
          “Campus Fix rewired our lab safely within a day. A great team with skilled electricians!”
          <div className={styles.author}>— Prof. Arjun Mehta, Engineering Dept.</div>
        </div>
      </div>

      <div className={styles.right}>
        {services.map((service, i) => (
          <div key={i} className={styles.card}>
            <img src={service.image} alt={service.title} className={styles.cardImage} />
            <span>{service.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampusHero;
