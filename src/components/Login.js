import React, { Component } from 'react';
import Classes from './Login.module.css';
import Axios from '../axios';

class Login extends Component {

    login(e) {
        e.preventDefault();
        let request = {
            mobileNumber: document.getElementById("mobileNumber").value
        };
        console.log(request)
        Axios.post("/login/generateotp", request).then((response) => {
            console.log(response);
            if(response.status === 200)
            {
                localStorage.setItem("mobile", document.getElementById("mobileNumber").value)
                this.props.history.push("/otp");

            }

             
        })
            .catch((err) => {
                console.log(err);
            })
    }
    render() {
        return (
            <div className={Classes.body}>
                <div id="image">
                    <img src={require('../Assets/logistics.jpg')} alt="truck" width="1349" height="300" />
                </div>
                <div id="container-register">
                    <div id="title">
                        <i class="material-icons lock">lock</i> Login
                    </div>
                    <br />
                    <br />
                    <form onSubmit={(e) => this.login(e)}>
                        <div class="input">
                            <div class="input-addon">
                                <i class="material-icons">phone</i>
                            </div>
                            <input id="mobileNumber" name="num" placeholder="mobileNumber" type="tel" required class="validate" />
                        </div>
                        <br />
                        <button type="submit">Click here to send OTP</button>
                    </form>
                    <div class="privacy">
                        <a href="#">Privacy Policy</a>
                    </div>
                    <div class="foot">
                        <footer>
                            <br />
                            <p>&copy; COPYRIGHT 2020 BlockforTrust</p>
                            <p><a href="http://blockfortrust.com/">www.blockfortrust.com</a></p>
                        </footer>
                    </div>

                    <div className="register">
                        Do you already have an account?
            <br />
                        <br />
                        <a href="#"><button id="register-link">Log In here</button></a>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;