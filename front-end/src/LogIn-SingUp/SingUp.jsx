import React from 'react'
import { Field, reduxForm } from 'redux-form'
import axios from 'axios';

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="fullName"
            component="input"
            type="text"
            placeholder="Full Name"
          />
        </div>
      </div>
     
      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>

      <div>
        <label>Password</label>
        <div>
          <Field
            name="password"
            component="input"
            type="password"
            placeholder="Password"
          />
        </div>
      </div>

      <div>
        <label>Phone Number</label>
        <div>
          <Field
            name="phone"
            component="input"
            type="number"
            placeholder="Phone Number.."
          />
        </div>
      </div>  

      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}
const apiRequest=(values)=>{
  console.log(values);  
  const {fullName, email, phone, password} = values;
  axios.post("http://localhost:3008/singup",{fullName,email,phone,password});
}

export default reduxForm({
  form: 'singup',
  onSubmit:apiRequest, 
})(SimpleForm)
