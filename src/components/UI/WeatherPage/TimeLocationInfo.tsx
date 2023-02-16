import React, { useRef, useContext, useState, useEffect } from "react";
import classes from "./TimeLocationInfo.module.css";
import { WeatherContext } from "../../../contexts/WeatherContext";
import { dateDayParser, realtimeClock } from "../../utils/helper-functions";
import Clock from "./Clock";

export default function TimeLocationInfo() {
  const locationRef = useRef<HTMLInputElement>(null);
  const weatherCtx = useContext(WeatherContext);
  const currentDay = dateDayParser(weatherCtx.weatherData.date);
  const clock = realtimeClock();

  useEffect(() => {
    const interval = setInterval(realtimeClock, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    weatherCtx.setCity(locationRef.current!.value);
    locationRef.current!.value = "";
  };
  return (
    <div className={classes.box}>
      <span className={classes["box-weekday"]}>{currentDay}</span>
      <Clock />
      <form onSubmit={submitHandler}>
        <input
          type="search"
          placeholder={weatherCtx.city}
          className={classes["box-search"]}
          ref={locationRef}
        />
      </form>
      <div className={classes["box-info"]}>
        <div style={{ display: "grid" }}>
          <span className={classes["box-info-text"]}>day</span>
          <span className={classes["box-info-temperature"]}>
            {Math.round(weatherCtx.weatherData.maxTemp)}°C
          </span>
        </div>
        <div style={{ display: "grid" }}>
          <span className={classes["box-info-text"]}>night</span>
          <span className={classes["box-info-temperature"]}>
            {Math.round(weatherCtx.weatherData.minTemp)}°C
          </span>
        </div>
      </div>
    </div>
  );
}
