import React from 'react';
import bgImg from '../../../../assets/images/bg.png'
import chair from '../../../../assets/images/chair.png'
import PrimaryButton from '../../../../Utilities/PrimaryButton/PrimaryButton';
const Banner = () => {
    return (
        <div className='py-10' style={{backgroundImage : `url(${bgImg})`}}>

           <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img  alt='' src={chair} className=" rounded-lg md:w-4/5 lg:w-1/2 shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold font-Merry">Your New Smile Starts Here</h1>
      <p className="py-6 font-Ibm-plex">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    <PrimaryButton>Get Started</PrimaryButton>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;