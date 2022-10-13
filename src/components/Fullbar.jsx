import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import {FaTimes} from "react-icons/fa"

const Fullbar = ({ display, setDisplay }) => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


    return (
        <div className="fullbar" style={{ display: display }}>
            <div className='flig' style={{ display: "flex", justifyContent: "space-between" }}>
                <div className='hhuge'>
                    <h1 className='uge'>HUGE</h1>
                    <div className='linksd'>
                        <h1 className='linkd'>Fresh.</h1>
                        <h1 className='linkd'>Work.</h1>
                        <h1 className='linkd'>Us.</h1>
                        <h1 className='linkd'>Jobs.</h1>
                    </div>
                    <div className='linksde'>
                        <h1 className='linkd'>DE&I.</h1>
                        <h1 className='linkd'>Contact.</h1>
                        <h1 className='linkd'>Magenta.</h1>
                    </div>
                    <div className='fled'>
                        <p>Legal.</p>
                        <p>Modern slavery act management.</p>
                        <p>© 2022 Huge, LLC.</p>
                    </div>
                </div>
                <div className='uhy'>
                    <div className='ijko'>
                        <center>
                            <h1 onClick={() => { setDisplay("none") }} style={{color: "black"}}>x</h1>
                        </center>
                    </div>
                    <div>
                        <div className='hhhuge'>
                            <div className='flexit'>
                                <div className='line'></div>
                                <h1>Fresh.</h1>
                            </div>
                            <div className='linegh'></div>
                            <div className='textifys'>
                                <h3>Expereience Stack of the Future(XSF)</h3>
                                <h3>Strategy.</h3>
                            </div>
                            <div className='lineghx'></div>
                            <div className='textifys'>
                                <h3>Best workplace for innovators</h3>
                                <h3>Awards.</h3>
                            </div>
                            <div className='lineghx'></div>
                            <div className='textifys'>
                                <h3>Expereience Stack of the Future(XSF)</h3>
                                <h3>News.</h3>
                            </div>
                            <div className='lineghx'></div>
                            <div className='textifys'>
                                <h3>Expereience Stack of the Future(XSF)</h3>
                                <h3>Strategy.</h3>
                            </div>
                            <div className='lineghx'></div>
                            <div className='flexitf'>
                                <div className='line'></div>
                                <h1>Join the team.</h1>
                            </div>
                            <div className='linegh'></div>
                            <div className='textifys'>
                                <h3>Strategy Director.</h3>
                                <h3>Multiple Locations.</h3>
                            </div>
                            <div className='lineghx'></div>
                            <div className='textifys'>
                                <h3>Senior Analyst.</h3>
                                <h3>Multiple Locations.</h3>
                            </div>
                            <div className='lineghx'></div>
                            <div className='flexitf'>
                                <div className='line'></div>
                                <h1>Magenta.</h1>
                            </div>
                            <div className='linegh'></div>
                            <div className='textifys'>
                                <h3>Will the metaverse unleash — or stifle — designers?</h3>
                            </div>
                            <div className='lineghx'></div>
                            <div className='textifys'>
                                <h3>Poll position: How being a poll worker teaches true strategic communications.</h3>
                            </div>
                            <div className='lineghx'></div>
                            <div className='textifys'>
                                <h3>Peloton became a multidimensional brand. Here’s why it matters.</h3>
                            </div>
                            <div className='lineghx'></div>
                            <div className='textifys'>
                                <h3>Brendan Dawes’ seven rules of creativity</h3>
                            </div>
                            <div className='lineghx'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fullbar;