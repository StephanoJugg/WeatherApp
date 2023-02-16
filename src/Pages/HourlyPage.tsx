import React from "react";
import HourlyCards from "../components/UI/HourlyPage/HourlyCards";
import TodaysDetails from "../components/UI/HourlyPage/TodaysDetails/TodaysDetails";

export default function HourlyPage() {
  return (
    <div style={{ display: "grid", marginTop: "30vh" }}>
      <div style={{ overflowX: "auto" }}>
        <HourlyCards />
      </div>
      <TodaysDetails />
    </div>
  );
}
