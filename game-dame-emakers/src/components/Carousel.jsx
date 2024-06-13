import React from "react";
import "../styles/components/Carousel.css"
import gow from "../assets/gow.png"
import daysgone from "../assets/daysgone.png"
import horizon from "../assets/horizon.png"
import ellipse from "../assets/ellipse.png"

const Carousel = () => {
    return (
    <div className="rectangle">
        <div className="daysgone_game">
            <img src={daysgone} alt="Days Gone" id="img1"/>
            <div className="discount_daysgone">-15%</div>
            <div className="price_daysgone">R$ 169,90</div>
        </div>

        <div className="horizon_game">
            <img src={horizon} alt="Horizon Zero Dawn" id="img2"/>
            <div className="discount_horizon">-25%</div>
            <div className="price_horizon">R$ 149,99</div>
        </div>

        <div className="gow_game">
            <a href="/game">
                <img src={gow} alt="God of War" id="img3"/>
            </a>
            <div className="discount_gow">-40%</div>
            <div className="price_gow">R$ 119,95</div>
        </div>

        <div className="triangle">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
            <div className="line4"></div>
        </div>

        <div className="ellipse-div">
            <img src={ellipse} alt="Carousel panels displayer" className="ellipse1" />
            <img src={ellipse} alt="Carousel panels displayer" className="ellipse2" />
            <img src={ellipse} alt="Carousel panels displayer" className="ellipse3" />
            <img src={ellipse} alt="Carousel panels displayer" className="ellipse4" />
        </div>
    </div>
    );
  }

export default Carousel