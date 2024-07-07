import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
/* Choose router type for deploy type */
import { BrowserRouter as Router } from "react-router-dom"; // normal run
// import { HashRouter as Router } from "react-router-dom"; // GH Pages

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  );

reportWebVitals();
