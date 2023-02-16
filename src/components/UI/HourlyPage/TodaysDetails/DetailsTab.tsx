import React from "react";

import classes from "./DetailsTab.module.css";
import circle from "../../../../assets/circle.svg";

type DetailsProps = {
  fieldOne: string;
  fieldTwo: string;
  fieldThree: string;
  fieldFour: string;
};

export default function DetailsTab({
  fieldOne,
  fieldTwo,
  fieldThree,
  fieldFour,
}: DetailsProps) {
  return (
    <div className={classes.container}>
      <div style={{ display: "inline-flex", gap: "2%" }}>
        <img src={circle}></img>
        <div className={classes.box}>{fieldOne}</div>
      </div>
      <hr className={classes.solid}></hr>
      <div style={{ display: "inline-flex", gap: "2%" }}>
        <img src={circle}></img>
        <div className={classes.box}>{fieldTwo}</div>
      </div>
      <hr className={classes.solid}></hr>
      <div style={{ display: "inline-flex", gap: "2%" }}>
        <img src={circle}></img>
        <div className={classes.box}>{fieldThree}</div>
      </div>
      <hr className={classes.solid}></hr>
      <div style={{ display: "inline-flex", gap: "2%" }}>
        <img src={circle}></img>
        <div className={classes.box}>{fieldFour}</div>
      </div>
    </div>
  );
}
