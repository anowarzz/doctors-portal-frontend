import React from 'react';
import treatment from '../../../../assets/images/treatment.png'

const CareArea = () => {
    return (
        <div>
        <div className="hero">
  <div className="hero-content flex-col justify-center lg:flex-row">
    <div className=''>
    <img src={treatment} alt="treatment" className="w-3/4 h-auto rounded-lg shadow-2xl" />
    </div>
    <div className='w-3/5'>
      <h1 className="text-3xl md:text-5xl font-bold mb-6">Exceptional Dental <br className='hidden md:block'/> Care on Your Terms</h1>
      <p className="text-justify md:w-4/5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CareArea;