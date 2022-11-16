import React from 'react';
import treatment from '../../../../assets/images/treatment.png'
import PrimaryButton from '../../../../Utilities/PrimaryButton/PrimaryButton';

const CareArea = () => {
    return (
        <div>
            <div className="">
  <div className="hero-content flex justify-around   flex-col lg:flex-row">
   <div className=''>
   <img src={treatment} alt="treatment" className="md:max-w-4/5 lg:max-w-md  rounded-lg" />
   </div>
    <div>
      <h1 className="text-2xl md:text-5xl font-bold font-Ibm-plex">Exceptional Dental <br /> Care, on Your Terms</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat <br className='hidden md:block'/> fugiat ut assumenda excepturi exercitationem quasi. <br className='hidden md:block'/> In deleniti eaque aut repudiandae et a id nisi.</p>

      <PrimaryButton>Get Started</PrimaryButton>
    </div>
  </div>
</div>
        </div>
    );
};

export default CareArea;