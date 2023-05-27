import { Link, Outlet } from "react-router-dom";
import React from "react";
import './SignUp.css';

// TODO: validateForm()

export default function SignIn() {
    return (
        <div className="container">
            <div className="form-container">
                <h1 className="title">Sign Up</h1>
                <form id="MyForm" action="src\pages\Server_Validation.php" onSubmit={validateForm(event)} method="post">
                    <div className="input-container">
                        <label for="username">Username</label>
                        <input type="text" id="username" name="username" placeholder="Enter your username"></input>
                    </div>
                    <div className="input-container">
                        <label for="firstname">First Name</label>
                        <input type="text" id="firstname" name="firstname" placeholder="Enter your first name"></input>
                    </div>
                    <div className="input-container">
                        <label for="lastname">Last Name</label>
                        <input type="text" id="lastname" name="lastname" placeholder="Enter your last name"></input>
                    </div>
                    <div className="input-container">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email"></input>
                    </div>
                    <div className="input-container">
                        <label for="password">Password*</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password"></input>
                    </div>
                    <button className="submit-btn" type="submit">Sign Up</button>
                    <p className="signin-text">Already have an account? <a href="signin">Sign in</a></p>
                </form>
                         <div id="error-message"></div>
                         <script src="./Client_Validation.js"></script>
            </div>
            <Outlet />
        </div>
    )
}














