import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import React, { useContext } from "react";
import ProgressBarItem from "./ProgressBarItem";
import classes from "./CurrentWeatherInfo.module.css";
import { WeatherContext } from "../../../contexts/WeatherContext";
import { fetchWeather } from "../../utils/fetchers";

export default function WeatherInfo() {
  const weatherCtx = useContext(WeatherContext);
  fetchWeather("galati");
  return (
    <div className={classes.box}>
      <span className={classes.header}>
        {Math.round(weatherCtx.weatherData.currTemp)}°C
      </span>
      <div>
        <img
          className={classes.icon}
          style={{ fontSize: "35px" }}
          src={weatherCtx.weatherData.conditionIcon}
        ></img>
        <span
          style={{
            fontFamily: "TimeburnerBold",
            color: "white",
            fontSize: "32px",
            textTransform: "lowercase",
          }}
        >
          {weatherCtx.weatherData.condition}
        </span>
      </div>
      <div className={classes.subtext}>
        {" "}
        feels like {Math.round(weatherCtx.weatherData.feelsLike)}°C
      </div>
      <div className={classes["progress-container"]}>
        <ProgressBarItem
          label="wind"
          value={`${Math.round(weatherCtx.weatherData.windSpeed) * 2}km/h`}
          width={50}
        />
        <ProgressBarItem
          label="humidity"
          value={`${Math.round(weatherCtx.weatherData.humidity)}%`}
          width={weatherCtx.weatherData.humidity * 2}
        />
        <ProgressBarItem
          label="precipitation"
          value={`${Math.round(weatherCtx.weatherData.precipitation)}%`}
          width={Math.round(weatherCtx.weatherData.precipitation) * 2}
        />
      </div>
    </div>
  );
}
