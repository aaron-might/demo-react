import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from "react-loader-spinner";
require('dotenv').config();

ReactDOM.render(<App />, document.getElementById('root'));
