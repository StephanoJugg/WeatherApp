import React, { useState } from "react";
import classes from "./Clock.module.css";

type Clock = {
  hours: number;
  minutes: number;
};

const Clock = () => {
  let date = new Date();
  let [ctime, setCTime] = useState<Clock>();

  const updateTime = () => {
    date = new Date();
    const time = {
      hours: date.getHours(),
      minutes: date.getMinutes(),
    };
    setCTime(time);
  };
  setInterval(updateTime, 1000);

  function isDigit(val: number) {
    return String(+val).charAt(0) == val?.toString();
  }

  return (
    <>
      <h2 className={classes.clock}>
        {ctime?.hours}:
        {`${isDigit(ctime?.minutes!) ? "0" : ""}${ctime?.minutes}`}
      </h2>
    </>
  );
};
export default Clock;
