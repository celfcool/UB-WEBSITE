import React, { useState, useEffect } from "react";
import './Hero.css'
import axios from "axios";

function Hero() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/hero`);
      console.log(response);
      setTitle(response.data.title);
      setSubtitle(response.data.subtitle);
    }
    getData();
  }, []);
  return (
    <>
      <section className="hero" id="hero">
        <div className="container">

          <h1 className="h1 hero-title">{title}</h1>

          <p className="hero-subtitle">{subtitle}</p>

        </div>
      </section>
    </>
    /*
     <>
      <section className="hero" id="hero">
        <div className="container">

          <p className="hero-subtitle">The Season 8</p>

          <h1 className="h1 hero-title">UB</h1>

          <div className="btn-group">

            <button className="btn btn-primary">
              <span>Watch live</span>

              <ion-icon name="play-circle"></ion-icon>
            </button>

            <button className="btn btn-link">Dream making</button>

          </div>

        </div>
      </section>
    </>
    */
  )
}

export default Hero
