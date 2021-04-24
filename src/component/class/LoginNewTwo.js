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
import {LoginNewTwo01} from "./LoginNewTwo01";
import {SignUp} from "./SignUp";

class LoginNewTwo extends Component {
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
                <div className="main">
                    <div className="container">
                        <div className="booking-content">
                            <div className="booking-image">
                                <img className="booking-img" src="https://homepages.cae.wisc.edu/~ece533/images/fruits.png" alt="Booking Image"/>
                            </div>
                            <div className="booking-form">
                                <Switch>
                                    <Route exact path='/' component={LoginNewTwo01} />
                                    <Route exact path='/sign-up' component={SignUp} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }

}
export {LoginNewTwo};









