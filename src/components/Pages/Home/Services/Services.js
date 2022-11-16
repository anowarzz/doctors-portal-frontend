import React from 'react';
import flouride from '../../../../assets/images/fluoride.png'
import cavity from '../../../../assets/images/cavity.png'
import whitening from '../../../../assets/images/whitening.png'
import Service from './Service';
import CareArea from './CareArea';




const Services = () => {

const services = [
    {
        id: 1,
        name: "Fluoride Treatment",
        description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        img: flouride        
    },
    {
        id: 2,
        name: "Cavity Filling",
        description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        img: cavity        
    },
    {
        id: 3,
        name: "Teeth Whitening",
        description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        img: whitening        
    },
]

    return (
        <div className='mt-20'>
          <div className='text-center mb-28'>
            <h3 className='text-xl md:text-2xl font-semi text-primary uppercase mb-2 font-Merry'>Our Services</h3>
            <h2 className='text-2xl md:text-4xl font-Merry'>Services We Provide</h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-36'>
            {
                services.map(service => <Service key={service.id} service={service}/> )
            }
          </div>
        </div>
    );
};

export default Services;