

import { FaAngellist } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
            <footer className="px-4 font-inter py-12">
  <div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-12 lg:gap-20">
    <div className="col-span-3">
      <Link to="/" title="Go to Kutty Home Page">
      <div className="   ">
   
    <a className=" drop-shadow-lg flex items-center font-inter font-bold gap-1 text-4xl"><span className="text-4xl "><FaAngellist /></span> <span>Learn<span className="text-[#ffd24d]">Hub</span></span></a>
    </div>
    
      </Link>
      <p className="my-4  drop-shadow-lg font-roboto">
        Bring together your discussions, memberships, and content. Integrate a thriving community wherever your audience is, all under your own brand.
      </p>
    
    </div>
    <nav className="col-span-1 md:col-span-1 lg:col-span-2 ">
      <p className="mb-3 text-xl font-inter font-semibold tracking-wider drop-shadow-xl text-yellow-500 uppercase">Product</p>
      <a href="#" className="flex mb-3 text-sm font-medium drop-shadow-lg text-gray-800 transition md:mb-2 hover:text-yellow-500">Features</a>
      <a href="#" className="flex mb-3 drop-shadow-lg text-sm font-medium text-gray-800 transition md:mb-2 hover:text-yellow-500">Integrations</a>
      <a href="#" className="flex mb-3 drop-shadow-lg text-sm font-medium text-gray-800 transition md:mb-2 hover:text-yellow-500">Documentation</a>
      <a href="#" className="flex mb-3 drop-shadow-lg text-sm font-medium text-gray-800 transition md:mb-2 hover:text-yellow-500">FAQs</a>
      <a href="#" className="flex mb-3 drop-shadow-lg text-sm font-medium text-gray-800 transition md:mb-2 hover:text-yellow-500">Pricing</a>
    </nav>
    <nav className="col-span-1 md:col-span-1 lg:col-span-2">
      <p className="mb-3 text-xl font-roboto tracking-wider text-yellow-500 drop-shadow-lg uppercase">About</p>
      <a href="#" className="flex mb-3 drop-shadow-lg text-sm font-medium text-gray-800 transition md:mb-2 hover:text-yellow-500">Press-Kit</a>
      <a href="#" className="flex mb-3 drop-shadow-lg text-sm font-medium text-gray-800 transition md:mb-2 hover:text-yellow-500">Company</a>
      <a href="#" className="flex mb-3 drop-shadow-lg text-sm font-medium text-gray-800 transition md:mb-2 hover:text-yellow-500">Privacy</a>
      <a href="#" className="flex mb-3 drop-shadow-lg text-sm font-medium text-gray-800 transition md:mb-2 hover:text-yellow-500">Blog</a>
    </nav>
    <nav className="col-span-2 md:col-span-1 lg:col-span-2">
      <p className="mb-3 text-xl font-roboto tracking-wider text-yellow-500 drop-shadow-lg uppercase">Contact</p>
      <a href="#" className="flex mb-3 drop-shadow-lg text-sm font-medium text-gray-800 transition md:mb-2 hover:text-yellow-500">Twitter</a>
      <a href="#" className="flex mb-3 drop-shadow-lg text-sm font-medium text-gray-800 transition md:mb-2 hover:text-yellow-500">Instagram</a>
      <a href="#" className="flex mb-3 drop-shadow-lg text-sm font-medium text-gray-800 transition md:mb-2 hover:text-yellow-500">Email</a>
      <a href="#" className="flex mb-3 drop-shadow-lg text-sm font-medium text-gray-800 transition md:mb-2 hover:text-yellow-500">Advertising</a>
      <a href="#" className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-yellow-500">Chat</a>
    </nav>
    <div className="col-span-3">
      <p className="mb-3 text-xl  font-roboto tracking-wider drop-shadow-lg text-yellow-400 uppercase">SUBSCRIBE TO OUR NEWSLETTER</p>
      <form action="#" className="mb-2">
        <div className="form-append">
          <input className="form-input  mb-5 border p-3 drop-shadow-lg form-input-sm" type="email" placeholder="Enter your email" />
          <button className="px-3 rounded py-3 drop-shadow-lg bg-yellow-500 text-white font-roboto" type="submit">Subscribe</button>
        </div>
      </form>
      <p className="text-xl drop-shadow-lg font-roboto ">Get lessons and insights on how to grow your freelance business.</p>
    </div>
  </div>
  <div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
    <p className="mb-6  text-left text-gray-600 drop-shadow-lg md:mb-0">© Copyright 2023.  ||  <span className=' text-yellow-500'>Rk Ripon Khan</span> All Rights Reserved.</p>
    <div className="flex items-start justify-start space-x-6 md:items-center md:justify-center">
      <a href="#" className="text-sm text-gray-600 transition drop-shadow-lg hover:text-primary">Terms</a>
      <a href="#" className="text-sm text-gray-600 transition drop-shadow-lg hover:text-primary">Privacy</a>
    </div>
  </div>
</footer>

        </div>
    );
};

export default Footer;