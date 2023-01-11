import React from 'react';
import ReactDOM from 'react-dom/client';
import Transforms from './transforms/Transforms';
import Gallery from './polaroid/Gallery';
import Transition from './transitions/Transition.js';
import TimingFunction from './transitions/TimingFunction';
import Cubic from './transitions/Cubic';
import AllTransitions from './transitions/AllTransitions';
import Rocket from './transitions/rocket/Rocket';
import Corners from './buttons/Corners';
import Micro from './buttons/Micro';
import Swipe from './buttons/Swipe';
import Circle from './buttons/Circle';
import Captions from './buttons/Captions';
import Keyframes from './keyframes/Keyframes';
import Loaders from './loaders/Loaders';
import Animations from './animations/Animations';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Transforms/>
    <Gallery/>
    <Transition/>
    <TimingFunction/>
    <Cubic/>
    <AllTransitions/>
    <Rocket/>
    <Corners/>
    <Micro/>
    <Swipe/>
    <Circle/>
    <Captions/>
    <Keyframes/>
    <Loaders/>
    <Animations/>
  </React.StrictMode>
);