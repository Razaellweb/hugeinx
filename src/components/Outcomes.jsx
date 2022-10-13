import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Outcomes = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

    return (
        <div className='outcomes' data-aos="zoom-in">
            <center>
                <h1 className='textout'>Outcomes.</h1>
            </center>
            <div className='flexifyu'>
                <div style={{width: "100%"}}>
                    <center className="gsy" data-aos="flip-right" data-aos-duration="3000">
                        <h1 className='verizona'>800M+</h1>
                        <h4>Media impressions since product launch.</h4>
                    </center>
                </div>
                <div style={{width: "100%"}}>
                    <center className="gst" data-aos="flip-right" data-aos-duration="3000">
                        <h1 className='verizonh'>60+</h1>
                        <h4>Articles that have featured the experience.</h4>
                    </center>
                </div>
            </div>
            <div className='okidoki'  data-aos="fade-left" data-aos-duration="2000">
                <h5 className='okio'>"It’s rare to find an agency that brings such an interesting, innovative idea to the table but then also knows how to design and engineer the product."</h5>
                <div className='longline'></div>
                <h3 className='manager'>Mariana Agathoklis, Vice President of Corporate & Business Communications, Verizon.</h3>
            </div>
        </div>
    )
}

export default Outcomes