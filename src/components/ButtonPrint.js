import React from 'react'
import Paycalc from './Payslip';
import { Grid, Button } from '@mui/material';
import generatePDF from 'react-to-pdf';
import { useRef } from 'react';
import Medical from './Medical';


function ButtonPrint() {
  const targetRef = useRef();
  return (
    <div className="App">
      <div ref={targetRef}>
      < Medical/>
      </div>
      <div>
      <Grid item xs={12} textAlign={'right'} sx={{paddingRight:'140px'}}>
        <Button variant='contained' onClick={ ()=> generatePDF(targetRef, {filename: 'Medical.pdf'})}>Download Pdf</Button>
        </Grid>
        </div>
   </div>
  );
}




export default ButtonPrint