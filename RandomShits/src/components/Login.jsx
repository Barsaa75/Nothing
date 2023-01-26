import React from "react";
import { Link } from "react-router-dom";
const styles = {
  login: {
    width: "183px",
    height: "44px",
    backgroundColor: "#02B589",
    color: "white",
    boxSizing: "border-box",
    textAlign: "center",
    padding: "10px",
    fontFamily: "Ubuntu",
    fontWeight: "700",
    fontSize: "20px",
    borderRadius: "100px",
    marginRight: "100px",
    cursor: "pointer",
    textDecoration: "none",
  },
};

function Login() {
  return (
    <Link style={styles.login} to={"./Login"}>
      <div>Нэвтрэх</div>
    </Link>
  );
}

export default Login;
