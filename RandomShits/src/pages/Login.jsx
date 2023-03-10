import React from "react";
import HowItWorks from "../components/HowItWorks";
import logo from "../assets/boginoo-logo.svg";
import credit from "../assets/credit.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { instance } from "../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const LoginPost = async () => {
    try {
      const res = await instance.post("/user/Login", {
        email: email,
        password: password,
      });
      try {
        window.localStorage.setItem("token", JSON.stringify(res.data.token));
        window.localStorage.setItem(
          "user_id",
          JSON.stringify(res.data.data._id)
        );
      } catch (error) {
        console.log(error.message);
      }
      console.log(res.data.data);
      window.location.replace(`/UserHome/${res.data.data._id}`);
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  return (
    <div>
      <ToastContainer />
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
        <div style={styles.nevtrehTitle}>??????????????</div>
        <div>?????????? ???????? </div>
        <input
          style={styles.input}
          placeholder="name@mail.domain"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>???????? ????</div>
        <input
          style={styles.input}
          placeholder="??????????????????????????????"
          type="text"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div style={styles.flexContent}>
          <div style={styles.flexContent}>
            <input type="checkbox"></input>
          </div>
          <div style={styles.nevtrehBtnTop}>
            <div style={styles.nmgSana}>???????????? ????????</div>
            <div>???????? ???????? ??????????????</div>
          </div>
        </div>
        {/* <Link to="/"> */}
        <button onClick={LoginPost} style={styles.nevtrehBtn}>
          ??????????????
        </button>
        {/* </Link> */}
        <Link style={styles.decoration} to="/Register">
          <div>???????? ?????????????????? ?????? ?????? ?????????? ?????</div>
        </Link>
      </div>
    </div>
  );
}

export default Login;
