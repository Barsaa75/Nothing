import React from "react";
import { LoggedHeader } from "../components/LoggedHeader";
import { instance } from "../App";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function History({ email }) {
  const [history, setHistory] = useState();
  const { id } = useParams();
  const getUser = async () => {
    const res = await instance.get(`/user/${id}`);
    setHistory(res.data.data.Links);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <LoggedHeader />
      <div style={{ display: "flex", gap: "50px" }}>
        <div>
          {history &&
            history.map((el) => {
              return el.LongUrl;
            })}
        </div>
        <div>
          {history &&
            history.map((el) => {
              return el.ShortUrl;
            })}
        </div>
      </div>
    </div>
  );
}

export default History;
