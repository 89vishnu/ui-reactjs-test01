import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation,
    useParams
} from "react-router-dom";
import axios from "axios";

class LoginNewOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName : null,
            lastName : null,
            password : null,
            usersList : [],
            age : null,
            referrer : null
        }
    }

    render() {
        return(
            <Router>
                <ModalSwitch/>
            </Router>
        )
    }

}
export {LoginNewOne};

function ModalSwitch() {
    let location = useLocation();
    console.log("Location : "+location.toString());
    return(
        <div className="main">
            <div className="container">
                <div className="booking-content">
                    <div className="booking-image">
                        <img className="booking-img" src="https://homepages.cae.wisc.edu/~ece533/images/fruits.png" alt="Booking Image"/>
                    </div>
                    <div className="booking-form">
                        <Switch location={location}>
                            <Route exact path="/" children={<Login/>}/>
                            <Route exact path="/sign-up" children={<SignUp/>}/>
                            <Route exact path="/forgot-password" children={<ForgotPassword/>}/>
                            <Route path="/gallery" children={<Gallery/>} />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ForgotPassword() {
    return(
        <form id="booking-form">
            <h2>Booking place for your dinner!</h2>
            <h2>Forgot Password send one time passcode to </h2>
            <div className="form-group form-input">
                <input type="text" name="email" id="email" required/>
                <label htmlFor="email" className="form-label">Email</label>
            </div>
            <div className="form-submit">
                <input type="submit" value="continue" className="submit button-bg-color-blue" id="submit" name="submit"/>
            </div>
        </form>
    )
}

function Gallery() {
    return(
        <div>Hai 1</div>
    )
}


function SignUp() {
    return(
        <form id="booking-form">
            <h2>Booking place for your dinner!</h2>
            <h2>Sign Up</h2>
            <div className="form-group form-input">
                <input type="text" name="firstName" id="firstName" required/>
                <label htmlFor="firstName" className="form-label">First Name</label>
            </div>
            <div className="form-group form-input">
                <input type="text" name="lastName" id="lastName" required/>
                <label htmlFor="lastName" className="form-label">Last Name</label>
            </div>
            <div className="form-group form-input">
                <input type="text" name="email" id="email" required/>
                <label htmlFor="email" className="form-label">Email</label>
            </div>
            <div className="form-group form-input">
                <input type="text" name="phoneNumber" id="phoneNumber" required/>
                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
            </div>
            <div className="form-submit">
                <input type="submit" onClick={this.signUp1()}  value="Sign Up" className="submit button-bg-color-blue" id="submit" name="submit"/>
                {/*<div>*/}
                {/*    <button onClick={(e) => {*/}
                {/*        this.signUp(e);}} >Sign Up</button>*/}
                {/*</div>*/}
            </div>
        </form>
    )
}

class Login {
    render() {
    return(
        <form id="booking-form">
            <h2>Booking place for your dinner!</h2>
            <h2>Login</h2>
            <div className="form-group form-input">
                <input type="text" name="name" id="name" value="" required/>
                <label htmlFor="name" className="form-label">Email</label>
            </div>
            <div className="form-group form-input">
                <input type="number" name="phone" id="phone" value="" required/>
                <label htmlFor="phone" className="form-label">Password</label>
            </div>
            <div className="form-submit padding-top-fixed-image">
                <input type="submit" value="Sign In" className="submit button-bg-color-blue" id="submit" name="submit"/>
            </div>
            <div className="padding-top-fixed-image">
                <td><Link className="sign-up-link" to="/sign-up">Sign Up</Link></td>
                <td className="forgot-password"><Link className="forgot-pw-link" to="/forgot-password">Forgot Password</Link></td>
            </div>
            <div className="form-submit padding-top-fixed-image">
                <input type="submit" value="FaceBook" className="submit button-bg-color-blue fb-submit" id="submit" name="submit"/>
            </div>
            <div className="form-submit padding-top-fixed-image">
                <input type="submit" value="Google" className="submit button-bg-color-blue google-submit" id="submit" name="submit"/>
            </div>
            <div className="form-submit padding-top-fixed-image">
                <input type="submit" value="Youtube" className="submit button-bg-color-blue youtube-submit" id="submit" name="submit"/>
            </div>
        </form>
    )
    }
}

export {Login}
