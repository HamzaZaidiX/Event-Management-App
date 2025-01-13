import React from 'react';
import { registerRootComponent } from 'expo';
import App from '@/App';
// import App from './App'; // Ensure this path is correct

const Index = () => {
  return <App />;
};

registerRootComponent(Index);

export default Index;
