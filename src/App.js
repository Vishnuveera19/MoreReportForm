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
import LeaveApplyForm from './components/Leaveslip';
import EPFSlip from './components/EPFslip.jsx';
import ButtonEpf from './ButtonEpf.js';
import Gratuity from './components/Gratuity.jsx';
import Buttongra from './components/Buttongra.js';
import AttendanceForm from './components/Attendance.jsx';

function App() {
  return (
    <div className="App">
         
   
<AttendanceForm/>
    </div>
  );
}

export default App;
