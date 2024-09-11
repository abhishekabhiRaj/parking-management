import React from "react";
import { TabUrl } from "application/components/Tab/TabUrl";
import "./auth.css";
import image from "application/assets/images/car/cartoon-smoke-with-car.png";
import { BsFacebook, BsGithub, BsGoogle, BsTwitter } from "react-icons/bs";
import SocialLogin from "./components/SocialLogin";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { useLocation } from "react-router-dom";
import classNames from "classnames"; // Optional, for better class handling


 const Login = () => {
    const location = useLocation();

    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src={image} className="img-fluid" alt="Sample" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <section className="mb-3">
                            <TabUrl
                                tabId="login-tab"
                                tabs={[
                                    { id: 1, title: "login", path: "/login" },
                                    { id: 2, title: "register", path: "/register" },
                                ]}
                            />
                        </section>

                        <div className="tab-content">
                            {location.pathname == "/login" && <div className={classNames("tab-pane fade", { "show active" : location.pathname == "/login" })} id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                                <SocialLogin />
                                <LoginForm />
                            </div>}
                            {location.pathname == "/register" &&<div className={classNames("tab-pane fade", { "show active" : location.pathname == "/register" })} id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                                <RegisterForm />
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-none flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                <div className="text-white mb-3 mb-md-0">
                    Copyright © 2020. All rights reserved.
                </div>
                <div>
                    <a href="#!" className="text-white me-4">
                        <BsFacebook />
                    </a>
                    <a href="#!" className="text-white me-4">
                        <BsTwitter />
                    </a>
                    <a href="#!" className="text-white me-4">
                        <BsGoogle />
                    </a>
                    <a href="#!" className="text-white">
                        <BsGithub />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Login;
