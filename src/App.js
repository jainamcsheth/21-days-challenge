import React from 'react';
import './App.css';
import Home from './components/home/home';
import AppBarMain from './core/components/AppBar';
import RouterMain from './core/components/RouterMain';

function App() {
  return (
    <>
      <AppBarMain />
      <Home />
      <RouterMain />
    </>
  );
}

export default App;
