import React, {Component} from "react";
import {Link} from "react-router-dom";

class LoginNewTwo01 extends Component {
    render() {
        return (
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
        );
    }
}

export {LoginNewTwo01}
