import React from 'react';
import NavBarMenu from '../component/NavBar'


type ItemProps ={
   history:any
}

type ItemState ={
    name:string;
    password:any;
    email:any;
    confirm_password:any;
    isRegister: boolean;
}


class Login extends React.Component<ItemProps,ItemState>  {
    constructor(props:ItemProps) {
        super(props);
        this.state = {
            name: '',
            password: '',
            email:'',
            confirm_password:'',
            isRegister: false
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
                    !this.state.isRegister ?

                        <div>
                            <h1>Login</h1>
                            Username
                            <input type="text"
                                placeholder="Enter name"
                                name="user" onChange={(event) => this.setState({ name: event.target.value })} /> <br /> <br />
                            Password
                            <input
                                placeholder="Enter password"
                                type="password" name="password" onChange={(event) => this.setState({
                                    password: event.target.
                                        value
                                })} />
                            <br /> <br />
                            <button onClick={() => { this.login() }} >Login</button>
                            <button onClick={() => { this.setState({ isRegister: true }) }} >Go to Register</button>
                        </div>

                        :

                        <div>
                            <h1>Register</h1>
                            
                            <input type="text"
                                placeholder="User name"
                                name="user" onChange={(event) => this.setState({ name: event.target.value })} /> <br /> <br />
                             
                            <input type="Email"
                                placeholder="email"
                                name="email" onChange={(event) => this.setState({ email: event.target.value })} /> <br
                            /> <br />
                             
                            <input type="password"
                                placeholder="password"
                                name="password" onChange={(event) => this.setState({ password: event.target.value })} /> <br
                            /> <br />
                             
                            <input
                                placeholder="confirm password"
                                type="confirm password" name="confirm password" onChange={(event) => this.setState({
                                    confirm_password: event.target.
                                        value
                                })} />
                            <br /> <br />
                            <button onClick={() => { this.register() }} >Register</button>
                            <button onClick={() => { this.setState({ isRegister: false }) }} >Go to login</button>
                        </div>

                }



            </>
        );
    }
}

export default Login;