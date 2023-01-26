import React from "react";
import "../assets/App.css";
import credit from "../assets/credit.svg";
import { Link } from "react-router-dom";
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
  credit: {
    position: "absolute",
    bottom: "50px",
    width: "225px",
    height: "44px",
    backgroundImage: `url(${credit})`,
  },
};

export const LoggedHeader = ({ email }) => {
  return (
    <div style={styles.container}>
      <HowItWorks />
      <Link style={{ textDecoration: "none" }} to={"/History"}>
        <Username email={email} />
      </Link>
    </div>
  );
};
