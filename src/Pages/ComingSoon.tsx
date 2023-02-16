import { height } from "@mui/system";
import React from "react";

export default function ComingSoon() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        width: "100vw",
        height: "100vh",
        marginTop: "40vh",
      }}
    >
      <span
        style={{
          fontSize: "100px",
          fontFamily: "TimeburnerBold",
          color: "white",
        }}
      >
        COMING SOON !
      </span>
    </div>
  );
}
