import React from "react";
import axios from "axios";

export class Register extends React.Component{
    constructor(props){
        super(props);
       /* const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
  */
        this.onChangefName = this.onChangefName.bind(this);
        this.onChangelName = this.onChangelName.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangepass = this.onChangepass.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName : '',
            lastName : '',
            email : '',
            password : ''
        }
    }

    onChangefName(e){
        this.setState({
            firstName : e.target.value 
        })
    }
    onChangelName(e){
        this.setState({
            lastName : e.target.value
        })
    }
    onChangeemail(e){
        this.setState({
            email : e.target.value
        })
    }
    onChangepass(e){
        this.setState({
            password : e.target.value
        })
    }
 
    onSubmit(e) {
        e.preventDefault();

        const user = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            email : this.state.email,
            password : this.state.password
        }
        
        console.log(e.target);
        axios.post('http://localhost:5000/api/register',user)
        .then(res => {console.log(res); alert(res.data.success);})
        .catch(res => alert(res.success));
        this.setState({
            firstName : '',
            lastName : '',
            email : '',
            password : ''
        })  
    } 
    

    render(){
        return <div className="base-container">
            <div className="header"> Register </div>
            <div className="content">
                <form onSubmit = {this.onSubmit}>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="firstName"> First Name </label>
                        <input type="text" required name="firstName" value={this.state.firstName} onChange={this.onChangefName} placeholder="First Name"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName"> Last Name </label>
                        <input type="text" required name="lastName" value={this.state.lastName} onChange={this.onChangelName} placeholder="Last Name"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email"> Email </label>
                        <input type="email" required name="email" value={this.state.email} onChange={this.onChangeemail} placeholder="Email"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"> Password </label>
                        <input type="text" required name="password" value={this.state.password} onChange={this.onChangepass} placeholder="Password"></input>
                    </div>
                    <div className="form-group">
                    <button type="Submit" className="FormField__Button">Register</button>
                    </div>
                </div>
                </form> 
            </div>
        </div>
    }
}