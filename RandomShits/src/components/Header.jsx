import React from "react";
import "../assets/App.css";
import HowItWorks from "./HowItWorks";
import Login from "./Login";
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

export const Header = () => {
  return (
    <div style={styles.container}>
      <HowItWorks />
      <Login />
    </div>
  );
};
