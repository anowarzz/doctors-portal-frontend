import React from 'react';

const AppointmentOption  = ({appointmentOption, setTreatment}) => {

const {name, slots} = appointmentOption;



    return (
        <div className="card shadow-xl border">
        <div className="card-body text-center">
          <h2 className="text-center text-2xl font-semibold text-secondary">{name}</h2>
          <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>

        <p>
        {slots.length} {slots.length > 1 ? 'spaces' : 'space'} available
        </p>

          <div className="card-actions justify-center mt-4">

            <label htmlFor="booking-modal" className="btn btn-primary text-white hover:bg-gradient-to-r hover:from-accent hover:to-info"
            onClick={() => setTreatment(appointmentOption)}>
              Book Appointment</label>
          </div>
        </div>
      </div>
    );
};

export default AppointmentOption;