import React from 'react';
import doctor from '../../../../assets/images/doctor.png'
import appointment from '../../../../assets/images/appointment.png'
import PrimaryButton from '../../../../Utilities/PrimaryButton/PrimaryButton';



const MakeAppointment = () => {
    return (
        <section className='mt-32 bg-cover'
        style={{
            background: `url(${appointment})`
        }}
        >
            <div className="hero ">
  <div className="hero-content flex-col lg:flex-row">
   <img src={doctor} alt='=' className="-mt-32 hidden lg:block lg:w-1/2 rounded-lg " />

    <div>
        <h4 className='text-lg text-primary font-bold'>Appointment</h4>
      <h1 className="text-2xl md:text-4xl font-semibold text-white">Make an appointment Today</h1>
      <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
     <PrimaryButton>Make Appointment</PrimaryButton>
    </div>
  </div>
</div>
        </section>
    );
};

export default MakeAppointment;