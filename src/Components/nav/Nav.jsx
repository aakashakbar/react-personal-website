import React from 'react'
import './nav.css'

const Nav = () => {
    return (
        <nav>
            <div className='main'>
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
            </div>
        </nav>
    )
}

export default Nav;