import React, { useContext } from "react";
import { format } from "date-fns";
import { AuthContext } from "../../../../contexts/AuthProvider";
import { toast } from "react-toastify";

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
  // treatment is just another name of appointment options with name, slots, _id ;
  const { name: treatmentName, slots } = treatment;

  const date = format(selectedDate, "PP");

  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const slot = form.slot.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate: date,
      treatment: treatmentName,
      patient: name,
      slot,
      email,
      phone,
    };

    // ToDo : send data to the server
    // and once data is saved then close the modal
    // and display a toast

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.acknowledged) {
          setTreatment(null);
          toast.success("Booking Confirmed");
          refetch();
        }
        else{
          toast.error(data.message)
        }
      });
  };

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
          <h3 className="text-lg font-bold text-center">{treatmentName}</h3>
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
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              defaultValue={user?.displayName}
              disabled
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full bg-gray-200"
            />

            <input
              defaultValue={user?.email}
              disabled
              type="email"
              name="email"
              placeholder="Email Address"
              className="bg-gray-200 input input-bordered w-full"
            />

            <input
              type="text"
              name="phone"
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
