import React from "react";

export default function Plans(props) {
    return (
        
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={props.imgsrc} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>{props.title}</h2>
                    <p className='text-center text-4xl font-bold'>${props.rates}</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>{props.info}</p>
                        <p className='py-2 border-b mx-8'>{props.info}</p>
                        <p className='py-2 border-b mx-8'>{props.info}</p>
                    </div>
                    <button className='bg-gray-800 w-[200px] text-white rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
               
    );
}