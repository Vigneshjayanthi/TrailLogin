import React from 'react';
import './SignUp.css'

const signUp = () =>{
    return (
    <div className="Signup col-md-4 col-sm-12">
        <div>
            <h3 style={{color:'green', textAlign:'center'}}>Sign Up</h3>
        </div>
        <form>
            <div className="form-group">
                <label htmlFor="firstName">First Name:&nbsp;<span style={{color:'#fe1212'}}>*</span></label>
                <input type="text" className="form-control" name="firstname" id ="firstName" required/>
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name:&nbsp;<span style={{color:'#fe1212'}}>*</span></label>
                <input type="text" className="form-control" name="lastname" id ="lastName" required/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email Address:&nbsp;<span style={{color:'#fe1212'}}>*</span></label>
                <input type="email" className="form-control" name="Email" id ="email" required/>
            </div>
            <div className="form-group">
                <label htmlFor="phoneNumber">Phone number:&nbsp;<span style={{color:'#fe1212'}}>*</span></label>
                <input type="number" className="form-control" name="Phonenumber" id="phonenumber" required maxLength='10' minLength='10'/>
            </div>

                <button  className="buttonstyle" type ="submit">Submit</button>

        </form> 

    </div>)
}

export  default signUp;