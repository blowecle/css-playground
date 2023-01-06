import React from 'react';
import ReactDOM from 'react-dom/client';
import Transforms from './transforms/Transforms';
import Gallery from './polaroid/Gallery';
import Transition from './transitions/Transition.js';
import TimingFunction from './transitions/TimingFunction';
import Cubic from './transitions/Cubic';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cubic/>
  </React.StrictMode>
);