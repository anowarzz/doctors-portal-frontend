import React from 'react';
import bgImg from '../../../../assets/images/appointment.png'


const ContactUs = () => {
    return (
        <section className='py-12 bg-contain' style={{backgroundImage : `url(${bgImg})`}}>
         <div>
      <div className='text-center my-10'>
        <h5 className="text-xl text-primary font-bold">Contact Us</h5>
        <h3 className="text-2xl md:text-4xl font-semibold text-white">Stay Connected With Us</h3>
        </div>

        <form >
          <div className="flex flex-col justify-center  items-center gap-3 mb-6">
            <input 
              type="email" name="email"
              placeholder="Your Email Address"
              className="input input-bordered focus:input-accent md:w-3/5" required
            />
            <input
              type="text" name="subject"
              placeholder="Subject"
              className="input input-bordered focus:input-accent md:w-3/5" required
            />
              <textarea name="message"
              className="textarea textarea-bordered focus:textarea-accent h-24 w-3/5 text-center"
              placeholder="Your Message" required
            ></textarea>
          

            <button  type="submit"
              className="btn btn-primary my-6 bg-gradient-to-r from-primary to-secondary text-white md:w-3/5 hover:bg-gradient-to-r hover:from-accent hover:to-info"> 
              Add Service
              </button>
             
      
          </div>
        </form>
      </div>
  
        </section>
    );
};

export default ContactUs;