import React from "react";
import HowItWorks from "../components/HowItWorks";
import logo from "../assets/boginoo-logo.svg";
import credit from "../assets/credit.svg";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { instance } from "../App";

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
function Register() {
  const emailValue = useRef();
  const passwordValue = useRef();
  const passwordReValue = useRef();
  const navigate = useNavigate();
  const createUser = async () => {
    if (passwordReValue.current.value === passwordValue.current.value) {
      try {
        const res = await instance.post("/user/register", {
          email: emailValue.current.value,
          password: passwordValue.current.value,
        });
        navigate(`/Login`);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      toast("???????? ???? ????????????????????");
    }
  };
  return (
    <div>
      <div style={styles.headerContainer}>
        <ToastContainer />
        <div style={{ marginRight: "100px" }}>
          <HowItWorks />
        </div>
      </div>
      <div style={styles.container}>
        <div style={styles.credit}></div>
        <div style={styles.logo}></div>
      </div>
      <div style={styles.inputContainer}>
        <div style={styles.nevtrehTitle}>????????????????????</div>
        <div>?????????? ????????</div>
        <input
          style={styles.input}
          placeholder="name@mail.domain"
          type="email"
          ref={emailValue}
        />
        <div>???????? ????</div>
        <input
          ref={passwordValue}
          style={styles.input}
          placeholder="??????????????????????????????"
          type="password"
        />
        <div>???????? ???????? ???????????? ?????</div>
        <input
          ref={passwordReValue}
          style={styles.input}
          placeholder="??????????????????????????????"
          type="password"
        />
        <div style={styles.flexContent}></div>
        <button onClick={createUser} style={styles.nevtrehBtn}>
          ????????????????????{" "}
        </button>
      </div>
    </div>
  );
}

export default Register;
