// src/App.js
import React, { useState, useCallback } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { throttle, debounce } from 'lodash';

// Lazy loading the Button component for performance
const Button = React.lazy(() => import('./components/Button/Button'));

function App() {
  // State to manage button click count
  const [clickCount, setClickCount] = useState(0);

  // Throttled function (fires only once in 2 seconds during continuous rapid clicks)
  const throttledClick = throttle(() => {
    setClickCount(prevCount => prevCount + 1);
    console.log("Throttled click");
  }, 1500); // 1.5-second throttle

  // Debounced function (fires when user stops clicking continuously)
  const debouncedClick = debounce(() => {
    setClickCount(prevCount => prevCount + 1);
    console.log("Debounced click (normal click)");
  }, 200); // 0.3-second debounce

  // Main click handler function
  const handleClick = useCallback(() => {
    // If the user clicks faster than 0.5 seconds, throttle clicks.
    if (throttledClick.cancelled) {
      throttledClick(); // Use throttled click for continuous clicks
    } else {
      // If there is a gap of 0.5s between clicks, reset throttle and treat it as a normal click
      throttledClick.cancel();
      debouncedClick(); // Use normal click (debounced)
    }
  }, [throttledClick, debouncedClick]);

  return (
    <Container className="bg-primary text-center py-5" fluid>
      <h1 className="text-white mb-4">Welcome to the Advanced App</h1>

      {/* Suspense to handle lazy loading of the Button */}
      <React.Suspense fallback={<div>Loading Button...</div>}>
        <Button
          label={`Clicked ${clickCount} times`}
          onClick={handleClick}
          ariaLabel="Click the button to increment count"
        />
      </React.Suspense>
    </Container>
  );
}

export default App;
