import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='mb-20'>
            <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 uppercase font-bold">
        <li><Link to="/">Home</Link></li>
        <li tabindex="0">
          <a class="justify-between">
            Categories
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul class="p-2 bg-base-100">
          <li><Link to="/purchase">Purchase</Link></li>
          <li><Link to="/review">Review</Link></li>
          </ul>
        </li>
        <li tabindex="0">
          <a class="justify-between">
            Docs
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul class="p-2 bg-base-100">
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          </ul>
        </li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </div>
    <a class="btn btn-ghost text-xl uppercase font-bold">Camerassories</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0 uppercase font-bold">
    <li><Link to="/">Home</Link></li>
      <li tabindex="0">
        <a>
          Categories
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-2">
          <li><Link to="/purchase">Purchase</Link></li>
          <li><Link to="/review">Review</Link></li>
        </ul>
      </li>
      <li tabindex="0">
        <a>
          Docs
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-2">
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        </ul>
      </li>
      <li><Link to="/dashboard">Dashboard</Link></li>
    </ul>
  </div>
  
</div>
        </div>
    );
};

export default Navbar;