import React, { useState } from "react";
import {AiOutlineMenu, AiOutlineCloseCircle} from 'react-icons/ai';
import {SiRepublicofgamers} from 'react-icons/si'

export default function Header() {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="bg-gray-700 p-4">
            <div className="max-w-[1240px] py-2 flex justify-between mx-auto">
                <div className="flex flex-wrap items-center text-4xl md:text-5xl font-bold text-white">
                < SiRepublicofgamers className="md:text-[70px] text-4xl mr-5 text-orange-500"/>Ghazi-World 
                </div>
                {
                    toggle ?
                    < AiOutlineCloseCircle onClick={() => setToggle(!toggle)} className="text-white text-3xl lg:hidden md:hidden"/>
                    :
                    < AiOutlineMenu onClick={() => setToggle(!toggle)} className="text-white text-3xl lg:hidden md:hidden"/>
                }
                
                 
                <ul className="hidden md:flex text-white gap-10 items-center text-xl">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
                {/* responsive */}
                <ul className={`md:hidden duration-500 text-white text-center text-xl h-screen fixed bg-black top-[83px] w-full 
                ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
                    <li className="mt-6 cursor-pointer">Home</li>
                    <li className="mt-6 cursor-pointer">About</li>
                    <li className="mt-6 cursor-pointer">Services</li>
                    <li className="mt-6 cursor-pointer">Contact</li>
                </ul>
            </div>
        </div>
    )
}