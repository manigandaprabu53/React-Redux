import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './Redux/Store.jsx';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
      <Toaster position='top-center' />
    </Provider>
  </React.StrictMode>,
)
