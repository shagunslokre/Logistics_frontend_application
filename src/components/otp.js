import React, { Component } from 'react';
import Classes from './Login.module.css';
import Axios from '../axios';

class Otp extends Component {

    otp(e) {
        e.preventDefault();
        let request = {
            mobileNumber: localStorage.getItem("mobile"),
            otp: document.getElementById("otp").value
        };
        console.log(request);
        Axios.post("/login/validate", request).then((response) => {
            console.log(response);
            if (response.status === 200) {
                this.props.history.push("/home");
            }

            // localStorage.setItem("token",)
        })
            .catch((err) => {
                console.log(err);
                if(err.response.status === 400)
                {
                    alert("Bad Request");
                }
                else if(err.response.status === 401)
                {
                    alert("Authentication Error");
                }
                else if(err.response.status === 403)
                {
                    alert("Authentication Failure");
                }
                else if(err.response.status === 500)
                {
                    alert("API Failure");
                }
            })
    }
    render() {
        return (
            <div className={Classes.body}>
                <div id="image">
                    <img src={require('../Assets/logistics.jpg')} alt="truck" width="1347" height="300" />
                </div>
                <div id="container-register">
                    <div id="title">
                        <i class="material-icons lock">lock</i> Login
                    </div>
                    <br />
                    <br />
                    <form onSubmit={(e) => this.otp(e)}>
                        <div class="input">
                            <div class="input-addon">
                                <i class="material-icons">perm_phone_msg</i>
                            </div>
                            <input id="otp" placeholder="otp" type="password" required class="validate" autocomplete="off" />
                        </div>
                        <br />
                        <input type="submit" value="login" />
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
                </div>
            </div>

        );
    }
}

export default Otp;