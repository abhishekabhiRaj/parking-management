import React from "react";
// import Login from "./pages/auth";
// import Dashboard from "./pages/app/dashboard/Dashboard";
// import ParkingType from "./pages/app/master/parkingType/ParkingType";


// PAGES IMPORT
const Login = React.lazy(() => import('./pages/auth/index'));
const Landing = React.lazy(() => import('./pages/app/landing/Landing'));
const Dashboard = React.lazy(() => import('./pages/app/dashboard/Dashboard'));
const ParkingType = React.lazy(() => import('./pages/app/master/parkingType/ParkingType'));

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
    {
        "path" : "/parking-type",
        "component" : ParkingType
    },
];
