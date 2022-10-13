import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Overview = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  window.addEventListener('scroll', () => {

  })

  return (
    <div className='overview' data-aos="zoom-in">
      <div className='overfirst'>
        <div className='flexit'>
          <div className='line'></div>
          <h1>Overview.</h1>
        </div>
        <div className='all'>
          <h1 className='boldify'>A new standard for corporate</h1>
          <h1 className='boldify'>transparency.</h1>
        </div>
        <div className='all'>
          <h1>HUGE | Verizon.</h1>
        </div>
      </div>
      <div className='oversecond'>
        <div className='radical'>
          <div className='line'></div>
          <h4 style={{ marginTop: "20px" }}>Radical transparency.</h4>
        </div>
        <div className='uswu'>
          <p className='ppp'>In the days leading up to the 2020 U.S. election cycle, we </p>
          <p>launched Full Transparency by Verizon. A radical transparency technology platform built on a public, open-source blockchain </p>
          <p>service, Full Transparency has the potential to forever change the </p>
          <p>way companies communicate to their audiences. Nearly 60% of consumers globally believe that the media they use is </p>
          <p>contaminated with untrustworthy information.* Businesses can </p>
          <p>mislead the market and their customers without being held to </p>
          <p>account. Bad actors can exploit vulnerabilities in a corporate </p>
          <p>newsroom or media organization’s security and publish falsehoods under a veneer of credibility. Such risks not only imperil the brand safety of organizations, but the health and wellbeing of</p>
          <p> institutions and citizens.</p>
          <p className='pppp'>Based on intuitive design patterns, the Full Transparency interface clearly shows a permanent record of Verizon’s corporate news and information changes written to the Blockchain without distracting</p>
          <p> from the content itself. Accuracy stances, through badging and </p>
          <p>other visual cues help people understand sources, assess</p>
          <p> information, and share with confidence.</p>
        </div>
      </div>
    </div>
  )
}

export default Overview;