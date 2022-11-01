import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {SiFiverr} from 'react-icons/si'
import {SiUpwork} from 'react-icons/si'
import {BsLinkedin} from 'react-icons/bs'

const Icons = () => {
    return (
        <div className='headerIcons'>
            <a href='https://www.linkedin.com/in/aakashakbar/' target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href='https://fiverr.com/aakashakbar' target="_blank" rel="noreferrer"><SiFiverr /></a>
            <a href='https://www.upwork.com/freelancers/~01cebf20b12b3ad6b2' target="_blank" rel="noreferrer"><SiUpwork /></a>
            <a href='https://github.com/aakashakbar' target="_blank" rel="noreferrer"><FaGithub /></a>

        </div>
    )
}

export default Icons;