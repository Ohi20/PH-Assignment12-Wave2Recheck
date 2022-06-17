import React from 'react';
import Footer from '../Shared/Footer';

const Portfolio = () => {
    return (
        <div className='mt-5'>
            <div className='text-center'>
<div class="mockup-phone">
  <div class="camera"></div> 
  <div class="display">
    <div class="artboard artboard-demo phone-2 text-2xl text-center  text-secondary  font-bold pb-3 pt-10">
    
    I am Shahed Ashraf Ohi
    <br></br>
    From
    <br></br>Programming Hero
    <div class="stack pt-10 max-w-sm  rounded-lg">
  
  <img  src='' alt=""/>
  
</div>
    </div>
    
  </div>
</div>
</div>


            <div className='text-center mt-10'>
            <div class="stats stats-vertical lg:stats-horizontal shadow">
  
  <div class="stat text-secondary  font-bold">
    <div class="stat-title">Projects Completed</div>
    <div class="stat-value ">11</div>
    <div class="stat-desc">Web Development</div>
  </div>
  
  <div class="stat text-secondary  font-bold">
    <div class="stat-title">Using</div>
    <div class="stat-value">React.js</div>
    <div class="stat-desc">DaisyUL</div>
  </div>
  
  <div class="stat text-accent  font-bold">
    <div class="stat-title">Institute</div>
    <div class="stat-value text-secondary">Programming Hero</div>
    <div class="stat-desc">5Th Batch</div>
  </div>
  
</div>
            </div>

            <div className='mt-10 mb-10'>
<div class="card lg:card-side bg-base-100 shadow-xl">
  
  <div class="card-body">
    <h2 class="card-title d-flex justify-center my-5 text-center text-2xl text-secondary font-bold">My Informations</h2>
    <div class="overflow-x-auto text-center">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th className='text-center'>Info</th>
        <th>Student ID</th>
      </tr>
    </thead>
    <tbody>
      
      <tr>
        <th>1</th>
        <td>Name</td>
        <td className='text-center'>Shahed Ashraf Ohi</td>
        <td>WEB5-2956</td>
      </tr>
      
      <tr>
        <th>2</th>
        <td>Email</td>
        <td className='text-center'>ashrafohi20@gmail.com</td>
        {/* <td>Purple</td> */}
      </tr>
      
      <tr>
        <th>3</th>
        <td>Address</td>
        <td className='text-center'>93/kha,Dokkhin Badda,Dhaka,Bangladesh</td>
        {/* <td>Red</td> */}
      </tr>
      <tr>
        <th>4</th>
        <td>Educational Background</td>
        <td className='text-center'>Studying B.Sc in CSE at Shanto-Marium University Of Creative Technology</td>
        {/* <td>Red</td> */}
      </tr>
    </tbody>
  </table>
</div>
    
  </div>
</div>
</div>       

 


<div className='mt-10 my-projects'>
  <h2 className='text-center text-secondary text-2xl font-bold'>My Projects</h2>
<div class="drawer mt-5">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content text-center">
    
    <label for="my-drawer" class="btn btn-outline drawer-button ">See Here</label>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-40 bg-base-100 text-base-content">
      
      <li><a target="_blank" href='https://rad-vacherin-475a5e.netlify.app/'>Project 1</a></li>
      <li><a target="_blank" href='https://ohi20.github.io/2nd-assignment/'>Project 2</a></li>
      <li><a target="_blank" href='https://compassionate-torvalds-d539b3.netlify.app/'>Project 3</a></li>
      <li><a target="_blank" href='https://cranky-edison-60c36f.netlify.app/'>Project 4</a></li>
      <li><a target="_blank" href='https://blissful-banach-eb505a.netlify.app/'>Project 5</a></li>
      <li><a target="_blank" href='https://eager-snyder-c41f3d.netlify.app/'>Project 6</a></li>
      <li><a target="_blank" href='https://remarkable-alfajores-f1de7a.netlify.app/'>Project 7</a></li>
      <li><a target="_blank" href='https://symphonious-fenglisu-344260.netlify.app/'>Project 8</a></li>
      <li><a target="_blank" href='https://tourmaline-dasik-503939.netlify.app/'>Project 9</a></li>
      
      
      
    </ul>
  </div>
</div>
</div>

<div className='my-10'>
  {/* html,css,Bootstrap, Tailwind, Javascript, Rest API, Debugging , React, Firebase , Node.js, Mongodb */}
  <h2 className='text-center text-accent text-2xl font-bold'>My Skills</h2>
<div className='grid lg:grid-cols-3  sm:grid-cols-1 gap-10'>
<div class="card lg:card-side bg-base-100 shadow-xl">
  
  <div class="card-body">
    <h2 class="card-title uppercase text-accent">HTML5</h2>
    <div className='text-center'>
    <img class="mask mask-hexagon max-w-sm"  width={200} height={200} src='' />
    </div>
    
  </div>
</div>

<div class="card lg:card-side bg-base-100 shadow-xl">
  
  <div class="card-body">
    <h2 class="card-title uppercase text-accent">CSS3</h2>
    <div className='text-center'>
    <img class="mask mask-hexagon max-w-sm"  width={200} height={200} src='' />
    </div>
   
  </div>
</div>
<div class="card lg:card-side bg-base-100 shadow-xl">
  
  <div class="card-body">
    <h2 class="card-title uppercase text-accent">Bootstrap</h2>
    <div className='text-center'>
    <img class="mask mask-hexagon max-w-sm"  width={200} height={200} src='' />
    </div>
    
  </div>
</div>
<div class="card lg:card-side bg-base-100 shadow-xl">
  
  <div class="card-body">
    <h2 class="card-title uppercase text-accent">Tailwind</h2>
    <div className='text-center'>
    <img class="mask mask-hexagon max-w-sm"  width={200} height={200} src='' />
    </div>
    
  </div>
</div>
<div class="card lg:card-side bg-base-100 shadow-xl">
  
  <div class="card-body">
    <h2 class="card-title uppercase text-accent">Javascript</h2>
    <div className='text-center'>
    <img class="mask mask-hexagon max-w-sm"  width={200} height={200} src='' />
    </div>
    
  </div>
</div>
<div class="card lg:card-side bg-base-100 shadow-xl">
  
  <div class="card-body">
    <h2 class="card-title uppercase text-accent">Debugging</h2>
    <div className='text-center'>
    <img class="mask mask-hexagon max-w-sm"  width={200} height={200} src='' />
    </div>
    
  </div>
  </div>
<div class="card lg:card-side bg-base-100 shadow-xl">
  
  <div class="card-body">
    <h2 class="card-title uppercase text-accent">Rest api</h2>
    <div className='text-center'>
    <img class="mask mask-hexagon max-w-sm"  width={200} height={200} src='' />
    </div>
   
  </div>
  </div>
<div class="card lg:card-side bg-base-100 shadow-xl">
  
  <div class="card-body">
    <h2 class="card-title uppercase text-accent ">React</h2>
    <div className='text-center'>
    <img class="mask mask-hexagon max-w-sm"  width={200} height={200} src='' />
    </div>
    
  </div>
  </div>
<div class="card lg:card-side bg-base-100 shadow-xl">
  
  <div class="card-body">
    <h2 class="card-title uppercase text-accent">Firebase</h2>
    <div className='text-center'>
    <img class="mask mask-hexagon max-w-sm"  width={200} height={200} src='' />
    </div>
    
  </div>
</div>
<div class="card lg:card-side bg-base-100 shadow-xl">
  
  <div class="card-body">
    <h2 class="card-title uppercase text-accent">Node.js</h2>
    <div className='text-center'>
    <img class="mask mask-hexagon max-w-sm"  width={200} height={200} src='' />
    </div>
    
  </div>
</div>
<div class="card lg:card-side bg-base-100 shadow-xl">
  
  <div class="card-body">
    <h2 class="card-title uppercase text-accent">Mongodb</h2>
    <div className='text-center'>
    <img class="mask mask-hexagon max-w-sm"  width={200} height={200} src='' />
    </div>
    
  </div>
</div>
</div>
</div>




<div class="flex flex-col w-full lg:flex-row mb-10">
  <div class="grid flex-grow h-32 card  rounded-box place-items-center">
    <img width="210px" height="100px" src='' alt=''></img>
    </div> 
  <div class="divider lg:divider-horizontal text-primary">AND</div> 
  <div class="grid flex-grow h-32 card  rounded-box place-items-center">
  <img  width="200px" height="100px" src='' alt=''></img>
  </div>
</div> 


<Footer></Footer>

        </div>
    );
};

export default Portfolio;