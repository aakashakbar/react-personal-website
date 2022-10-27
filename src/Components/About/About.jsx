import React from 'react'
import './about.css'
import {TbAward} from 'react-icons/tb'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {HiOutlineUserGroup} from 'react-icons/hi'
import aakash from '../../assets/aakash.jpg'

const About = () => {
    return (
        <section className='about' id="about">
            <div className='about-intro'>
            <h1>About Me</h1>
            <h5>Get to know about me</h5></div>

            <div className="row">
                <div className="column">

                    <div className="row about-cards">
                        <div className="about-card">
                            <TbAward />
                            <h3>Experience</h3>
                            <h6>3+ Years of Experience</h6>
                        </div>


                        <div className="about-card">
                            <AiOutlineFundProjectionScreen />
                            <h3>Projects</h3>
                            <h6>150+ Projects Completed</h6>
                        </div>

                        <div className="about-card">
                            <HiOutlineUserGroup />
                            <h3>Clients</h3>
                            <h6>100+ Satisfied Clients</h6>
                        </div>

                        </div>

                    <p className='about-p'>I am a Front-End Developer with more than 2 years of experience in creating professional and responsive websites with Code using JavaScript and REACT, on WordPress and Shopify. I have done Masters in Computer Science from Pakistan and my ambition is to become one of the finest Web developers in the industry. </p>
                    <a href='#contact' className='btn about-btn'>Contact Me</a>
                </div>


                <div className='column'>
                    <div className='about-img-bg'>
                        <img src={aakash} alt="profile" className='about-img'></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;