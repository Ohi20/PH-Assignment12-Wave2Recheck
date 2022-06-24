import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import Purchasebanner from './Purchasebanner';

const Purchase = () => {

    const [date, setDate]= useState(new Date());

    return (
        <div>
            <Purchasebanner date={date}
            setDate={setDate}></Purchasebanner>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;