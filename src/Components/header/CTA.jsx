import React from 'react'
import myresume from '../../assets/myresume.pdf'

const CTA = () => {
    return (
        <div className="cta">
            <a href={myresume} download className="btn">Download CV</a>
            <a href='#contact' className="btn btn__secondary">Contact</a>
        </div>
    )
}

export default CTA;