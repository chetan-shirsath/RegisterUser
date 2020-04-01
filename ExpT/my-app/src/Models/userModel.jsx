import React from "react";

export class userModel extends React.Model{
    constructor(props){
        super(props);
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
