import React from "react";
import styles from "./ourservies.module.css";

const servicesData = [
  {
    title: "Fan Repair",
    icon: "🌀", // placeholder icon for Fan Repair
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.",
  },
  {
    title: "Light Repair",
    icon: "💡",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.",
  },
  {
    title: "AC Repair",
    icon: "❄️",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.",
  },
  {
    title: "Board Repair",
    icon: "🔌",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.",
  },
  {
    title: "Switches & Wires",
    icon: "🔧",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.",
    darkBackground: true,
  },
  {
    title: "Current & Table",
    icon: "⚡",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.",
  },
   {
    title: "Laptop Repair",
    icon: "💻",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.",
  },
    {
    title: "Multi Media Repair",
    icon: "🎧",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.",
    darkBackground: true,
  },
];

const Services = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Our <span>Services</span>
      </h2>
      <div className={styles.grid}>
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={`${styles.card} ${service.darkBackground ? styles.darkCard : ""}`}
          >
            <div className={styles.icon}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
