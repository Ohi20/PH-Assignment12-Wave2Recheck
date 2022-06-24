import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const Purchasebanner = ({date, setDate}) => {
    return (
        <div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src="" class="max-w-sm rounded-lg shadow-2xl" alt=''/>
    <div>
    <DayPicker mode="single"
      selected={date}
      onSelect={setDate}
       />
    <p className='text-center'>You have picked : {format(date, 'PP')}.</p>
    </div>
  </div>
</div>
    );
};

export default Purchasebanner;