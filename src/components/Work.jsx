import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Work = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

    return (
        <div className='work' data-aos="zoom-in">
            <div className='flexhead'>
                <div className='flexit' style={{alignItems: "center"}}>
                    <div className='line'></div>
                    <h1>Work</h1>
                </div>
                <div style={{marginRight: "90px"}}>
                    <div className='line' style={{marginBottom: "20px"}}></div>
                    <h4 className='headr' >Content strategy.</h4>
                    <h4 className='headr'>Products and platforms.</h4>
                    <h4 className='headr'>Strategy.</h4>
                    <h4 className='headr'>XD.</h4>
                </div>
            </div>
            <div className='img' data-aos="zoom-in">

            </div>
            <div className='flix'>
                 <div className='flex1'>
                    <h1>Initiating a necessary conversation</h1>
                    <h1>around corporate transparency.</h1>
                 </div>
                 <div className='flex2'>
                     <p>Full Transparency's goal is to change the way corporate newsrooms provide visibility to their readers and hold themselves accountable for what they communicate to </p>
                     <p>the public. With Full Transparency, news releases</p>
                     <p> published to the Verizon Newsroom are secured and </p>
                     <p>bound using cryptographic principles, so that subsequent changes can be tracked and contextualized.</p>
                     <div className='okids'>
                     <p>The data is continuously verified via an immutable chain, ensuring transparency for all audiences, while initiating a conversation about the role and responsibilities</p>
                     <p> companies have in fighting misinformation.</p>
                     </div>
                 </div>
            </div>
            <div  className='image3' data-aos="zoom-in">

            </div>
            <div className='flixe' data-aos="zoom-in">
                <div className='okay1'>
                    <center>
                  <h1>What we did.</h1>
                  </center>
                </div>
                <div className='okay2'>
                  <p>Our cross-functional, global team drove the holistic initiative from concept through to branding, design, engineering, and go-to-market activations. Launched just five days before the 2020 U.S. presidential election, the initiative has been featured in more</p>
                  <p>than 60 articles, generating over</p>
                </div>
                <div className='okay3'>
                   <p>800 million media impressions, and ultimately demonstrating how technology can help organizations</p>
                   <p> take a stand for themselves and their audiences.</p>
                </div>
            </div>
        </div>
    )
}

export default Work