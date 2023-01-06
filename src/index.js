import React from 'react';
import ReactDOM from 'react-dom/client';
import Transforms from './transforms/Transforms';
import Gallery from './polaroid/Gallery';
import Transition from './transitions/Transition.js';
import TimingFunction from './transitions/TimingFunction';
import Cubic from './transitions/Cubic';
import AllTransitions from './transitions/AllTransitions';
import Rocket from './transitions/rocket/Rocket';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rocket/>
  </React.StrictMode>
);