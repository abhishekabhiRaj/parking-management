// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { route } from './route';

// Lazy loading the Button component for performance
// const Button = React.lazy(() => import('./components/Button/Button'));

function App() {
  return (
    <Routes>
       {/* Redirect from "/" to "/dashboard" */}
       <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {route.map((item, i)=>(
        <Route key={i} path={item.path} element={<item.component/>} />
      ))}
    </Routes>
  );
}

export default App;
