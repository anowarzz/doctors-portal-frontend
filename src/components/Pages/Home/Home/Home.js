import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import CareArea from '../Services/CareArea';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
         <Banner />
         <InfoCards />
        <Services />
        <CareArea />
        <MakeAppointment />
        <Testimonial />
        <ContactUs />

        </div>
    );
};

export default Home;