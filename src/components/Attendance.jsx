import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, MenuItem, Paper, Typography, Grid, Button, Checkbox, FormControlLabel } from '@mui/material';

const AttendanceForm = () => {
    const [companyId, setCompanyId] = useState('');
    const [branchId, setBranchId] = useState('');
    const [selectedEmployees, setSelectedEmployees] = useState([]);

    const handleCompanyIdChange = (event) => {
        setCompanyId(event.target.value);
    };

    const handleBranchIdChange = (event) => {
        setBranchId(event.target.value);
        setSelectedEmployees([]); 
    };

    const handleEmployeeChange = (event) => {
        const employeeName = event.target.name;
        if (event.target.checked) {
            setSelectedEmployees([...selectedEmployees, employeeName]);
        } else {
            setSelectedEmployees(selectedEmployees.filter(name => name !== employeeName));
        }
    };

    const getEmployeeNamesForBranch = (branchId) => {
        
        switch (branchId) {
            case 1:
                return ['shanmu', 'priya', 'kumar','sagunthala','yogesh','vijay'];
            case 2:
                return ['vishnu', 'sanju', 'kaviya','lallu'];
            case 3:
                return ['diya', 'prani', 'guru'];
            default:
                return [];
        }
    };

    const branchIds = [1, 2, 3, 4, 5];

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <Typography variant="h4" gutterBottom >
                ATTENDANCE FORM
            </Typography>
            <TableContainer component={Paper} style={{ textAlign: 'center', width: '500px', marginLeft: '500px', marginTop: '20px' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ padding: '8px', width: '20px', color: 'blue' }}>Company ID</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <TextField
                                    select
                                    fullWidth
                                    label="Company ID"
                                    value={companyId}
                                    onChange={handleCompanyIdChange}
                                >
                                    
                                    {[101, 102, 103].map((companyId) => (
                                        <MenuItem key={companyId} value={companyId}>
                                            {companyId}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Branch ID</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <TextField
                                    select
                                    fullWidth
                                    label="Branch ID"
                                    value={branchId}
                                    onChange={handleBranchIdChange}
                                >
                                    
                                    {branchIds.map((branchId) => (
                                        <MenuItem key={branchId} value={branchId}>
                                            {branchId}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </TableCell>
                        </TableRow>
                       
                        <TableRow>
                            <TableCell>
                                {getEmployeeNamesForBranch(branchId).map((employeeName) => (
                                    <FormControlLabel
                                        key={employeeName}
                                        control={<Checkbox checked={selectedEmployees.includes(employeeName)} onChange={handleEmployeeChange} name={employeeName} />}
                                        label={employeeName}
                                    />
                                ))}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Grid item xs={12}>
                    <Button type="save" variant="contained" color="primary" fullWidth>
                        Save
                    </Button>
                </Grid>
            </TableContainer>
        </div>
    );
};

export default AttendanceForm;
