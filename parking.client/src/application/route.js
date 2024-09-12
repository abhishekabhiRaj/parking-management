import React from "react";


// PAGES IMPORT
const Login = React.lazy(() => import('./pages/auth/index'));
const Landing = React.lazy(() => import('./pages/app/landing/Landing'));
const Dashboard = React.lazy(() => import('./pages/app/dashboard/Dashboard'));


export const route = [
    {
        "path" : "/login",
        "component" : Login
    },
    {
        "path" : "/register",
        "component" : Login
    },
    {
        "path" : "/dashboard",
        "component" : Dashboard
    },
];
