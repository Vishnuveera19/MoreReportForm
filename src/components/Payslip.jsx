import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Grid } from '@mui/material';

const Payslip = ({ employeeDetails }) => {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <Typography variant="h4" gutterBottom >
        MEDICAL EXPENSES
      </Typography>
      <Grid container justifyContent="space-between"> {/* Using Grid container for layout */}
        <Grid item>
          <TableContainer component={Paper} style={{ width: 'fit-content' , marginLeft:'200px', marginTop: '10px'}}> {/* Adjust width as needed */}
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '200px' }}>Employee Details</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{  padding: '9px', width: '200px'}}>Name:</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{  padding: '9px', width: '200px'}}>Employee Number:</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{  padding: '9px', width: '200px'}}>Position:</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{  padding: '9px', width: '200px'}}  >Phone no:</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{  padding: '9px', width: '200px'}}>Email:</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{  padding: '9px', width: '200px'}}>Department</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item>
          <TableContainer component={Paper} style={{ width: 'fit-content', marginRight:'200px', marginTop: '10px' }}> {/* Adjust width as needed */}
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '200px' }}>Pay Date:</TableCell>
                  <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '200px' }}>Pay Type:</TableCell>
                  <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '200px' }}>Period:</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell >1234</TableCell>
                  <TableCell >5678</TableCell>
                  <TableCell >9012</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '200px' }}>Payroll:</TableCell>
                  <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '200px' }}>NI Number:</TableCell>
                  <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '200px' }}>Tax Code:</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell >rrrr</TableCell> 
                  <TableCell >ddd</TableCell>   
                  <TableCell >fff</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          </Grid>
          <Grid item xs={12}>
          <Typography variant="h6" align="center" style={{ marginTop: '20px' }}>
            Payment Method:  Check
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper} style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1100px' }}>
            <Table>
              <TableRow>
                  <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '200px' }}>EARNINGS</TableCell>
                  <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '200px' }}>HOURS</TableCell>
                  <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '200px' }}>RATE</TableCell>
                  <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '200px' }}>CURRENT</TableCell>
                  <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '100px' }}>YTD</TableCell>
              </TableRow>
              <TableRow>
                  <TableCell >Standard pay</TableCell> 
                  <TableCell >1</TableCell>   
                  <TableCell >200</TableCell>
                  <TableCell >300</TableCell>   
                  <TableCell >400</TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell >Overtime pay</TableCell> 
                  <TableCell >5</TableCell>   
                  <TableCell >300</TableCell>
                  <TableCell >200</TableCell>   
                  <TableCell >600</TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell >Holiday pay</TableCell> 
                  <TableCell >4</TableCell>   
                  <TableCell >800</TableCell>
                  <TableCell >924</TableCell>   
                  <TableCell >582</TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell >Basic pay</TableCell> 
                  <TableCell >8</TableCell>   
                  <TableCell >834</TableCell>
                  <TableCell >789</TableCell>   
                  <TableCell >485</TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell >Commission & Bonus</TableCell> 
                  <TableCell >4</TableCell>   
                  <TableCell >785</TableCell>
                  <TableCell >235</TableCell>   
                  <TableCell >345</TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell >Medical Allowance</TableCell> 
                  <TableCell ></TableCell>   
                  <TableCell ></TableCell>
                  <TableCell ></TableCell>   
                  <TableCell ></TableCell>
                 </TableRow>
                 <TableRow>
                  <TableCell >Expensenses</TableCell> 
                  <TableCell ></TableCell>   
                  <TableCell ></TableCell>
                  <TableCell ></TableCell>   
                  <TableCell ></TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '200px' }} ></TableCell> 
                  <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '200px' }} ></TableCell>  
                  <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '100px' }}>Gross pay</TableCell>
                  <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '200px' }}>$100000</TableCell>
                  <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '100px' }} >$456789</TableCell> 

                  </TableRow>

            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper} style={{ marginTop: '40px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1100px' }}>
            <Table>
              <TableRow>
                  <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '200px' }}>DEDUCTIONS</TableCell>
                  <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '200px' }}></TableCell>
                  <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '200px' }}></TableCell>
                  <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '200px' }}>CURRENT</TableCell>
                  <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '100px' }}>YTD</TableCell>
              </TableRow>
              <TableRow>
                  <TableCell >Pay tax</TableCell> 
                  <TableCell ></TableCell>   
                  <TableCell ></TableCell>
                  <TableCell >300</TableCell>   
                  <TableCell >400</TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell >National Insurance</TableCell> 
                  <TableCell ></TableCell>   
                  <TableCell ></TableCell>
                  <TableCell >200</TableCell>   
                  <TableCell >600</TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell >Student Loan Replayement</TableCell> 
                  <TableCell ></TableCell>   
                  <TableCell ></TableCell>
                  <TableCell >924</TableCell>   
                  <TableCell >582</TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell >Pensions</TableCell> 
                  <TableCell ></TableCell>   
                  <TableCell ></TableCell>
                  <TableCell >789</TableCell>   
                  <TableCell >485</TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell >Union Fees</TableCell> 
                  <TableCell ></TableCell>   
                  <TableCell ></TableCell>
                  <TableCell >235</TableCell>   
                  <TableCell >345</TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '200px' }}></TableCell>
                  <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '200px' }}></TableCell>
                  <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '200px' }}>Total Deductions</TableCell>
                  <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '200px' }}>$10000</TableCell>
                  <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '100px' }}>$12000</TableCell>
              </TableRow> 
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper} style={{ marginTop: '40px', marginLeft: '800px', maxWidth: '470px' }}>
            <Table>
              <TableRow>
                  <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '200px' }}>NET PAY</TableCell>
                  <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '200px' }}>$10000</TableCell>
                  <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '100px' }}>$12000</TableCell>
              </TableRow>
              </Table>
          </TableContainer>
          </Grid>
        
      </Grid>
    </div>
  );
};

export default Payslip;
