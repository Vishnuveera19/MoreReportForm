import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";

import TimeAttendance from "./pages/TimeAttendance";
import Reports from "./pages/Reports";
import PayRoll from "./pages/PayRoll";
import DashBoard from './pages/DashBoard';
import Payslip from './components/Payslip'
import MedicalExpenses from './components/Medical'
import ButtonPrint from './components/ButtonPrint';
function App() {
  return (
    <div className="App">
      <ButtonPrint/>
    </div>
  );
}

export default App;
