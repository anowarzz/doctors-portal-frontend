import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  // treatment is just another name of appointment options with name, slots, _id ;
  const { name, slots } = treatment;

  const date = format(selectedDate, "PP");
  

const handleBooking = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const slot = form.slot.value;
    const email = form.email.value;
    const phone = form.phone.value;



    const booking = {
        appointmentDate: date,
        treatment: treatment.name,
        patient: name,
        slot,
        email,
        phone,
    }

// ToDo : send data to the server 
// and once data is saved then close the modal and display a toast
console.log(booking);
setTreatment(null)

}



  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center">{name}</h3>
          <form onSubmit={handleBooking} className="flex flex-col gap-4 mt-10">
            <input
              disabled
              type="text"
              value={date}
              placeholder="Type here"
              className="bg-gray-200 input input-bordered w-full"
            />

            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, i) => (
                <option value={slot}
                key={i}>{slot}</option>
              ))}
            </select>

            <input
              type="text" name="name" 
              placeholder="Your Name"
              className="input input-bordered w-full"
            />

            <input
              type="email" name="email" 
              placeholder="Email Address"
              className="input input-bordered w-full"
            />

            <input
              type="text" name="phone" 
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />

            <br />
            <input
              className="w-full btn bnt-accent"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
