
import React from 'react'
import Paycalc from './components/Payslip';
import { Grid, Button } from '@mui/material';
import generatePDF from 'react-to-pdf';
import { useRef } from 'react';
import Medical from './components/Medical';
import Esicslip from './components/Esicslip';
import EPFSlip from './components/EPFslip';

function ButtonEpf() {
    const targetRef = useRef();
    return (
      <div className="App">
        <div ref={targetRef}>
        < EPFSlip
         employeeDetails={{ name: 'peter', employeeNumber: '12345', position: 'Manager', phone: '1234567890', email: 'peter@example.com',uan:'123',dojepf:'12-09-2017',doeepf:'12-09-2019' }} 
         accountDetails={{ aadharNo: '123456',panNo:'123456',bankAccountNo: '1234567890', bankName: 'SBI', branchName: ' Branch', ifscCode: 'ABCD012345' }} 
        />
        </div>
        <div>
        <Grid item xs={12} textAlign={'center'}>
          <Button variant='outlined' onClick={ ()=> generatePDF(targetRef, {filename: 'EPFslip.pdf'})}>Download Pdf</Button>
          </Grid>
          </div>
     </div>
    );
}

export default ButtonEpf