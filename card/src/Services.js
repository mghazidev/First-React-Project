import React from 'react';
import Data from './Data';
import Card from './Card';

function Services() {
  return (
    <>
    <div className="my-5">
      <h1 className='text-center'>Services</h1>
    </div>
      <div className='container-fluid mb-5'>
        <div className='row '>
          <div className='col-10 mx-auto'>
            <div className='row '>
            <div className='d-flex flex-wrap col-md-12 mx-auto '>
              {
                Data.map((value, index) => {
                  return <Card 
                    key={index}
                    imgsrc = {value.imgsrc}
                    title = {value.title}
                  />
                })
              }
            </div>
          </div>
        </div>
      </div>
      </div>
      </>
  )
}

export default Services;
