import { format } from 'date-fns';
import React from 'react';

const Bookingorders = ({date, appointments, setAppointments}) => {

    const {_id, name, slots} = appointments;

    const handlebooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setAppointments(null);  
    }

    return (
        <div>
<input type="checkbox" id="booking-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
  <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="font-bold text-lg">Order For: {name}</h3>
    <form onSubmit={handlebooking} className='grid grid-cols-1 gap-3 justify-items-center my-4'>
    <select name="slot" class="select select-bordered w-full max-w-xs">
  {
    slots.map(slot => <option value={slot}>{slot}</option>)
  }
 </select>
    <input type="text" name="name" placeholder="Your Name" class="input input-bordered w-full max-w-xs"/>

    <input type="email" name="email" placeholder="Your Email" class="input input-bordered w-full max-w-xs"/>

    <input type="text" name="phone" placeholder="Phone Number" class="input input-bordered w-full max-w-xs"/>

    <input type="submit" value="Submit" class="btn btn-outline uppercase text-dark w-full max-w-xs"/>
    </form>
    <div className='text-center'>
        <p className=''>Orders On: {format(date, 'PP')}</p>
    </div>
   </div>
</div>
        </div>
    );
};

export default Bookingorders;