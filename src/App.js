import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";

import TimeAttendance from "./pages/TimeAttendance";
import Reports from "./pages/Reports";
import PayRoll from "./pages/PayRoll";
import DashBoard from './pages/DashBoard';
import Payslip from './components/Payslip'
import MedicalExpenses from './components/Medical'
import ButtonPrint from './components/ButtonPrint';
import Esicslip from './components/Esicslip';
import ButtonEsi from './components/ButtonEsi';
import Resiginationslip from './components/Resiginationslip';
import Buttonres from './components/Buttontres';
function App() {
  return (
    <div className="App">
      <Buttonres/>
    </div>
  );
}

export default App;
