import React, { Fragment, useEffect, useState } from "react";
import "bootstrap";
import axios from "axios";

import Memes from "../components/Memes";



const Home = () => {
  const divStyle = {
    width: "18rem",
    //    display: "flex",
    //  justifycontent: "evenly",
  };

  const [appState, setAppState] = useState({
    loading: false,
    memes: null,
  });

  useEffect(() => {
    async function fetchData() {
      setAppState({ loading: true });
      const apiUrl = "http://localhost:5000/api/memes";
      const res = await axios.get(apiUrl);
      //console.log(JSON.stringify(res.data));
      setAppState({ loading: false, memes: res.data });
      //console.log(res);
    }
    fetchData();
  }, [setAppState]);

  return (
    <div className="container">
      <h1>
        <i className="fas fa-exclamation-triangle">Memes</i>
      </h1>
      <Memes isloading={appState.loading} memes={appState.memes} />
    <p>Credits to https://api.imgflip.com/get_memes for providing the memes</p>
    </div>
  );
};

export default Home;
