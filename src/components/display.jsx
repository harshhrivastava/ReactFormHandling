import React from 'react';
import { useLocation } from 'react-router-dom';
import '../bootstrap.css';
import './display.css';

const Display = () => {
  const {state} = useLocation();
  
  const {fname, dob, mobile, address, states, pin} = state;

  return(
      <>
        {state && <div className='container-fluid'>
            <div className='row'>
                <div className='col-6'>
                    <label htmlFor='fname'>Name</label>
                </div>
                <div className='col-6'>
                    <p id='fname'>{fname}</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <label htmlFor='dob'>Date of Birth</label>
                </div>
                <div className='col-6'>
                    <p id='dob'>{dob}</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <label htmlFor='mobile'>Mobile</label>
                </div>
                <div className='col-6'>
                    <p id='mobile'>{mobile}</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <label htmlFor='address'>Address</label>
                </div>
                <div className='col-6'>
                    <p id='address'>{address}</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <label htmlFor='states'>State</label>
                </div>
                <div className='col-6'>
                    <p id='states'>{states}</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <label htmlFor='pin'>Pincode</label>
                </div>
                <div className='col-6'>
                    <p id='pin'>{pin}</p>
                </div>
            </div>
        </div>}
      </>
  );
};

export default Display;
