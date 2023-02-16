import React, { createContext, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { persistQueryClient } from "react-query/persistQueryClient-experimental";
import { fetchWeather } from "../components/utils/fetchers";

type IChildrenProps = {
  children: React.ReactNode;
};

type WeatherData = {
  currTemp: number;
  minTemp: number;
  maxTemp: number;
  feelsLike: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  precipitation: number;
  date: string;
  condition: string;
  conditionIcon: string;
  sunrise: string;
  sunset: string;
  dayForecast: WeatherDataDayForecast[];
};

type WeatherDataDayForecast = {
  avgTemp: number;
  minTemp: number;
  maxTemp: number;
  chanceOfRain: number;
  chanceOfSnow: number;
  avgHumidity: number;
  maxWindSpeed: number;
  avgVisibility: number;
  uvIndex: number;
  totalPrecipitation: number;
  totalSnow: number;
  date: string;
  hourForecast: WeatherDataHourForecast[];
};

type WeatherDataHourForecast = {
  temp: number;
  feelsLike: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  precipitation: number;
  time: string;
  condition: string;
  conditionIcon: string;
  dewPoint: number;
  heatIndex: number;
  windChill: number;
  gust: number;
  windDir: string;
};

type WeatherContextType = {
  weatherData: WeatherData;
  city: string;
  setCity: (city: string) => void;
  isLoading: boolean;
};

const emptyWeatherData: WeatherContextType = {
  weatherData: {} as WeatherData,
  city: "Galati",
  setCity: () => {},
  isLoading: false,
};

export const WeatherContext = createContext(emptyWeatherData);

export const WeatherProvider = ({ children }: IChildrenProps) => {
  const [weatherData, setWeatherData] = useState<WeatherData>(
    {} as WeatherData
  );
  const [city, setCity] = useState<string>("Bucuresti");
  const { isError, isSuccess, isLoading, data, error } = useQuery(
    ["weather", city],
    () => fetchWeather(city),
    { cacheTime: 1000 * 60 * 60 * 24 }
  );

  console.log(data);

  const filteredWeatherData = (data: any) => {
    console.log(data);
    const filteredData = {
      currTemp: data.current.temp_c,
      minTemp: data.forecast.forecastday[0].day.mintemp_c,
      maxTemp: data.forecast.forecastday[0].day.maxtemp_c,
      feelsLike: data.current.feelslike_c,
      humidity: data.current.humidity,
      pressure: data.current.pressure_in,
      windSpeed: data.current.wind_kph,
      precipitation: data.current.precip_mm,
      date: data.forecast.forecastday[0].date,
      condition: data.current.condition.text,
      conditionIcon: data.current.condition.icon,
      sunrise: data.forecast.forecastday[0].astro.sunrise,
      sunset: data.forecast.forecastday[0].astro.sunset,
      dayForecast: data.forecast.forecastday.map((day: any) => {
        return {
          avgTemp: day.day.avgtemp_c,
          minTemp: day.day.mintemp_c,
          maxTemp: day.day.maxtemp_c,
          chanceOfRain: day.day.daily_chance_of_rain,
          chanceOfSnow: day.day.daily_chance_of_snow,
          avgHumidity: day.day.avghumidity,
          maxWindSpeed: day.day.maxwind_kph,
          avgVisibility: day.day.avgvis_km,
          uvIndex: day.day.uv,
          totalPrecipitation: day.day.totalprecip_mm,
          totalSnow: day.day.totalsnow_cm,
          date: day.date,
          hourForecast: day.hour.map((hour: any) => {
            return {
              temp: hour.temp_c,
              feelsLike: hour.feelslike_c,
              humidity: hour.humidity,
              pressure: hour.pressure_in,
              windSpeed: hour.wind_kph,
              precipitation: hour.precip_mm,
              time: hour.time,
              condition: hour.condition.text,
              conditionIcon: hour.condition.icon,
              dewPoint: hour.dewpoint_c,
              heatIndex: hour.heatindex_c,
              windChill: hour.windchill_c,
              gust: hour.gust_kph,
              windDir: hour.wind_dir,
            };
          }),
        };
      }),
    };
    return filteredData;
  };

  useEffect(() => {
    if (isSuccess) {
      const filteredData = filteredWeatherData(data);
      setWeatherData(filteredData);
    }
  }, [data]);

  useEffect(() => {
    localStorage.setItem("weatherData", JSON.stringify(weatherData));
  }, [weatherData]);

  useEffect(() => {
    const weatherData = localStorage.getItem("weatherData");
    if (weatherData) {
      console.log(weatherData);
      setWeatherData(JSON.parse(weatherData));
    }
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        weatherData: weatherData,
        city,
        setCity,
        isLoading: isLoading,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
