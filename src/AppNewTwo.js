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
//import {Login} from "./LoginNewOne";

class AppNewTwo extends Component {
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
                            <div>
                                <h2>Welcome to React Router Tutorial</h2>
                                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                    <ul className="navbar-nav mr-auto">
                                        <li><Link to={'/'} className="nav-link"> Home </Link></li>
                                        <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
                                        <li><Link to={'/about'} className="nav-link">About</Link></li>
                                    </ul>
                                </nav>
                                <hr />
                                <Switch>

                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Router>
        )
    }

}
export {AppNewTwo};









