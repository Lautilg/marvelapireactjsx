import React from "react";
import "../App.css";
import marvelfamily from "../img/marvelfamily.jpg";
import "./Home.css"

const Home = () => {
  return (
    <>
      <div className="container">
      <h1>Welcome to Marvel API <br></br><span className="spanname">Created by Lautaro Griguelo</span></h1>
        <br>
        </br>
        <img className="imgmarvel" src={marvelfamily} alt= "marvel family"/>
        <br>
        </br>
        <br>
        </br>
        <p className="lead">
          Marvel Entertainment, LLC, a wholly-owned subsidiary of The Walt
          Disney Company, is one of the world's most prominent character-based
          entertainment companies, built on a proven library of more than 8,000
          characters featured in a variety of media over seventy-five years.
          Marvel utilizes its character franchises in entertainment, licensing
          and publishing. For more information visit marvel.com. © 2020 MARVEL.
          The Marvel Comics API is a tool to help developers everywhere create
          amazing, uncanny and incredible web sites and applications using data
          from the 70-plus years of the Marvel age of comics.
        </p>
      </div>
    </>
  );
};

export default Home;