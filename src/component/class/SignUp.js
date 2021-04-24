import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import '../css/custom/sign_up.css';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName : null,
            lastName : null,
            emailId : null,
            phoneNumber : null,
            password : null,
            usersList : [],
            age : null,
            referrer : null
        }
    }
    render() {
        return(
            <form id="booking-form">
                <h2>Booking place for your dinner!</h2>
                <h2>Sign Up</h2>
                <div className="form-group form-input">
                    <input type="text" name="firstName" id="firstName" onChange={this.inputSet} required/>
                    <label htmlFor="firstName" className="form-label">First Name</label>
                </div>
                <div className="form-group form-input">
                    <input type="text" name="lastName" id="lastName" onChange={this.inputSet} required/>
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                </div>
                <div className="form-group form-input">
                    <input type="text" name="emailId" id="email" onChange={this.inputSet} required/>
                    <label htmlFor="email" className="form-label">Email</label>
                </div>
                <div className="form-group form-input">
                    <input type="text" name="password" id="password" onChange={this.inputSet} required/>
                    <label htmlFor="password" className="form-label">password</label>
                </div>
                <div className="form-group form-input">
                    <input type="text" name="phoneNumber" id="phoneNumber" onChange={this.inputSet} required/>
                    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                </div>
                <div className="form-submit">
                    <div onClick={(event) => {
                        this.signUp(event);}} className="sign-up-submit button-bg-color-blue">
                        Sign Up
                    </div>
                </div>
            </form>

        )
    }

    inputSet=(e)=> {
        this.setState({[e.target.name] : e.target.value});
    }

    signUp(event) {
        console.log(event);
        var userDetails = {
            firstName : this.state.firstName,
            lastName: this.state.lastName,
            password: this.state.password,
            emailId : this.state.emailId,
            phoneNumber : this.state.phoneNumber
        }
        // console.log(userDetails);
        // var headers = {
        //     "content-type": "application/json",
        //     "x-accesstoken" : "",
        //     "x-refreshtoken" : "mKkCWLIG6PRrfrgyd9xKahzrlBhVAWsWhZ6diNjd0wNa89TNixWCOHDxoC2AzOnmTJNCTZe7hIYURNzzCn/GHyteuijWXXj0jFx+kGCX83neHUiEOdXeADC0LjXgCZ2NISYZ3B/eS2h+NpG9HzfJpYEIB/9/aLXWhxHf7R+xT2wH4Wr5i+LR0Yml2BJtq4be"
        // }
        // console.log("headers 1: "+headers.access_token);
        // axios({
        //     method:"post",
        //     url:"http://localhost:8001/users/save-users",
        //     data:{userDetails},
        //     headers:{headers}
        // })
       // var config = { headers: { 'Authorization': 'Bearer ' + "mKkCWLIG6PRrfrgyd9xKahzrlBhVAWsWhZ6diNjd0wNa89TNixWCOHDxoC2AzOnmTJNCTZe7hIYURNzzCn/GHyteuijWXXj0jFx+kGCX83neHUiEOdXeADC0LjXgCZ2NISYZ3B/eS2h+NpG9HzfJpaazwLLVStqZVcodkGSsssQH4Wr5i+LR0Yml2BJtq4be" } }
        //axios.post("http://localhost:8001/users/save-users", { params: { UserId: 1 } }, config)

        // var config = {
        //     headers: { 'authorization': 'Bearer ksdjfglksgflksgsjdhglaslfkhgasf' }
        // }
        //
        // var accesstoken = 'sdfsdfsdfsdsd';

        // var config = {
        //     headers: {accesstoken}
        // }
        //
        // let instance = axios.create();
        // instance.defaults.headers.common['jwt'] = "zzfadadfasdasdas";
        // instance.get('http://localhost:8001/users/get-all-users')
        //     .then(response => {
        //         console.log('Response of logout', response);
        //
        //     });

        //console.log(" config : "+config.toString())

        //return axios.get("http://localhost:8001/users/get-all-users", "adasdasd")


        // var accesstoken = "adasd";
        // const config = {
        //     headers : {
        //         Authorization : {
        //             "x-accesstoken" : "mKkCWLIG6PRrfrgyd9xKahzrlBhVAWsWhZ6diNjd0wNa89TNixWCOHDxoC2AzOnmTJNCTZe7hIYURNzzCn/GHyteuijWXXj0jFx+kGCX83neHUiEOdXeADC0LjXgCZ2NISYZ3B/eS2h+NpG9HzfJpaazwLLVStqZVcodkGSsssQH4Wr5i+LR0Yml2BJtq4be",
        //             "x-refreshtoken" : "mKkCWLIG6PRrfrgyd9xKahzrlBhVAWsWhZ6diNjd0wNa89TNixWCOHDxoC2AzOnmTJNCTZe7hIYURNzzCn/GHyteuijWXXj0jFx+kGCX83neHUiEOdXeADC0LjXgCZ2NISYZ3B/eS2h+NpG9HzfJpYEIB/9/aLXWhxHf7R+xT2wH4Wr5i+LR0Yml2BJtq4be"
        //         }
        //     }
        // }


        // axios.post("http://localhost:8001/users/save-users",
        //     userDetails,
        //     axios.defaults.headers=headers).then(response=>{
        //     console.log("111111111111111111111111111");
        //     console.log(response);
        //     this.setState({usersList:this.state.usersList.concat(response.data)})
        //     //this.setState({usersList:response.data})
        // });

        // const accesstoken = "mKkCWLIG6PRrfrgyd9xKahzrlBhVAWsWhZ6diNjd0wNa89TNixWCOHDxoC2AzOnmTJNCTZe7hIYURNzzCn/GHyteuijWXXj0jFx+kGCX83neHUiEOdXeADC0LjXgCZ2NISYZ3B/eS2h+NpG9HzfJpaazwLLVStqZVcodkGSsssQH4Wr5i+LR0Yml2BJtq4be";
        // const url = "http://localhost:8001/users/save-users";
        // axios.({
        //     baseURL: url,
        //     userDetails,
        //     headers: {
        //         Authorization: `Bearer ${accesstoken}`
        //     }
        // });

        var api = axios.create({
            baseURL:'http://localhost:8001/users/get-all-users',
            userDetails,
            headers:{
                'X-auth-key':"token123"
            }
        });

        console.log(" api : "+api.get());

        // axios.post("http://localhost:8001/users/save-users",
        //     userDetails,
        //     axios.defaults.headers=headers).then(response=>{
        //     console.log("111111111111111111111111111");
        //     console.log(response);
        //     this.setState({usersList:this.state.usersList.concat(response.data)})
        //     //this.setState({usersList:response.data})
        // });
    }
}

export {SignUp}
