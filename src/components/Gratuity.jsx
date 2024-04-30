import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Grid } from '@mui/material';

const Gratuity = ({ employeeDetails }) => {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <Typography variant="h4" gutterBottom >
        GRATUITY
      </Typography>
      <Grid container justifyContent="center"/> 
      <Grid item>
        <TableContainer component={Paper} style={{ width: 'fit-content' , marginLeft:'400px', marginTop: '10px'}}> 
        
          <Table>
            <TableBody>
              <TableRow>
                <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '300px' }}>Employee Details</TableCell>
                <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '300px' }}></TableCell>
              </TableRow>

              <TableCell style={{textAlign:'left',  padding: '9px', width: '100px'}}>Employee Name:</TableCell>
              <TableCell style={{textAlign:'left',  padding: '9px', width: '100px'}}>shanmu</TableCell>
            
            
              <TableRow>  
              
              </TableRow>
              <TableRow>
                <TableCell style={{  padding: '9px', width: '100px'}}>Address:</TableCell>
                <TableCell style={{textAlign:'left',  padding: '9px', width: '100px'}}>DTU678</TableCell>
            
              </TableRow>
              <TableRow>
                <TableCell style={{  padding: '9px', width: '100px'}}>Department:</TableCell>
                <TableCell style={{textAlign:'left',  padding: '9px', width: '100px'}}>DDDDdd</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{  padding: '9px', width: '100px'}}  > Date of Appoinment:</TableCell>
                <TableCell style={{textAlign:'left',  padding: '9px', width: '100px'}}>28-03-2002</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{  padding: '9px', width: '100px'}}> Date of Termination:</TableCell>
                <TableCell style={{textAlign:'left',  padding: '9px', width: '100px'}}>09-05-2014</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{  padding: '9px', width: '100px'}}>Total period of service:</TableCell>
                <TableCell style={{textAlign:'left',  padding: '9px', width: '100px'}}>No</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{  padding: '9px', width: '100px'}}>Amount of wages last drawn:</TableCell>
                <TableCell style={{textAlign:'left',  padding: '9px', width: '100px'}}>No</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{  padding: '9px', width: '100px'}}>Amount of Gratuity claimed:</TableCell>
                <TableCell style={{textAlign:'left',  padding: '9px', width: '100px'}}>DTU678</TableCell>
              </TableRow>
             
              <TableRow>
                <TableCell style={{  padding: '9px', width: '100px'}}>claimed date:</TableCell>
                <TableCell style={{textAlign:'left',  padding: '9px', width: '100px'}}>NA</TableCell>
              </TableRow>
             
              <TableRow>
                <TableCell style={{  padding: '9px', width: '100px'}}>Date Of Birth:</TableCell>
                <TableCell style={{textAlign:'left',  padding: '9px', width: '100px'}}>23-06-2019</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{  padding: '9px', width: '100px'}}>Disability Type:</TableCell>
                <TableCell style={{textAlign:'left',  padding: '9px', width: '100px'}}>NA</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{  padding: '9px', width: '100px'}}>Phone no:</TableCell>
                <TableCell style={{textAlign:'left',  padding: '9px', width: '100px'}}>1234567890</TableCell>
              </TableRow>
             

            </TableBody>
          </Table>
        </TableContainer>
        </Grid>
        <br></br>
   <Grid item xs={12}>
       <Typography variant="h7" align="left" style={{ marginTop: '10px' }}>
         Signature of Employee : shanmu
       </Typography>
  
      </Grid>      
      </div>
  );
};
export default Gratuity;