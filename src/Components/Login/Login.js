import React, {Component} from "react";
import "./Login.css";
import axios from "axios";

class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            password: "",
        }
    }

    manageInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password
        }

        axios.post("https://djorg1.herokuapp.com/api-token-auth/", user)
        .then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err)
        })
    }

 
    render() {
        return (
            <div className="Login-container">
                <div className="Login-header">Login Here</div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.manageInput} placeholder="Username" name="username" value={this.state.username} type="text"/>
                        <input onChange={this.manageInput} placeholder="Password" name="password" value={this.state.password} type="password"/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;