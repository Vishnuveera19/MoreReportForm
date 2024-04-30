import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Grid } from '@mui/material';

const EPFSlip = ({ employeeDetails, accountDetails }) => {
    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <Typography variant="h4" gutterBottom>
                EPF FORM
            </Typography>
            <Grid container justifyContent="center">
                <Grid item>
                    <TableContainer component={Paper} style={{ width: '500px', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px' }}>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell colSpan={2} style={{ backgroundColor: 'blue', color: 'white', padding: '10px' }}>Employee Details</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Name:</TableCell>
                                    <TableCell>{employeeDetails.name}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Employee Number:</TableCell>
                                    <TableCell>{employeeDetails.employeeNumber}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Position:</TableCell>
                                    <TableCell>{employeeDetails.position}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Phone no:</TableCell>
                                    <TableCell>{employeeDetails.phone}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Email:</TableCell>
                                    <TableCell>{employeeDetails.email}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>UAN:</TableCell>
                                    <TableCell>{employeeDetails.uan}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>DOJ EPF:</TableCell>
                                    <TableCell>{employeeDetails.dojepf}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>DOE EPF:</TableCell>
                                    <TableCell>{employeeDetails.doeepf}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2} style={{ backgroundColor: 'blue', color: 'white', padding: '10px' }}>Account Details</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Aadhar Number:</TableCell>
                                    <TableCell>{accountDetails.aadharNo}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>PAN Number:</TableCell>
                                    <TableCell>{accountDetails.panNo}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Bank Account Number:</TableCell>
                                    <TableCell>{accountDetails.bankAccountNo}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>IFSC Code:</TableCell>
                                    <TableCell>{accountDetails.ifscCode}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>BranchName:</TableCell>
                                    <TableCell>{accountDetails.branchName}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                
            </Grid> 
            <Grid item xs={12}>
       <Typography variant="h7" align="center" style={{ marginTop: '10px' }}>
         Signature of Employee : 
       </Typography>
      </Grid>
        </div>
    );
};

export default EPFSlip;
