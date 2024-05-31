import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Grid } from '@mui/material';

function ESIReports() {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <Grid>
        <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
        A.V.THOMAS LEATHER & ALLIED PRODUCTS PRIVATE LTD

        </Typography>
      </Grid>

      <Grid>
        <Typography variant="h6">
        ESI Report for the period of FEB10        
        </Typography>
      </Grid>

      <Grid>
        <Typography variant="h6">
       Date : 12/08/2010           
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <TableContainer component={Paper} style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1200px' }}>
          <Table>
            <TableBody>
              <TableRow sx={{ borderBottom: '3px solid black',borderTop:'3px solid black',borderRight:'3px solid black',borderLeft:'3px solid black', fontWeight: 'bold' }}>
                <TableCell style={{ fontWeight: 'bold',borderRight:'3px solid black'}}>Esi.No</TableCell>
                <TableCell style={{ fontWeight: 'bold' ,borderRight:'3px solid black'}}>Employee Code</TableCell>
                <TableCell style={{ fontWeight: 'bold' ,borderRight:'3px solid black'}}>Employee Name</TableCell>
                <TableCell style={{ fontWeight: 'bold',borderRight:'3px solid black' }}>Gross Wages</TableCell>
                <TableCell style={{ fontWeight: 'bold',borderRight:'3px solid black' }}>Esi Value(Employee)</TableCell>
                <TableCell style={{ fontWeight: 'bold',borderRight:'3px solid black' }}>Esi Value(Employer)</TableCell>
                <TableCell style={{ fontWeight: 'bold' ,borderRight:'3px solid black'}}>OT ESI</TableCell>
                <TableCell style={{ fontWeight: 'bold',borderRight:'3px solid black' }}>Total ESI</TableCell>
              </TableRow>

              {[...Array(16).keys()].map((row, index) => (
                <TableRow key={row + 1} sx={{ borderBottom: '2px solid black',borderRight:'2px solid black' ,borderLeft:'2px solid black'}}>
                  <TableCell sx={{border: 'none',borderRight:'2px solid black'}}>11137211</TableCell>
                  <TableCell sx={{border: 'none',borderRight:'2px solid black'}}> 0003</TableCell>
                  <TableCell  sx={{border: 'none',borderRight:'2px solid black'}}>M.MOHANA</TableCell>
                  <TableCell  sx={{border: 'none',borderRight:'2px solid black'}}> 4800</TableCell>
                  <TableCell  sx={{border: 'none',borderRight:'2px solid black'}}>84.00</TableCell>
                  <TableCell  sx={{border: 'none',borderRight:'2px solid black'}}>228.00</TableCell>
                  <TableCell  sx={{border: 'none',borderRight:'2px solid black'}}> 0.00</TableCell>
                  <TableCell  sx={{border: 'none',borderRight:'2px solid black'}}>312.00</TableCell>
                </TableRow>
              ))}
              <TableRow sx={{borderBottom:'3px solid black'}}>
                <TableCell></TableCell>
                <TableCell sx={{fontWeight:'bold'}}>total</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell> 14,189.00</TableCell>
                <TableCell>38,339.00</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>52,528.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <br />
      </Grid>
      
    </div>
  );
}

export default ESIReports;
