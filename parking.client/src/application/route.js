import React from "react";

// PAGES IMPORT
const Login = React.lazy(() => import('./pages/auth/index'));
const Landing = React.lazy(() => import('./pages/app/landing/Landing'));
const Dashboard = React.lazy(() => import('./pages/app/dashboard/Dashboard'));
const ParkingType = React.lazy(() => import('./pages/app/master/parkingType/ParkingType'));
const VehicleType = React.lazy(() => import('./pages/app/master/vehicleType/VehicleType'));

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
    {
        "path" : "/vehicle-type",
        "component" : VehicleType
    },
];
