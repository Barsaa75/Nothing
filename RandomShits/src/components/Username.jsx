import React from "react";

const styles = {
  Username: {
    color: "#02B589",
    fontFamily: "Ubuntu",
    fontWeight: "700",
    fontSize: "20px",
    marginRight: "44px",
    cursor: "pointer",
  },
};
function Username({ email }) {
  return <div style={styles.Username}>{email}</div>;
}

export default Username;
