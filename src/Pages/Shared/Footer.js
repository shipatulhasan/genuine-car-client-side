import React from 'react';
import logo from '../../asset/brand/footer_logo.png'

const Footer = () => {
    return (
        <footer className="footer mt-20 p-10 bg-black text-slate-100 w-full">
        <div>
          <img src={logo} alt="logo" />
          <p>Alion Industries Ltd.<br/>Providing reliable service since 1992</p>
        </div> 
        <div>
          <span className="footer-title">Services</span> 
          <button   className="link link-hover">Branding</button> 
          <button   className="link link-hover">Design</button> 
          <button   className="link link-hover">Marketing</button> 
          <button   className="link link-hover">Advertisement</button>
        </div> 
        <div>
          <span className="footer-title">Company</span> 
          <button   className="link link-hover">About us</button> 
          <button   className="link link-hover">Contact</button> 
          <button   className="link link-hover">Jobs</button> 
          <button   className="link link-hover">Press kit</button>
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <button   className="link link-hover">Terms of use</button> 
          <button   className="link link-hover">Privacy policy</button> 
          <button   className="link link-hover">Cookie policy</button>
        </div>
      </footer>
    );
};

export default Footer;