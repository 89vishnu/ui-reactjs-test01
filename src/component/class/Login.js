import React, {Component} from 'react';
import axios from 'axios';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName : null,
            password : null,
            usersList : [],
            age : null
        }
    }
    componentDidMount() {
        console.info("componentDidMount");
        axios.get("http://localhost:8001/users/get-all-users").then(response=>{
            console.log("##############################")
            console.log(response);
            this.setState({usersList:response.data})
        });
    }

    signUp(e){
        console.log(e);
        var userDetails = {
            userName : this.state.userName,
            password : this.state.password,
            age : this.state.age
        }
        console.log(userDetails);
        axios.post("http://localhost:8001/users/save-users", userDetails).then(response=>{
            console.log("111111111111111111111111111");
            console.log(response);
            this.setState({usersList:this.state.usersList.concat(response.data)})
           //this.setState({usersList:response.data})
        });
    }

    inputSet=(e)=> {
        console.log(e);
        console.log(e.target.name);
        console.log(e.target.value);
        //console.log(e.target.value());
        this.setState({[e.target.name] : e.target.value});
        //this.setState({[e.target.name] : e.target.value});
    }

    render() {
        return(
            <div>
                <div>
                    <div>Login</div>
                    <div>User Name:<input type='text'></input></div>
                    <div>Password:<input type='text'></input></div>
                    <div>
                        <button onClick={this.login}>Submit</button>
                    </div>
                </div>
                <div>
                    <div>Sign Up</div>
                    <div>User Name:<input type='text' name="userName" onChange={this.inputSet}></input></div>
                    <div>Age :<input type='text' name="age" onChange={this.inputSet}></input></div>
                    <div>
                        <button onClick={(e) => {
                            this.signUp(e);}} >Sign Up</button>
                    </div>
                </div>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <td>ID</td>
                            <td>USER NAME</td>
                            <td>AGE</td>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.usersList.map((itm, k) => {
                            return itm != null ? (
                                <tr>
                                    <td>{itm.id}</td>
                                    <td>{itm.username}</td>
                                    <td>{itm.age}</td>
                                </tr>
                            ) : <tr></tr>
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export {Login};
