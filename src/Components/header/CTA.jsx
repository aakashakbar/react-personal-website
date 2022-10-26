import React from 'react'
import resume from '../../assets/resume.pdf'

const CTA = () => {
    return (
        <div className="cta">
            <a href={resume} download className="btn">Download CV</a>
            <a href='#contact' className="btn btn__secondary">Contact</a>
        </div>
    )
}

export default CTA;