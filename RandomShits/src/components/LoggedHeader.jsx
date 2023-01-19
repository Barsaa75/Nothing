import React from "react";
import "../assets/App.css";
import HowItWorks from "./HowItWorks";
import Username from "./Username";
const styles = {
  container: {
    position: "absolute",
    width: "100vw",
    height: "10vh",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
};

export const LoggedHeader = ({ email }) => {
  return (
    <div style={styles.container}>
      <HowItWorks />
      <Username email={email} />
    </div>
  );
};
