import React from 'react'
import Paycalc from './Payslip';
import { Grid, Button } from '@mui/material';
import generatePDF from 'react-to-pdf';
import { useRef } from 'react';
import Medical from './Medical';
import Gratuity from './Gratuity';

function Buttongra() {
    const targetRef = useRef();
    return (
      <div className="App">
        <div ref={targetRef}>
        < Gratuity/>
        </div>
        <div>
        <Grid item xs={12} textAlign={'center'}>
          <Button variant='outlined' onClick={ ()=> generatePDF(targetRef, {filename: 'Gratuity.pdf'})}>Download Pdf</Button>
          </Grid>
          </div>
     </div>
    );
}

export default Buttongra