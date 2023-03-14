import React from "react";
import { Routes, Route } from 'react-router-dom'
import { Provider } from "react-redux"
import { store } from "./redux"
import CreateEmployee from './views/CreateEmployee/CreateEmployee'
import EmployeeList from './views/EmployeeList/EmployeeList'

import './App.css';


function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
            <Route path="/" element={<CreateEmployee />} />
            <Route path="/employee-list" element={<EmployeeList />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;