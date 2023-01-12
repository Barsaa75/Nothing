import React from "react";
import "../assets/App.css";
import { instance } from "../App";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const Link = () => {
  const params = useParams();
  const getData = async () => {
    const res = await instance.get(`/links/${params.shortUrl}`);
    window.location.replace(res.data.data.LongUrl);
  };
  useEffect(() => {
    getData();
  }, []);
  return <></>;
};

export default Link;
