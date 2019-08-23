import React, { Component } from 'react';
import axios from "axios";
// import "./Register.css"
import { connect } from 'react-redux';
import { getToken } from "../../actions/authActions";

class Register extends Component{
    constructor(props){
        super(props);
        this.state ={
            name:"",
            email:"",
            password:"",
            success:false
        }
        this.handleSubmit = this.handleSubmid.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(event){
        this.setState({[event.target.name]:event.target.value});
    }

    handleSubmit(event){

    }

    render(){
        return(
            <div className="container">
                <form className = "registerForm">
                    <h1 >Register</h1>
                    <hr />
                    <div className="input-field">
                        <label className="name">name</label>
                        <input type="name" id="name" onChange={this.handleUserInput} />
                    </div>
                    <div className="input-field">
                        <label className="email">email</label>
                        <input type="email" id="email" onChange={this.handleUserInput} />
                    </div>
                    <div className="input-field">
                        <label className="password">password</label>
                        <input type="password" id="password" onChange={this.handleUserInput}/>
                    </div>
                    <div className="input-field">
                        <button className ="btn gray lighten-1 z-depth-0"> Register </button>
                    </div>                    
                </form>
            </div>

        );
    }
}

export default Register;