import React from "react";
import styles from "./games.module.css";

const games = [
//   { image: "Football.png", title: "Football Cup - World" },
  { image: "Football-Penalty-.jpg", title: "Virtual Football League" },
  { image: "Virtual-Football-.jpg", title: "Football Penalty Duel" },
  { image: "Virtual-Football-Cup-1920x1080-1.jpg", title: "Virtual Football Cup" },
  
];





const Gamescards = () => {
  return (
    <div className={styles.app}>
      {games.map((game, index) => (
        <div key={index} className={styles.gameCard}>
          <img src={game.image} alt={game.title} className={styles.image} />
          <h2 className={styles.title}>{game.title}</h2>
          <button className={styles.playButton}>PLAY DEMO</button>
        </div>
      ))}
    </div>
  );
};

export default Gamescards;