import React, { useContext } from "react";
import DailyCard from "../DailyPage/DailyCard";
import { WeatherContext } from "../../../contexts/WeatherContext";
import classes from "./DailyGrid.module.css";
import { dailyDateParser } from "../../utils/helper-functions";

export default function DailyGrid() {
  const weatherCtx = useContext(WeatherContext);

  return (
    <section className={classes.daily}>
      <div className={classes.title}>
        <span>daily</span>
      </div>
      <section style={{ display: "grid" }} className={classes.wrapper}>
        {weatherCtx.weatherData?.dayForecast?.map((day) => (
          <div>
            <DailyCard
              date={dailyDateParser(day.date)}
              minTemp={day.minTemp}
              maxTemp={day.maxTemp}
              icon={day.hourForecast[12].conditionIcon}
              condition={day.hourForecast[12].condition}
              rain={day.chanceOfRain}
              snow={day.chanceOfSnow}
            ></DailyCard>
          </div>
        ))}
      </section>
    </section>
  );
}
