import React from "react";
import { useState } from "react";
import './slider.scss'
import './Intro'
import image1 from '../../assets/1.png'
import image2 from '../../assets/2.png'
import image3 from '../../assets/3.png'
import image4 from '../../assets/4.png'
import image5 from '../../assets/5.png'
import image6 from '../../assets/Landing page for truck company.png'
import image7 from '../../assets/event.png'
import image8 from '../../assets/dental.png'
import image9 from '../../assets/fitness.png'
import image10 from '../../assets/ebook.png'

import sliderImage from '../../assets/slider-bg.jpg'
import {AiFillLeftCircle} from 'react-icons/ai'
import {AiFillRightCircle} from 'react-icons/ai'
import Intro from "./Intro";


const Slider = () => {

    const sliderArr = [image1,image2,image6,image7,image5,image8,image9,image10]
    const [x, setX] = useState(0)

    const goLeft =() => {

        if(x < 0) {
        setX(x + 100)
    }
    }

    const goRight = () => {

        if( (x === -600)*(sliderArr.length -1)) {
        setX(0);
        }
        else {
            setX(x - 100)
        }

    }

    return (
        <div className="sliderSection">
        <div className="sectionIntro sliderIntro"><Intro /></div>
        <div className="slider">
                {
                    sliderArr.map((image, index) => {
                        return (
                            <div key={index} className="slide"  style={{transform: `translate(${x}%)`}}>
                            <img src={image} ></img>
                            </div>
                        )
                    })
                }
                            
            <button className="button-left"
            onClick={goLeft}>
            <AiFillLeftCircle />
            </button>

            <button className="button-right"
            onClick={goRight}>
                <AiFillRightCircle />
            </button>
            


        </div>
        </div>
    )
}

export default Slider;