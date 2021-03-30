

import React, { Component } from 'react';
//import { Col, Container, Row } from 'react-bootstrap';
import './SignIn.css';



class signIn extends Component {
    state = {
        Username:null,
        password:null,
        ErrorMessage: null
    }
     
    submitHandler = (e) => {
        e.preventDefault()
        console.log(e.target.elements.username.value," ",e.target.elements.password.value)
        if(e.target.elements.username.value==="vignesh" && e.target.elements.password.value==="Vikki@6498"){
                this.props.history.push('/');
        }
        else{
            this.setState({ErrorMessage:"The username or password is incorrect"})
        }
    }

    render() {

        return (

            <div className="SignIn col-md-4 col-sm-12">
                <div className="content">
                    <h3>LOGIN</h3>
                </div>
                <form onSubmit={(event) => { this.submitHandler(event) }}>
                    <div className="form-group">
                        <b> <label htmlFor="name">Username:</label></b>
                        <input type="text" name="username" id="name" className="form-control" onChange={(event)=>{this.setState({Username:{...event.target.value}})}}></input>
                    </div>
                    <div className="form-group">
                        <b> <label htmlFor="password">Password:</label></b>
                        <input type="password" name="password" id="password" className="form-control" onChange={(event)=>{this.setState({password:{...event.target.value}})}}></input>
                    </div>
                    <div className="form-group">
                        <button type="submit">Submit</button>
                    </div>
                    {<div className={this.state.ErrorMessage !== null ? 'error' : null}><p>{this.state.ErrorMessage}</p></div>}
                </form>

            </div>
        )


    }
}

export default signIn;

