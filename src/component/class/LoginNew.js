import React, {Component} from 'react';
import axios from 'axios';
import '../css/style.css';
//import './form-img.jpg';
import '../css/custom/login.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class LoginNew extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName : null,
            password : null,
            usersList : [],
            age : null,
            referrer : null
        }
    }

    signUp(e){
        console.log(e);
        var userDetails = {
            userName : this.state.userName,
            password : this.state.password,
            age : this.state.age,
            referrer : "/signup"
        }


        // console.log(userDetails);
        // axios.post("http://localhost:8001/users/save-users", userDetails).then(response=>{
        //     console.log("111111111111111111111111111");
        //     console.log(response);
        //     this.setState({usersList:this.state.usersList.concat(response.data)})
        //     //this.setState({usersList:response.data})
        // });
    }

    render() {
        return(
            <Router>
            <div className="main">

                <div className="container">
                    <div className="booking-content">
                        <div className="booking-image">
                            <img className="booking-img" src="https://homepages.cae.wisc.edu/~ece533/images/fruits.png" alt="Booking Image"/>
                        </div>
                        <div className="booking-form">
                            <form id="booking-form">
                                <h2>Booking place for your dinner!</h2>
                                <div className="form-group form-input">
                                    <input type="text" name="name" id="name" value="" required/>
                                    <label htmlFor="name" className="form-label">Email</label>
                                </div>
                                <div className="form-group form-input">
                                    <input type="number" name="phone" id="phone" value="" required/>
                                    <label htmlFor="phone" className="form-label">Password</label>
                                </div>

                                <div className="form-submit">
                                    <input type="submit" value="Sign In" className="submit" id="submit" name="submit"/>
                                </div>
                                <div onClick={(e) => {
                                        this.signUp(e);}} >Sign Up
                                </div>
                                <div>
                                    <Link to="/sign-up">Sign Up</Link>
                                </div>
                                <div>
                                    <div>Forgot Password</div>
                                </div>
                                <Switch>
                                    <Route exact path="/sign-up">
                                        <SignUp/>
                                    </Route>
                                    {/*<Route path="/about">*/}
                                    {/*    <About />*/}
                                    {/*</Route>*/}
                                    {/*<Route path="/dashboard">*/}
                                    {/*    <Dashboard />*/}
                                    {/*</Route>*/}
                                </Switch>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            </Router>

        )
    }
}

function SignUp() {
    return (
        <div>
            <h2>Sign Up</h2>
        </div>
    );
}

export {LoginNew};
