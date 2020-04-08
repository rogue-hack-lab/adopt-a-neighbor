import React from 'react';
import { Root, Routes, addPrefetchExcludes } from 'react-static';
//
import { Link, Router } from 'components/Router';
import Dynamic from 'containers/Dynamic';
import Header from './composed/header';
import FooterBar from './composed/footer-bar';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic']);

function App() {
  return (
    <Root>
      <Header />
      <React.Suspense fallback={<em>Loading...</em>}>
        <Router>
          <Dynamic path="dynamic" />
          <Routes path="*" />
        </Router>
      </React.Suspense>
      <FooterBar />
    </Root>
  );
}

export default App;
