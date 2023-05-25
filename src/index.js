import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //严格模式节点去掉，因为它会影响useEffect的执行时机
  <App />
);


