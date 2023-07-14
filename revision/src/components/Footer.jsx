import React from "react";
import {FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="bg-gray-700 text-white">
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white md:text-left text-center'>
      <div>
        <h1 className='w-full text-3xl font-bold'>Ghazi World.</h1>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 md:flex justify-between mt-6 '>
        <div>
          <h6 className='font-medium  text-3xl md:text-xl mb-5'>Solutions</h6>
          <ul>
            <li className='py-2 text-sm'>Developer</li>
            <li className='py-2 text-sm'>Coder</li>
            <li className='py-2 text-sm'>Designer</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium mb-5 text-3xl md:text-xl'>Support</h6>
          <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium mb-5 text-3xl md:text-xl'>Website</h6>
          <ul>
            <li className='py-2 text-sm'>Home</li>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Services</li>
            <li className='py-2 text-sm'>Contact</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium mb-5 text-3xl md:text-xl'>Legal</h6>
          <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
    )
}