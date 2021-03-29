

import  React,{ Component } from 'react';
//import { Col, Container, Row } from 'react-bootstrap';
import './SignIn.css';



class signIn extends Component{
    state={
        Username:"",
        password:"",
        ErrorMessage:null
    }
   
submitHandler=(e)=>{
  e.preventDefault()
  //  console.log(e.target.elements.username.value)
    this.setState({Username:e.target.elements.username.value, password:e.target.elements.password.value, ErrorMessage:'The username or password entered is incorrect'})
   // console.log(this.state.Username+ ' '+ this.state.password)
   
}

    render(){
    //   const styling=[];
    //   if(this.state.ErrorMessage!==' '){
    //       styling.push('error')
    //   }
    //   else{
    //       styling.push('')
    //   }
 
    return (
       
        <div className="SignIn col-md-4 col-sm-12">
        <div className="content">
            <h3>Login</h3>
            {/* {this.state.Username}
            {this.state.password} */}
        </div>
            <form onSubmit={(event)=>{this.submitHandler(event)}}>
                <div className="form-group">
                   <b> <label htmlFor="name">Username:</label></b>
                    <input type="text" name="username" id= "name" className="form-control"></input>
                </div>
                <div className="form-group">
                  <b> <label htmlFor="password">Password:</label></b> 
                    <input type="password" name="password"id ="password" className="form-control"></input>
                </div>
                <div className="form-group">
                    <button type="submit">Submit</button>
                </div>     
                {this.state.Username==="vignesh" && this.state.password==="Vikki@6498" ? window.location.href="/sample":
                <div className={this.state.ErrorMessage!== null? 'error':null}><p>{this.state.ErrorMessage}</p></div>}
            </form>
           
    </div>
    )


}
}

export default signIn;

