import React, { Component } from 'react';
import axios from "axios";
// import "./Register.css"
import { connect } from 'react-redux';
import { getToken } from "../actions/authActions";

class Register extends Component{
    constructor(props){
        super(props);
        this.state ={
            email:"",
            password:"",
            success:false,
            visible: true,
            showError: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(event){
        this.setState({[event.target.name]:event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("Register")
        axios.post("api/v1/register", {
            email: this.state.email,
            password: this.state.password
        })
            .then(response => {
                console.log(response);
                if (response.data.success) {
                    this.props.getToken(response.data);
                    this.setState({
                        success: response.data.success,
                        accessToken: response.data.accessToken,
                        message: response.data.message
                    })
                    this.props.history.push('/')
                }
                else {
                    this.setState(
                        {
                            success: response.data.success,
                            message: response.data.message
                        }
                    )
                }
            })
            .catch(function (error) {
                console.log("Authorization failed: " + error.message);


            })
    }

    render() {
        return (
            <div>
                <div className="loginWrapper">
                    <form className="registerForm" >
                        <h1>Register</h1>
                        <hr />
                        <div className="eachDiv">
                            <label className="allLabels">Email:</label>
                            <input className="allInputs" type="text" name="email" required={true} onChange={this.handleUserInput} />
                        </div >
                        <div className="eachDiv">
                            <label className="allLabels">Password:</label>
                            <input className="allInputs" type="password" name="password" required={true} onChange={this.handleUserInput} />
                        </div>
                        <div>
                            <input className="message-box" id="message" disabled={true} readOnly={true} value={this.state.message} size="30" />
                        </div>
                        {this.state.showError && (<input className="message-box" id="message" disabled={true} readOnly={true} value={this.state.verify} size="30" />)}
                        <br />
                        <button className="submitButtonRegister" type="submit" disabled={this.state.visible} onClick={this.handleSubmit.bind(this)}>Register</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        accessToken: state.auth.accessToken
    }
}
export default connect(mapStateToProps, { getToken })(Register);