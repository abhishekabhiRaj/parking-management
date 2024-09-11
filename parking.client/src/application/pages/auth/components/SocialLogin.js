import React from "react";
import { BsGoogle, BsFacebook, BsTwitter, BsGithub } from "react-icons/bs";

const SocialLogin = () => {
    return (
        <div className="text-center mb-3">
            <p>Sign in with:</p>
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
    );
}

export default SocialLogin;
