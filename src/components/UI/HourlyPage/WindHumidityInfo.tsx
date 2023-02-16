import React from "react";
import classes from "./WindHumidityInfo.module.css";

type WindHumidityInfoProps = {
  icon: string;
  text: string;
};

export default function WindHumidityInfo(props: WindHumidityInfoProps) {
  return (
    <div style={{ display: "flex" }}>
      <img className={classes.icon} src={props.icon}></img>
      <span className={classes.text}>{props.text}</span>
    </div>
  );
}
