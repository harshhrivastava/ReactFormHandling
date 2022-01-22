import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import '../bootstrap.css';
import './form.css';

const Form = () => {

  let navigate = useNavigate();

  const [info, setInfo] = useState({
    fname:'',
    dob:'',
    mobile:'',
    address:'',
    states:undefined,
    pin:''
  });

  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {

    console.log(formErrors);
    console.log(info);

    if(Object.keys(formErrors).length === 0 && isSubmit) {
      navigate("/display", { state: {...info} });
      setInfo({fname:'', dob:'', mobile:'', address:'', states:null, pin:''});
    }

  }, [formErrors]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfo({...info, [name]:value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(info));
    setIsSubmit(true);
  }

  const validate = (info) => {
      const errors = {};
      const regexMobile = /^[1-9]{1}[0-9]{9}$/g;
      const regexPin = /^[1-9]{1}[0-9]{5}$/g;
      const today = new Date();
      const currDay = today.getDate();
      const currMonth = today.getMonth()+1;
      const currYear = today.getYear()+1900;

      const year = parseInt(info.dob.slice(0, 4));
      const month = parseInt(info.dob.slice(5, 7));
      const day = parseInt(info.dob.slice(8, 10));

      console.log(year,month,day,currYear,currMonth,currDay,today)

      if(!info.fname){
        errors.fname = 'This field is mandatory.';
      }

      if(!info.dob){
        errors.dob = 'This field is mandatory.';
      } else if(year > currYear) {
        errors.dob = "Enter a valid date.";
      } else if(year === currYear && month > currMonth) {
        errors.dob = "Enter a valid date.";
      } else if(year === currYear && month === currMonth && day > currDay) {
        errors.dob = "Enter a valid date.";
      }

      if(!info.mobile){
        errors.mobile = 'This field is mandatory.';
      } else if (!regexMobile.test(info.mobile)) {
        errors.mobile = "Enter a valid mobile number.";
      }
      
      if(!info.address){
        errors.address = 'This field is mandatory.';
      }

      if(!info.states){
        errors.states = 'This field is mandatory.';
      }

      if(!info.pin){
        errors.pin = 'This field is mandatory.';
      } else if (!regexPin.test(info.pin)) {
        errors.pin = "Enter a valid pincode.";
      }
      
      return errors;
  }

  return (
    <>
      <div className='container-fluid form-container needs-validation'>
        <form method='post' action='/'>
          <div className='mb-3 row'>
            <label className='form-label' htmlFor='fname'>Full Name</label>
            <input className='form-control' type='text' onChange={handleInput} autoComplete='off' name='fname' value={info.fname} required/>
          </div>
          <div className='invalid'>{formErrors.fname}</div>
          <div className='mb-3 row'>
            <label className='form-label' htmlFor='dob'>Date of birth</label>
            <input className='form-control' type='date' onChange={handleInput} autoComplete='off' name='dob' value={info.date} required/>
          </div>
          <div className='invalid'>{formErrors.dob}</div>
          <div className='mb-3 row'>
            <label className='form-label' htmlFor='mobile'>Mobile Number</label>
            <input className='form-control' type='number' pattern="[0-9]*" inputMode="numeric" min='1000000000' max='9999999999' onChange={handleInput} autoComplete='off' name='mobile' value={info.mobile} required/>
          </div>
          <div className='invalid'>{formErrors.mobile}</div>
          <div className='mb-3 row'>
            <label className='form-label' htmlFor='address'>Address</label>
            <input className='form-control' type='text' onChange={handleInput} autoComplete='off' name='address' value={info.address} required/>
          </div>
          <div className='invalid'>{formErrors.address}</div>
          <div className='mb-3 row'>
            <label className='form-label' htmlFor='State'>State</label>
            <select className='form-control form-select' onChange={handleInput} name='states' value={info.states}>
            <option>{undefined}</option>
            <option value="Punjab">Punjab</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Kerala">Kerala</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
          </select>
          </div>
          <div className='invalid'>{formErrors.states}</div>
          <div className='mb-3 row'>
            <label className='form-label' htmlFor='pin'>Pincode</label>
            <input className='form-control' type='number' pattern="[0-9]*" inputMode="numeric" minLength={6} maxLength={6} onChange={handleInput} autoComplete='off' name='pin' value={info.pin} required/>
          </div>
          <div className='invalid'>{formErrors.pin}</div>
          <div className='mb-3 row'>
            <button className='btn btn-primary btn-block' type='submit' onClick={handleSubmit}>Submit Form</button>
          </div>
        </form>
      </div>
    </>
  );
};

//All fields are mandatory
//Alert Box If The User Doesn't Fills A Field and Presses Submit Button
//If all fields are filled and user presses submit, new ui should come up and details should be displayed.

export default Form;

/*
Yup - Form Validations
React Router
HandleSubmit
History.push
*/