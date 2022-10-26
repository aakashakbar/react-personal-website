import React from 'react'
import Header from './Components/header/Header'
import Nav from './Components/nav/Nav'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Services from './Components/Services/Services'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


const App = () => {
    return(
        <div>
        <Nav />
        <Header />
        <About />
        <Experience />
        <Services />
        <Contact />
        <Footer />
        </div>
    )
}

export default App