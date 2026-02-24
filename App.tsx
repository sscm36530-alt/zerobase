import React from 'react';
import { LandingPage } from './LandingPage';

// In a real application, this would handle routing between the Landing Page
// and the Dashboard (the code previously provided by the user).
// For now, we serve the Landing Page as the official frontend entry point.

const App: React.FC = () => {
  return (
    <LandingPage />
  );
};

export default App;