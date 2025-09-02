import React from "react";
import styles from "./ipltable.module.css";
import Ipllive from "./ipl";


const teams = [
  { rank: 1, name: "RCB-- ", matches: 10, wins: 7, losses: 3, nrr: "+0.521", points: 14, last5: ["W", "W", "L", "W", "W"] },
  { rank: 2, name: "PBKS", matches: 10, wins: 6, losses: 3, nrr: "+0.199", points: 13, last5: ["W", "W", "W", "L", "D"] },
  { rank: 3, name: "MI ----  ", matches: 10, wins: 6, losses: 4, nrr: "+0.889", points: 12, last5: ["W", "W", "W", "W", "W"] },
  { rank: 4, name: "GT----", matches: 9, wins: 6, losses: 3, nrr: "+0.748", points: 12, last5: ["W", "L", "W", "W", "L"] },
  { rank: 5, name: "DC--", matches: 10, wins: 6, losses: 4, nrr: "+0.362", points: 12, last5: ["W", "L", "W", "L", "L"] },
  { rank: 6, name: "LSG-", matches: 10, wins: 5, losses: 5, nrr: "-0.325", points: 10, last5: ["W", "W", "L", "L", "W"] },
  { rank: 7, name: "KKR", matches: 10, wins: 4, losses: 5, nrr: "+0.271", points: 9, last5: ["L", "L", "W", "L", "D"] },
  { rank: 8, name: "RR-", matches: 10, wins: 3, losses: 7, nrr: "-0.349", points: 6, last5: ["L", "L", "L", "L", "W"] },
  { rank: 9, name: "SRH", matches: 9, wins: 3, losses: 6, nrr: "-1.103", points: 6, last5: ["W", "L", "W", "L", "W"] },
  { rank: 10, name: "CSK", matches: 10, wins: 2, losses: 8, nrr: "-1.211", points: 4, last5: ["L", "L", "L", "L", "L"] },
];

const LeagueTable = () => {
  return (
    <>
    <Ipllive/>
    <div className={styles.table}>
      <div className={styles.header}>
        <div>Team</div>
        <div>M</div>
        <div>W</div>
        <div>L</div>
        <div>NRR</div>
        <div>Pts</div>
        <div>Last 5</div>
      </div>
      {teams.map((team) => (
        <div key={team.rank} className={styles.row}>
          <div>{team.rank}. {team.name}</div>
          <div>{team.matches}</div>
          <div>{team.wins}</div>
          <div>{team.losses}</div>
          <div>{team.nrr}</div>
          <div>{team.points}</div>
          <div className={styles.last5}>
            {team.last5.map((result, index) => (
              <span key={index} className={styles[result]}>{result}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default LeagueTable;