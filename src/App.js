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
import WithdrawalForm from './components/Gratuitywithdrawel.jsx';
import Mrgabs from './components/mrgabs.js';
import Medical from './components/Medical';
import ButtonD7 from './components/d7ReportsButton.js';
import ButtonD8 from './components/d8ReportsButton.js';
import ButtonD9 from './components/d9ReportsButton.js';
import Basicdetails from './components/d7ReportsButton.js';
import BesicDtailss from './components/BasicDetailsButton.js';
import Loanreport from './components/LoanReportsButton.js';
import Payregister from './components/LoanReportsButton.js';
import Empmaster from './components/EmpMasterDetailsButton.js';
import Deptwise from './components/DeptWiseButton.js';
import Bankreg from './components/BankRegButton.js';
import Deptcatpay from './components/departcartwisepayButton.js';
import EsiR from './components/EsiReportsButton.js';
import PFDetails from './components/PfDetailsButton.js';
import EarlyIn from './components/EarlyInAttReportsButton.js';
import EarlyOut from './components/EarlyOutAttButton.js';
import LateIn from './components/LateInButton.js';
import LateOut from './components/LateOutButton.js';
import Othrs from './components/OTHrsAttButton.js';
import Absentatt from './components/AbsentAttButton.js';
import Attreport from './components/AttButton.js';
import Workedhrs from './components/AttButton.js';
import Progressbut from './components/ProgressButton.js';


function App() {
  return (
    <div className="App">
         <Payslip/>

{/* <MedicalExpenses/> */}
  {/* <ButtonPrint/> */}

    </div>
  );
}

export default App;
