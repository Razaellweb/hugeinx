import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Awards = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


    return (
        <div className='award'>
        <div className='flexed' data-aos="zoom-in">
            <div className='flex1'>
                <div className='flexifyjs'>
                    <div className='line'>
                    </div>
                    <h1>Awards & Press.</h1>
                </div>
                <h3 className='andy'>Andy's shortlist.</h3>
            </div>
            <div className='flex7'>
                 <div className='ygh'>
                    <div className='lineshort'></div>
                    <h4>Press</h4>
                 </div>
                 <div className='ever'  data-aos="fade-left" data-aos-duration="2000">
                    <p className='every'>Here’s everything you must know about Verizon's</p>
                    <p className='every'>new blockchain product that battles</p>
                    <p className='every'> fake news</p>
                    <div className='medline'></div>
                    <h6 className='slate'>Crypto slate.</h6>
                 </div>
                 <div className='ever' data-aos="fade-left" data-aos-duration="2000">
                    <p className='every'>Verizon Turns To Blockchain To Combat Rampant Online Misinformation</p>
                    <div className='medline'></div>
                    <h6 className='slate'>Adweek.</h6>
                 </div>
                 <div className='ever' data-aos="fade-left" data-aos-duration="2000">
                    <p className='every'>Verizon's Full Transparency launches</p>
                    <p className='every'> blockchain verification for new releases</p>
                    <div className='medline'></div>
                    <h6 className='slate'>News.ycombinator.</h6>
                 </div>
            </div>
        </div>
        <div className='image5' data-aos="zoom-in"></div>
        <div className='image6' data-aos="zoom-in"></div>
        </div>
    )
}

export default Awards