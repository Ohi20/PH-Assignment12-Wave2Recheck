import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Bookingorders from './Bookingorders';
import Orders from './Orders';

const Availableorders = ({date}) => {
    
    const [services, setServices] = useState([]);

    const [appointments, setAppointments] = useState(null);

    const formatedDate = format(date, "PP");

    useEffect( ()=> {
        fetch('Orders.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[formatedDate])


    return (
        <div>
            <h4 className='text-2xl text-center text-info-content font-bold my-8'>Available Orders on: {format(date, 'PP')} </h4>
            <div className='grid  md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-10'>
               {
                  services?.map(service => <Orders  key={service._id}
                    service = {service}
                    setAppointments= {setAppointments}></Orders>) 
               } 
            </div>
            {appointments && <Bookingorders date={date} 
            appointments={appointments}
            setAppointments={setAppointments}></Bookingorders>}
        </div>
    );
};

export default Availableorders;