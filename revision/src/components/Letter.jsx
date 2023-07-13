import React from "react";

export default function Letter() {
    return (
        <div className="w-full bg-gray-700 p-4 text-white py-[50px] md:text-left text-center">
             <div className="flex max-w-[1240px] mx-auto flex-wrap md:justify-between justify-center items-baseline">
                <div className="">
                    <h1 className="text-[40px] font-bold">Want to Learn I.T skills?</h1>
                    <p className="text-xl mx-2">Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className="md:mt-0 mt-10">
                    <input type="text" placeholder="exmaple@gmail.com" className="p-3 px-10 mx-2 text-black"/>
                    <button className="bg-black text-white p-3 rounded"> Get Started</button> 
                    <p className="mx-2 my-5">Get to know with latest news...</p>
                </div>
             </div>
        </div>
    );
}