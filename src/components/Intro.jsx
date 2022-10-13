import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Intro = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='intro' data-aos="flip-right" data-aos-duration="2000">
            <h1 className='verizon'>Verizon.</h1>
            <h1 className='trans'>Full Transparency.</h1>
            <div className='para'>
            <p className='isjs' style={{overflowWrap: "break-word"}}>We helped Verizon leverage the transparency </p>
            <p>of blockchain to combat</p>
            <p>misinformation and set a bold new statement.</p>
            </div>
    </div>
  )
}

export default Intro