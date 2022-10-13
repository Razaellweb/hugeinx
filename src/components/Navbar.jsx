import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = ({display, setDisplay}) => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    const [hoxo, setHclass] = useState("navbar")
    const [hoxx, setXclass] = useState("brand")
    const [hoxy, setYclass] = useState("bar")


    window.addEventListener('scroll', () => {
        var scrolled = window.scrollY;

        if (scrolled === 0) {
            setHclass("navbar")
            setYclass("bar")
        }
        else {
            setHclass("navee")
            setYclass("linkx")
        }
    })
    return (
        <div className={hoxo} data-aos="fade-down">
            <div className='logo'>
                <h1 className={hoxx}><center>H</center></h1>
            </div>
            <div className='links'>
                <h3 className='link'>Fresh.</h3>
                <h3 className='link'>Work.</h3>
                <h3 className='link'>Us.</h3>
                <h3 className='link'>Jobs.</h3>
            </div>
            <h1 className={hoxy} onClick={() => {setDisplay("block")}}><center>+</center></h1>
        </div>
    )
}

export default Navbar