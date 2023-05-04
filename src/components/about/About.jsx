import React from 'react'
import './About.css'
import { Link } from 'react-router-dom';
//import AboutImg from'../../assets/images/about-img.png'
import AboutImg from'../../assets/images/ub-logo-full.png'
/*
import Char1 from'../../assets/images/character-1.png'
import Char2 from'../../assets/images/char-bison.png'
import Char3 from'../../assets/images/character-3.png'
*/

function FormatedText (props) {
    const text = props.text;
    return text.split('\n').map(str => <p className="about-text">{str}</p>);
}

function About(props) {

  return (
        <section className="about" id="about">
            {props.withImg === true ?
                <div className="container">
                    <figure className="about-banner">
                        <img src={AboutImg} alt="UB Logo" className="about-img" />
                        {/*
                            <img src={Char1} alt="Game character" className="character character-1" />

                            <img src={Char2} alt="Game character" className="character character-2" />

                            <img src={Char3} alt="Game character" className="character character-3" />

                        */}
                    </figure>
                    <div className="about-content">

                        <p className="about-subtitle">{props.subtitle}</p>

                        <h2 className="about-title">UB <strong>team</strong> </h2>

                        <FormatedText text={props.content} />

                        <p className="about-bottom-text">
                            <Link to="/about">
                                <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                            </Link>
                            <span>More info about our team</span>
                        </p>
                    </div>
                </div>  
                :
                <div className="container" style={{paddingRight: '15px'}}>
                    <div className="about-content" style={{width: '100%', maxWidth: 'unset'}}>

                        <p className="about-subtitle">{props.subtitle}</p>

                        <h2 className="about-title">UB <strong>team</strong> </h2>
                        
                        <FormatedText text={props.content} />
                    </div>
                </div>
            }
        </section>
  )
}

export default About