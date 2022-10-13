import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Reels = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

    return (
        <div className='reels' data-aos="zoom-in">
            <div className='flexify'>
                <div className='line'></div>
                <h1 style={{marginBottom: "20px"}}>Reel</h1>
            </div>
            <div className='image'>
              
            </div>
            <div className='flexify' style={{marginTop: "10px"}}>
                <h4 style={{marginRight: "20px",marginLeft: "145px"}}>Verizon Full Transparency</h4>
                <div className='line'></div>
                <h4>01:30</h4>
            </div>
        </div>
    )
}

export default Reels