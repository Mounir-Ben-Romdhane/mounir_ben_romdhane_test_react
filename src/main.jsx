import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  { BrowserRouter } from "react-router-dom";
import NavigationBar from './Components/Navbar.jsx';
import {Provider} from "react-redux";
import store ,{persistor} from "./Redux/store.jsx";
import {PersistGate} from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter >
      <NavigationBar />
      <App />
      
    </BrowserRouter>
    </PersistGate>
        </Provider>
  </React.StrictMode>,
)
