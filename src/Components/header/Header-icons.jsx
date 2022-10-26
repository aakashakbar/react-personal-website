import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {SiFiverr} from 'react-icons/si'
import {SiUpwork} from 'react-icons/si'

const Icons = () => {
    return (
        <div className='headerIcons'>
            <a href='https://www.google.com' target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href='https://www.google.com' target="_blank" rel="noreferrer"><SiFiverr /></a>
            <a href='https://www.google.com' target="_blank" rel="noreferrer"><SiUpwork /></a>

        </div>
    )
}

export default Icons;