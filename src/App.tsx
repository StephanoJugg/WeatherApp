import { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Signup from "./components/UserLogin/Signup";
import Login from "./components/UserLogin/Login";
import Header from "./components/UI/Header";

import "./fonts/KondeLight.ttf";
import WeatherPage from "./Pages/WeatherPage";
import { WeatherContext } from "./contexts/WeatherContext";
import HourlyPage from "./Pages/HourlyPage";
import DailyPage from "./Pages/DailyPage";
import ComingSoon from "./Pages/ComingSoon";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { persistQueryClient } from "react-query/persistQueryClient-experimental";
import { createWebStoragePersistor } from "react-query/createWebStoragePersistor-experimental";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

const localStoragePersistor = createWebStoragePersistor({
  storage: window.localStorage,
});

function App() {
  const weatherCtx = useContext(WeatherContext);

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<WeatherPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ComingSoon></ComingSoon>} />
        <Route path="/hourly" element={<HourlyPage />} />
        <Route path="/daily" element={<DailyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
