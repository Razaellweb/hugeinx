import React, { useEffect } from 'react'
import { useState } from 'react'
import Awards from './components/Awards'
import Footer from './components/Footer'
import Fullbar from './components/Fullbar'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Outcomes from './components/Outcomes'
import Overview from './components/Overview'
import Reels from './components/Reels'
import Work from './components/Work'
import './main.css'
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const [display, setDisplay] = useState("none")
    return (
        <div className='container'>
            <Navbar display={display} setDisplay={setDisplay} />
            <Intro />
            <Overview />
            <Reels />
            <Work />
            <Outcomes />
            <Awards />
            <Footer />
            <Fullbar display={display} setDisplay={setDisplay} />
        </div>
    )
}

export default App