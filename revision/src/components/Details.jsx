import React from "react";
import laptop from '../assets/images/laptop.jpg'

export default function Details() {
    return (
        <div className="flex flex-wrap items-center justify-center py-10 max-w-[1240px] mx-auto md:grid grid-cols-2">
            <div className="col-span-1 md:w-[70%] w-[50%]">
                <img src={laptop}></img>
            </div>
            <div className="col-span-1 md:text-left text-center p-2">
                <h1 className="text-3xl text-orange-500 font-bold">About Us</h1>
                <p className="my-5">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut molestiae dolore asperiores vel totam accusantium quisquam facilis maiores est quam dignissimos enim, suscipit quos laboriosam rem autem explicabo exercitationem temporibus.
                </p>
                <button className="bg-black text-white p-3 rounded"> Get Started</button>
            </div>
        </div>
    );
}