import React, { Component } from 'react';
import NavBarMenu from '../component/NavBar'


type DataProps ={
    history:any
}

type DataState ={
    name:string;
    password:any;
    email:any;
    confirm_password:any;
    login: boolean;
}

class Register extends Component<DataProps,DataState> {
    constructor(props:DataProps) {
        super(props);
        this.state = {
            name: '',
            password: '',
            email: '',
            confirm_password: '',
            login: false,
        }
    }

    login() {
        console.warn(this.state)
        fetch("http://localhost:3000/login?q=" + this.state.name).then((data) => {
            data.json().then((resp) => {
                console.warn("resp", resp)
                if (resp.length > 0) {
                    localStorage.setItem('login', JSON.stringify(resp))
                    console.warn(this.props.history.push('/'))
                }
                else {
                    alert("Pelase check username and password")
                }
            })
        })
    }


    register() {
        console.warn(this.state)
        fetch("http://localhost:3000/register?q=" + this.state.name).then((data) => {
            data.json().then((resp) => {
                console.warn("resp", resp)
                if (resp.length > 0) {
                    localStorage.setItem('login', JSON.stringify(resp))
                    console.warn(this.props.history.push('/'))
                }
                else {
                    alert("Pelase check username and password")
                }
            })
        })
    }

    render() {
        return (
            <>
                <NavBarMenu />

                {
                    !this.state.login ?
                        <div>
                            <h1>Register</h1>
                            <input type="text"
                                placeholder="User name"
                                name="user" onChange={(event) => this.setState({ name: event.target.value })} /> 
                                <br/> <br />

                            <input type="Email"
                                placeholder="email"
                                name="email" onChange={(event) => this.setState({ email: event.target.value })} />
                            <br/> <br />

                            <input type="password"
                                placeholder="password"
                                name="password" onChange={(event) => this.setState({ password: event.target.value })
                                } /> 
                                <br/> <br />

                            <input placeholder="confirm password" type="confirm_password" name="confirm_password" onChange={(event) => this.setState({
                                    confirm_password: event.target.
                                        value
                                })} />

                            <br /> <br />
                            <button onClick={() => { this.register() }} >Register</button>
                            <button onClick={() => { this.setState({ login: true }) }} >Go to Register</button>
                        </div>
                        :
                        <div>

                            <h1>Login</h1>
                            Username
                            <input type="text"
                                placeholder="Enter name"
                                name="user" onChange={(event) => this.setState({ name: event.target.value })} /> 
                                <br/> <br />
                            Password
                            <input
                                placeholder="Enter password"
                                type="password" name="password" onChange={(event) => this.setState({
                                    password: event.target.
                                        value})} />
                                <br /> <br />
                            <button onClick={() => { this.login() }} >Login</button>
                            <button onClick={() => { this.setState({ login: false }) }} >Go to login</button>
                        </div>
                }

            </>
        );
    }
}

export default Register;