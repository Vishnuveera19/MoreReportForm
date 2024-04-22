import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";

import TimeAttendance from "./pages/TimeAttendance";
import Reports from "./pages/Reports";
import PayRoll from "./pages/PayRoll";
import DashBoard from './pages/DashBoard';
import Payslip from './components/Payslip'

export default function App() {
  return (
    // <>
    //   <BrowserRouter>
    // <br></br>
    //   <Routes>
    //     <Route path="/" exact element={<DashBoard />}></Route>
        
        
       
        
    //     <Route path="/TimeAttendance" exact element={<TimeAttendance />}></Route>
    //     <Route path="/Reports" exact element={<Reports />}></Route>
    //     <Route path="/PayRoll" exact element={<PayRoll />}></Route>

    //   </Routes>
    //   </BrowserRouter>
    // </>
    <Payslip/>
    
  )
  
  
}


