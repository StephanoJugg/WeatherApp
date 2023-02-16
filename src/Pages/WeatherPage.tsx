import React from "react";
import WeatherInfo from "../components/UI/WeatherPage/CurrentWeatherInfo";
import Header from "../components/UI/Header";
import TimeLocationInfo from "../components/UI/WeatherPage/TimeLocationInfo";

export default function WeatherPage() {
  return (
    <div className="main">
      <div style={{ display: "flex", marginTop: "100px" }}>
        <WeatherInfo></WeatherInfo>
        <TimeLocationInfo></TimeLocationInfo>
      </div>
      <span
        style={{
          display: "flex",
          fontFamily: "TimeburnerBold",
          fontSize: "64px",
          alignContent: "center",
          fontWeight: "bold",
          lineHeight: "84px",
          justifyContent: "center",
          paddingTop: "10%",
          color: "white",
        }}
      >
        Looks like its coming down real hard
      </span>
    </div>
  );
}
