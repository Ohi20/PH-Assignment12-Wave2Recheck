import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import Availableorders from './Availableorders';
import Purchasebanner from './Purchasebanner';

const Purchase = () => {

    const [date, setDate]= useState(new Date());

    return (
        <div>
            <Purchasebanner date={date}
            setDate={setDate}></Purchasebanner>
            <Availableorders date={date}
            setDate={setDate}></Availableorders>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;