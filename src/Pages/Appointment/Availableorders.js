import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Bookingorders from './Bookingorders';
import Orders from './Orders';

const Availableorders = ({date}) => {

    const [treatment, setTreatment] = useState(null); 
    const [services, setServices] = useState([]);

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
                    setTreatment= {setTreatment}></Orders>) 
               } 
            </div>
            {treatment && <Bookingorders date={date} 
            treatment={treatment}
            setTreatment={setTreatment}></Bookingorders>}
        </div>
    );
};

export default Availableorders;