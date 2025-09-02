import React from 'react';
import styles from './whychoose.module.css';

const features = [
  {
    title: "24/7 Support",
    icon: "🎧",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat eveniet illum eum cumque tempore. Quo nobis mollitia quis libero ipsa?"
  },
  {
    title: "Quality Service",
    icon: "🛠️",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat eveniet illum eum cumque tempore. Quo nobis mollitia quis libero ipsa?",
    darkBackground: true
  },
  {
    title: "Quick Repair",
    icon: "⏰",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat eveniet illum eum cumque tempore. Quo nobis mollitia quis libero ipsa?"
  },
];

const WhyChooseUs = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Why <span>Choose Us?</span>
      </h2>
      <div className={styles.features}>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${styles.card} ${feature.darkBackground ? styles.darkCard : ""}`}
          >
            <div className={styles.icon}>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
