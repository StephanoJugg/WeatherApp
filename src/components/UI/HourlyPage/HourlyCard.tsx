import React from "react";
import classes from "./HourlyCard.module.css";
import WindHumidityInfo from "./WindHumidityInfo";
import HumidityIcon from "../../../assets/Vector.svg";
import WindIcon from "../../../assets/droplet.svg";

type HourlyCardProps = {
  temperature: number;
  icon: string;
  humidity: number;
  wind: number;
  hour: string;
};

export default function HourlyCard({
  temperature,
  icon,
  humidity,
  wind,
  hour,
}: HourlyCardProps) {
  return (
    <div className={classes.card}>
      <h2 className={classes.temperature}>{Math.round(temperature)}ºC</h2>
      <div className={classes.icon}>
        <img src={icon}></img>
      </div>
      <div className={classes.info}>
        <WindHumidityInfo icon={HumidityIcon} text={`${humidity}%`} />
        <WindHumidityInfo icon={WindIcon} text={`${Math.round(wind)}km/h`} />
      </div>
      <span className={classes.hour}>{hour}</span>
    </div>
  );
}
