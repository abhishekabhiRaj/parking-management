import React from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();
    return (
        <form>
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="loginName">Email or username</label>
                <input type="email" id="loginName" className="form-control" />
            </div>
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="loginPassword">Password</label>
                <input type="password" id="loginPassword" className="form-control" />
            </div>
            <div className="row mb-4">
                <div className="col-md-6 d-flex justify-content-center">
                    <div className="form-check mb-3 mb-md-0">
                        <input className="form-check-input" type="checkbox" id="loginCheck" checked />
                        <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <a href="#!">Forgot password?</a>
                </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
            <div className="text-center">
                <p>Not a member? <a className="text-primary" onClick={() => navigate("/register")}>Register</a></p>
            </div>
        </form>
    );
}

export default LoginForm;
