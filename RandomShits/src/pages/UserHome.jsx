import React, { useState } from "react";
import { LoggedHeader } from "../components/LoggedHeader";
import { RecentLink } from "../components/RecentLink";
import logo from "../assets/boginoo-logo.svg";
import credit from "../assets/credit.svg";
import "../assets/App.css";
import { instance } from "../App";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const styles = {
    container: {
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    body: {
        width: "789px",
        height: "226px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
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
    input: {
        width: "581px",
        height: "44px",
        borderRadius: "100px",
        border: "none",
        boxShadow: "0px 0px 7px 0px gray",
        paddingLeft: "20px",
        boxSizing: "border-box",
    },
    boginoButton: {
        width: "192px",
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
        cursor: "pointer",
    },
    credit: {
        position: "absolute",
        bottom: "50px",
        width: "225px",
        height: "44px",
        backgroundImage: `url(${credit})`,
    },
};

export const UserHome = () => {
    const [link, setLink] = useState();
    const [url, setUrl] = useState();
    const [username, setUsername] = useState();
    const { id } = useParams
    const getData = async () => {
        const res = await instance.post("/links", {
            LongUrl: link,
        });
        setUrl(res.data.data.ShortUrl);
    };
    const getUser = async () => {
        const res = await instance.get(`/users/${id}`);
        setUsername(res.data.data.password);
    }
    useEffect(() => {
        getUser()
    });
    return (
        <>
            <LoggedHeader />
            <div style={styles.container}>
                <div style={styles.credit}></div>
                <div style={styles.body}>
                    <div style={styles.logo}></div>
                    <div style={styles.bottomContainer}>
                        <input
                            style={styles.input}
                            id="inputId"
                            placeholder="https://www.web-huudas.mn"
                            onChange={(e) => setLink(e.target.value)}
                        />
                        <div style={styles.boginoButton} onClick={getData}>
                            {username}
                        </div>
                    </div>
                </div>
                {link && <RecentLink data={link} shortUrl={url} />}
            </div>
        </>
    );
};

export default UserHome;
