import React from "react";
import HowItWorks from "../components/HowItWorks";
import logo from "../assets/boginoo-logo.svg";
import credit from "../assets/credit.svg";

function Login() {
  const styles = {
    headerContainer: {
      position: "absolute",
      width: "100vw",
      height: "10vh",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    container: {
      width: "100vw",
      height: "35vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    logo: {
      width: "184px",
      height: "118px",
      backgroundImage: `url(${logo})`,
    },
    bottomContainer: {
      width: "789px",
      display: "flex",
      justifyContent: "space-between",
    },
    credit: {
      position: "absolute",
      bottom: "50px",
      width: "225px",
      height: "44px",
      backgroundImage: `url(${credit})`,
    },
    inputContainer: {
      display: "flex",
      flexDirection: "column",
      width: "100vw",
      height: "auto",
      zIndex: "1",
      justifyContent: "center",
      alignItems: "center",
      gap: "15px",
    },
    input: {
      height: "44px",
      width: "381px",
      borderRadius: "100px",
      border: "1px solid #F0F0F0",
    },
    nevtrehTitle: {
      font: "Ubuntu",
      fontWeight: "700",
      fontSize: "32px",
      lineHeight: "36.77px",
      alignItems: "center",
      color: " #02B589",
    },
    nmgSana: {
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "18px",
      color: "#02B589",
    },
    nevtrehBtn: {
      backgroundColor: "#02B589",
      color: "#F0F0F0",
      width: "383px",
      height: "43px",
      borderRadius: "100px",
      border: "none",
    },
    flexContent: {
      display: "flex",
    },
    nevtrehBtnTop: {
      display: "flex",
      gap: "8rem",
    },
    decoration: {
      textDecoration: "none",
      color: "black",
    },
  };
  return (
    <div>
      <div style={styles.headerContainer}>
        <div style={{ marginRight: "100px" }}>
          <HowItWorks />
        </div>
      </div>
      <div style={styles.container}>
        <div style={styles.credit}></div>
        <div style={styles.logo}></div>
      </div>
      <div style={styles.inputContainer}>
        <div style={styles.nevtrehTitle}>Нэвтрэх</div>
        <div>Цахим хаяг</div>
        <input
          style={styles.input}
          placeholder="name@mail.domain"
          type="text"
        />
        <div>Нууц үг</div>
        <input style={styles.input} placeholder="••••••••••" type="text" />
        <div>Нууц үгээ давтна уу?</div>
        <input style={styles.input} placeholder="••••••••••" type="text" />
        <div style={styles.flexContent}></div>
        <button style={styles.nevtrehBtn}>Бүртгүүлэх </button>
      </div>
    </div>
  );
}

export default Login;