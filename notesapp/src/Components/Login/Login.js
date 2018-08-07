import React, {Component} from "react";
import "./Login.css"

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

 
    render() {
        return (
            <div className="Login-container">
                <div className="Login-header">Login Here</div>
                <div>
                    <form>
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