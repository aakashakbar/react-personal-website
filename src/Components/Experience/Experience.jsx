import React from 'react'
import './experience.css'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { SiCss3 } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'
import { FaReact } from 'react-icons/fa'
import { FaGitSquare } from 'react-icons/fa'
import { FaBootstrap } from 'react-icons/fa'

const Experience = () => {
    return (
        <section id="experience" className='experience'>
            <div className='sectionIntro'>
            <h1>What Skills Do I Have?</h1>
            <h5>I have full grip on the following skills and love working on them</h5>
            <hr className='lineIntro' />
            </div>

            <div className='experience-details-box'>
                <div className='experience-details row'>

                    <div className='set1 row'>
                    <article>
                        <AiOutlineHtml5 className='experience-icon'/>
                        <h3>HTML</h3>
                        <h6>Experienced</h6>
                    </article>

                    <article>
                        <SiCss3 className='experience-icon'/>
                        <h3>CSS</h3>
                        <h6>Experienced</h6>
                    </article>

                    <article>
                        <IoLogoJavascript className='experience-icon'/>
                        <h3>JAVASCRIPT</h3>
                        <h6>Experienced</h6>
                    </article>
                    </div>


                    <div className='set2 row'>
                    <article>
                        <FaReact className='experience-icon'/>
                        <h3>REACT</h3>
                        <h6>Experienced</h6>
                    </article>

                    <article>
                        <FaGitSquare className='experience-icon'/>
                        <h3>GIT</h3>
                        <h6>Experienced</h6>
                    </article>

                    <article>
                        <FaBootstrap className='experience-icon'/>
                        <h3>BOOTSTRAP</h3>
                        <h6>Experienced</h6>
                    </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;