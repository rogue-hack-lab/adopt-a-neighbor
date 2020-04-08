import React from 'react';
import Header from './composed/header';
import ResponsiveLayout from './composed/responsive-layout';
import FooterBar from './composed/footer-bar';

function App() {
  return (
    <div className="App">
      <Header />
      <ResponsiveLayout />
      <FooterBar />
    </div>
  );
}

export default App;
