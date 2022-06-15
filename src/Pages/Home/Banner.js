import React from 'react';

const Banner = () => {
    return (
        <div class="hero my-10">
  <div class="hero-content flex-col lg:flex-row grid sm:grid-cols-1 lg:grid-cols-2">
    <div className='mr-5'>
    <img src="" class="max-w-sm  rounded-lg shadow-2xl" />
    </div>
    <div className='ml-5'>
      <h1 class="text-5xl font-bold">WelCome!</h1>
      <p class="py-6 text-2xl">Equip Your Creativity </p>
      <button class="btn btn-outline text-secondary">Get Started</button>
    </div>
    
  </div>
</div>
    );
};

export default Banner;