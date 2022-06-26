import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import purbanner from '../../Assets/images/purbanner.jpg';

const Purchasebanner = ({date, setDate}) => {
    return (

      <div>
        <div className='text-center'>
        <h2 className='text-info-content text-2xl font-bold'>You Can Order Your Desire Products Here</h2>
        </div>
        <div class="hero ">
          
          <div class="hero-content flex-col lg:flex-row-reverse">
           <div>
           <img src={purbanner} class="max-w-sm rounded-lg shadow-2xl" alt=''/>
           </div>
            <div>
            <DayPicker mode="single"
              selected={date}
              onSelect={setDate}
               />
            <p className='text-center text-accent-focus'>You have picked : {format(date, 'PP')}.</p>
            </div>
          </div>
        </div>
      </div>
      

        
    );
};

export default Purchasebanner;