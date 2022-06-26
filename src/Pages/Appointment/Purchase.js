import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import Availableorders from './Availableorders';
import Extrasec from './Extrasec';
import Purchasebanner from './Purchasebanner';

const Purchase = () => {

    const [date, setDate]= useState(new Date());

    return (
        <div>
            <Purchasebanner date={date}
            setDate={setDate}></Purchasebanner>
            <Availableorders date={date}
            setDate={setDate}></Availableorders>
            <Extrasec></Extrasec>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;