// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/auth';

// Lazy loading the Button component for performance
const Button = React.lazy(() => import('./components/Button/Button'));

function App() {
  return (
    <Login />
  );
}

export default App;
