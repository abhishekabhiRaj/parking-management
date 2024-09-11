import React from "react";
import { BsFacebook, BsGithub, BsGoogle, BsTwitter } from "react-icons/bs";

const RegisterForm = () => {
    return (
        <form>
            <div className="text-center mb-3">
                <p>Sign up with:</p>
                <button type="button" className="btn btn-link btn-floating mx-1">
                    <BsFacebook />
                </button>
                <button type="button" className="btn btn-link btn-floating mx-1">
                    <BsGoogle />
                </button>
                <button type="button" className="btn btn-link btn-floating mx-1">
                    <BsTwitter />
                </button>
                <button type="button" className="btn btn-link btn-floating mx-1">
                    <BsGithub />
                </button>
            </div>
            <p className="text-center">or:</p>
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="registerName">Name</label>
                <input type="text" id="registerName" className="form-control" />
            </div>
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="registerUsername">Username</label>
                <input type="text" id="registerUsername" className="form-control" />
            </div>
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="registerEmail">Email</label>
                <input type="email" id="registerEmail" className="form-control" />
            </div>
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="registerPassword">Password</label>
                <input type="password" id="registerPassword" className="form-control" />
            </div>
            {/* <div className="form-outline mb-4">
                <input type="password" id="registerRepeatPassword" className="form-control" />
                <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
            </div> */}
            <div className="form-check d-flex justify-content-center mb-4">
                <input className="form-check-input me-2" type="checkbox" id="registerCheck" checked />
                <label className="form-check-label" htmlFor="registerCheck">
                    I have read and agree to the terms
                </label>
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-3">Sign up</button>
        </form>
    );
}

export default RegisterForm;
