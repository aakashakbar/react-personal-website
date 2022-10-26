import React from 'react'
import './Header.css'
import CTA from './CTA'
import Icons from './Header-icons'
import Myimg from '../../assets/Myimg.jpg'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h1>I'm Aakash Akbar</h1>
                <h5>Front-End Developer</h5>
                <CTA />
                <div className="headerImg">
                    <img src={Myimg} alt="react"></img>
                </div>
                
                <Icons />

            </div>
        </header>
    )
}

export default Header;