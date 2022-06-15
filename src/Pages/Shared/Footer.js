import React from 'react';

const Footer = () => {
    return (
        <footer style={
            {
                background: `url()`,
                backgroundSize: 'cover'
            }
        } class=" p-10 ">
  <div className='footer text-xl text-secondary'>
  <div >
    <span class="footer-title text-secondary">Categories</span> 
    <a class="link link-hover">Camera</a>
    <a class="link link-hover">Tripod</a>
    <a class="link link-hover">Lights</a>
    <a class="link link-hover">Lens</a>
  </div> 
  <div>
    <span class="footer-title">Company</span> 
    <a class="link link-hover">About us</a>
    <a class="link link-hover">Contact</a>
    <a class="link link-hover">Jobs</a>
    <a class="link link-hover">Press kit</a>
  </div> 
  <div>
    <span class="footer-title">Legal</span> 
    <a class="link link-hover">Terms of use</a>
    <a class="link link-hover">Privacy policy</a>
    <a class="link link-hover">Cookie policy</a>
  </div>
  </div>
  <footer class="footer footer-center pt-6 text-base-content">
  <div>
    <p className='text-xl text-secondary font-bold'>Copyright © 2022 - Ashraf Ohi - Programming Hero</p>
  </div>
</footer>
</footer>
    );
};

export default Footer;