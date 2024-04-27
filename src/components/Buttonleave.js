import React from 'react'
import Paycalc from './Payslip';
import { Grid, Button } from '@mui/material';
import generatePDF from 'react-to-pdf';
import { useRef } from 'react';
import Medical from './Medical';
import Leaveslip from './Leaveslip';
// import Buttonleave from './Buttonleave';

function Buttonleave() {
    const targetRef = useRef();
    return (
      <div className="App">
        <div ref={targetRef}>
         <Leaveslip/>
        </div>
        <div>
        <Grid item xs={12} textAlign={'center'}>
          <Button variant='outlined' onClick={ ()=> generatePDF(targetRef, {filename: 'Leaveslip.pdf'})}>Download Pdf</Button>
          </Grid>
          </div>
     </div>
    );
}

export default Buttonleave