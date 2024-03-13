// import { useState } from 'react';
import React from 'react';
import { Provider } from "react-redux";
import store from "./redux/Store";
import ToDo from "./components/ToDo";
import './App.css';


function App() {


  return (
    <Provider store={store}>
      <ToDo />
    </Provider>
  )
}

export default App
