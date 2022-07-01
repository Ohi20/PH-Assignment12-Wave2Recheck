import { format } from 'date-fns';
import React from 'react';

const Bookingorders = ({date, appointments}) => {

    const {name, slots} = appointments;

    return (
        <div>
<input type="checkbox" id="booking-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
  <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="font-bold text-lg">Order For: {name}</h3>
    <form className='grid grid-cols-1 gap-3 justify-items-center my-4'>
    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs"/>
    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs"/>
    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs"/>
    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs"/>
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