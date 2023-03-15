import React from 'react';

import { NavLink } from 'react-router-dom'


function Common(props) {
  return (
    <section className="d-flex align-items-center">
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row'>
              <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div class="col-6 col-sm-8 col-lg-6">
                  <img src={props.imgsrc} className="img-fluid animated bounce" alt="" />
                </div>
                <div class="col-lg-6">
                  <h1 class="display-5 fw-bold lh-1 mb-3">{props.name}</h1>
                  <p class="lead">Let's Learn Together and build something amzaing.</p>
                  <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                    <NavLink type="button" to={props.visit} class="btn btn-dark btn-lg px-4 me-md-2 p-2">{props.btname}</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </section>
  )
}

export default Common;
