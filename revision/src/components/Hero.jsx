import React from "react";
import Typed from 'react-typed';

export default function Hero() {
    return (
        <div className="bg-gray-700 w-full ">
            <div className="flex flex-col items-center md:gap-16 gap-5 justify-center max-w-[1240px] mx-auto h-[550px] font-bold">
                <div className="text-3xl md:text-6xl text-orange-500">
                    Programming
                </div>
                <h1 className="md:text-[80px] text-4xl text-white">Start your Journey</h1>
                <div className="text-[20px] md:text-[50px] text-white">
                Learn 
                    <Typed className="pl-2 text-orange-500"
                        strings={[ ' React', 'Wordpress', 'Python']}
                        typeSpeed={100}
                        loop = {true}
                        backSpeed={50}
                    />
                    
                </div>
                <button className="bg-black text-white p-3 rounded"> Get Started</button>
            </div>
        </div>
    )
} 