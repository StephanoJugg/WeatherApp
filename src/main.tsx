import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClientProvider } from "@tanstack/react-query";
import "./fonts/KondeLight.ttf";
import "./fonts/Timeburner.ttf";
import "./fonts/TimeburnerBold.ttf";
import { AuthProvider } from "./contexts/AuthContext";
import { WeatherProvider } from "./contexts/WeatherContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <WeatherProvider>
          <App />
        </WeatherProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
