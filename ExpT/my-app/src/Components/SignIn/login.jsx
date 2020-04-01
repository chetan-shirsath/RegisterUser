import React from "react";

export class Login extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className="base-container">
            <div className="header"> Login </div>
            <div className="content">
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="userName"> User Name </label>
                        <input type="text" name="userName" placeholder="User Name"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"> Password </label>
                        <input type="text" name="password" placeholder="Password"></input>
                    </div>
                    <button type="button" className="FormField__Button">Register</button>
                </div>
            </div>
            
        </div>
    }
}