import React from 'react';

const BookingModal = ({treatment}) => {


const {name} = treatment;


    return (
        <>
         <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold text-center">{name}</h3>
        <form className='flex flex-col gap-4 mt-10'>
        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
        <br />
        <input className='w-full btn bnt-accent' type="submit" value="Submit" />

        </form>
  </div>
</div>   
        </>
    );
};

export default BookingModal;