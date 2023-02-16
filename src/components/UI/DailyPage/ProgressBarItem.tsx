import React from "react";
import classes from "./ProgressBarItem.module.css";

type IProgressBarItemProps = {
  label: string;
  value: string;
  width: number;
  color: string;
};

export default function ProgressBarItem({
  label,
  value,
  width,
  color,
}: IProgressBarItemProps) {
  return (
    <div className={classes["progress-item"]}>
      <div className={classes["progress-bar-label"]}>{label}</div>
      <div className={classes["progress-bar-label"]}>{value}</div>

      <div className={classes["progress-bar"]}>
        <div
          className={classes.progress}
          style={{ width: width, backgroundColor: color }}
        />
      </div>
    </div>
  );
}
