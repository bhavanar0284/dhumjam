import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import LoginPage from './component/LoginPage';

const App1 = () => {
  return (
    <div>
      <LoginPage />
    </div>
  );
};

ReactDOM.render(<App1 />, document.getElementById('root'));