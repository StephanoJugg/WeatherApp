import React, { useContext, useEffect } from "react";
import DetailsTab from "./DetailsTab";
import { WeatherContext } from "../../../../contexts/WeatherContext";

export default function TodaysDetails() {
  const weatherCtx = useContext(WeatherContext);
  const currentDay = weatherCtx.weatherData.dayForecast[0];
  let isLoading = weatherCtx.isLoading;

  useEffect(() => {
    isLoading = weatherCtx.isLoading;
    console.log("isLoading: " + isLoading);
  }, [weatherCtx.isLoading]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "1%",
        marginLeft: "1%",
        marginRight: "1%",
      }}
    >
      <DetailsTab
        fieldOne={`High/Low ${Math.round(currentDay.maxTemp)} ºC/${Math.round(
          currentDay.minTemp
        )} ºC`}
        fieldTwo={`Humidity ${currentDay.avgHumidity}%`}
        fieldThree={`Wind ${currentDay.maxWindSpeed} km/h`}
        fieldFour={`Precipitation ${currentDay.chanceOfRain}%`}
      ></DetailsTab>
      <DetailsTab
        fieldOne={`Chance Of Rain ${currentDay.chanceOfRain}%`}
        fieldTwo={`Chance of Snow ${currentDay.chanceOfSnow}%`}
        fieldThree={`Total Snow ${Math.round(currentDay.totalSnow)} cm`}
        fieldFour={` Total Precipitation ${Math.round(
          currentDay.totalPrecipitation
        )} mm`}
      ></DetailsTab>
      <DetailsTab
        fieldOne={`Visiblity ${currentDay.avgVisibility} km`}
        fieldTwo={`UV Index ${currentDay.uvIndex}`}
        fieldThree={`DewPoint ${Math.round(
          currentDay.hourForecast[12].dewPoint
        )} ºC`}
        fieldFour={` Pressure ${Math.round(
          currentDay.hourForecast[12].pressure
        )} in`}
      ></DetailsTab>
      <DetailsTab
        fieldOne={`Heat Index ${Math.round(
          currentDay.hourForecast[12].heatIndex
        )}ºC`}
        fieldTwo={`Gust ${currentDay.hourForecast[12].gust} km/h`}
        fieldThree={`Wind Chill ${currentDay.hourForecast[12].windChill}ºC`}
        fieldFour={`Wind Direction ${currentDay.hourForecast[12].windDir}`}
      ></DetailsTab>
    </div>
  );
}
