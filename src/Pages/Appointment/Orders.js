import React from 'react';

const Orders = ({ service, setTreatment }) => {

    const { name, slots } = service;

    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl my-10">
            <div class="card-body">
                <h2 class="card-title text-dark text-2xl">{name}</h2>
                <p className='text-xl'>
                    {
                        slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>No Slot Available </span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div class="card-actions justify-center">

                    <label onClick={() => setTreatment(service)}
                        disabled={slots.length === 0} for="booking-modal" class="btn btn-ouline uppercase text-white">Book Order</label>
                </div>
            </div>
        </div>
    );
};

export default Orders;