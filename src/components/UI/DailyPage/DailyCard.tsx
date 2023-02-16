import React from "react";
import classes from "./DailyCard.module.css";

import ProgressBarItem from "./ProgressBarItem";

type DailyCardProps = {
  minTemp: number;
  maxTemp: number;
  icon: string;
  condition: string;
  rain: number;
  snow: number;
  date: string;
};

export default function DailyCard({
  minTemp,
  maxTemp,
  icon,
  condition,
  rain,
  snow,
  date,
}: DailyCardProps) {
  return (
    <section className={classes["weather-card"]}>
      <span className={classes.date}>{date}</span>
      <span className={classes.degrees}>
        {Math.round(maxTemp)}°C{" "}
        <span
          style={{ color: "#A3A3A3", fontSize: "42px", lineHeight: "52px" }}
        >
          / {Math.round(minTemp)}°C
        </span>
      </span>
      <div className={classes["icon-text"]}>
        <img className={classes.icon} src={icon}></img>
        <span>{condition}</span>
      </div>
      <div className={classes["progress-container"]}>
        <ProgressBarItem
          label="chance of rain"
          value={`${Math.round(rain)}%`}
          width={Math.round(rain)}
          color="#88E2FF"
        />
        <ProgressBarItem
          label="chance of snow"
          value={`${Math.round(snow)}%`}
          width={Math.round(snow)}
          color="#FFFFFF"
        />
      </div>
    </section>
  );
}
