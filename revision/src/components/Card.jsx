import React from "react";
import Data from "./Data";
import Plans from "./Plans";

export default function Card() {
    return (
        <>
        <div className="max-w-[1240px] mx-auto py-10">
            <div className="md:grid grid-cols-3 gap-5 p-5">
                {
                    Data.map((val, ind) => {
                        return <Plans key={ind} 
                            imgsrc={val.imgsrc}
                            title={val.title}
                            rates={val.rates}
                            info={val.info}
                        />
                    })
                }
            </div>
        </div>
        </>
     )
}