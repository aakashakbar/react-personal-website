import React from 'react'
import './services.css'
import {BsFillCheckSquareFill} from 'react-icons/bs'

const Services = () => {
    return (
        <section id="services">
            <div className='sectionIntro'>
                <h1>My Services</h1>
                <h5>Following are the services that I provide</h5>
                <hr className='lineIntro' />
            </div>

            <div className='services row'>
            <div className='column'>
            <div className='servicesBox1'>
                <h2>Code</h2>
            </div>
            
            <div>
            <ul className='service-list'>
                <li>
                <BsFillCheckSquareFill className='service-icons'/>
                <p>Complete Website Design</p>
                </li>

                <li>
                <BsFillCheckSquareFill className='service-icons'/>
                <p>Responsiveness</p>
                </li>

                <li>
                <BsFillCheckSquareFill className='service-icons'/>
                <p>Landing Pages</p>
                </li>

                <li>
                <BsFillCheckSquareFill className='service-icons'/>
                <p>PSD to HTML</p>
                </li>

                <li>
                <BsFillCheckSquareFill className='service-icons'/>
                <p>Neat and Clean Code</p>
                </li>
            </ul>
            </div>

            </div>
    
            <div className='column'>
            <div className='servicesBox2'>
                <h2>WordPress</h2>
            </div>

            <ul className='service-list'>
                <li>
                <BsFillCheckSquareFill className='service-icons'/>
                <p>WordPress Website Setup</p>
                </li>

                <li>
                <BsFillCheckSquareFill className='service-icons'/>
                <p>Plugins</p>
                </li>

                <li>
                <BsFillCheckSquareFill className='service-icons'/>
                <p>Landing Pages with Elementor</p>
                </li>

                <li>
                <BsFillCheckSquareFill className='service-icons'/>
                <p>Responsiveness</p>
                </li>
            </ul>
            </div>

            <div className='column'>
            <div className='servicesBox2'>
                <h2>Shopify</h2>
            </div>

            <ul className='service-list'>
                <li>
                <BsFillCheckSquareFill className='service-icons'/>
                <p>Landing Pages on Shopify Store</p>
                </li>

                <li>
                <BsFillCheckSquareFill className='service-icons'/>
                <p>Complete Shopify Store Setup</p>
                </li>

                
            </ul>
            </div>

            </div>
        </section>
    )
}

export default Services;