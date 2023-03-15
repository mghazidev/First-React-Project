import React from 'react';

function Contact(props) {
  return (<>
    <div className='container-fluid '>
      <div className='row'>
        <div className='col-md-12 col-10 mx-auto'>
          <form>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">{props.label}</label>
              <input type={props.type} class="form-control" id="exampleFormControlInput1" placeholder={props.placeholder} required/>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
  )
}

export default Contact;
