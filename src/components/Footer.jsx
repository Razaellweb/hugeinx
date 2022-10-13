import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

    return (
        <div className='footer' data-aos="zoom-in">
            <div className='flexede'   data-aos="fade-left" data-aos-duration="2000">
                <div className='hyge'><h1 className='huge'>Hello.</h1></div>
                <div className='flexedf'>
                    <div className='okiy'>
                        <div className='tgy'>
                            <div className='lineshortx'></div>
                            <h3>Contact.</h3>
                            <h3>Jobs.</h3>
                        </div>
                        <div className='tgy'>
                            <h2>Be a client.</h2>
                            <div className='linex'></div>
                            <p>+1 718 618 4724</p>
                            <a href='faf' style={{ color: "black" }}>Business@hugeinc.com</a>
                        </div>
                        <div className='tgy'>
                            <h2>Join Huge.</h2>
                            <div className='linex'></div>
                            <p>+1 718 618 4724</p>
                            <a href='faf' style={{ color: "black" }}>Jobs@hugeinc.com</a>
                        </div>
                    </div>
                    <div className='okir'>
                        <div className='tgy'>
                            <div className='lineshortx'></div>
                            <h3>LinkedIn.</h3>
                            <h3>Twitter.</h3>
                            <h3>Instagram.</h3>
                        </div>
                        <div className='tgy'>
                            <h2>Media Queries.</h2>
                            <div className='linex'></div>
                            <p>+1 718 618 4724</p>
                            <a href='faf' style={{ color: "black" }}>press@hugeinc.com</a>
                        </div>
                        <div className='tgy'>
                            <h2>Everything Else.</h2>
                            <div className='linex'></div>
                            <p>+1 718 618 4724</p>
                            <a href='faf' style={{ color: "black" }}>hello@hugeinc.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className='flexedg'>
                <div className='allf'>
                    <h1 style={{ color: "black" }}>HUGE | Make big moves.</h1>
                </div>
                <div className='flexedy'>
                    <h5>Legal</h5>
                    <h5>Modern slavery act statement</h5>
                    <h5>@2022 huge inc.</h5>
                </div>
            </div>
        </div>
    )
}

export default Footer