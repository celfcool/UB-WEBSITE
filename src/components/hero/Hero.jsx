import React from "react";
import './Hero.css'
import { useSelector } from 'react-redux';

function Hero() {
  const data = useSelector(state => state.data);
  return (
    <>
      <section className="hero" id="hero">
        <div className="container">

          <h1 className="h1 hero-title">{data?.title}</h1>

          <p className="hero-subtitle">{data?.subtitle}</p>

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
