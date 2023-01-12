import React from "react";
import "../assets/App.css";
import HowItWorks from "./HowItWorks";
import Login from "./Login";

export const Header = () => {
  const styles = {
    container: {
      position: "absolute",
      width: "100vw",
      height: "10vh",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
  }
  return (
    <div style={styles.container}>
      <HowItWorks />
      <Login />
    </div>
  );
};
