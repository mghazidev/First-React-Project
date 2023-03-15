import React from 'react';
import Sform from './Sform';
import Form from './Form';

function Contact() {
  return (<>
    <div className="my-5">
      <h1 className='text-center'>Contact Us</h1>
    </div>
    <div className='container-fluid '>
      <div className='row'>
        <div className='col-md-6 col-10 mx-auto'>
          {
            Sform.map((val, ind) => {
              return <Form key={ind}
                label={val.label}
                type={val.type}
                placeholder={val.placeholder}
              />
            })
          }
          <div class="col-auto text-center">
            <button type="submit" class="btn btn-dark mb-3 w-50">Submit</button>
          </div>
        </div>
      </div>

    </div>
  </>
  )
}

export default Contact;
