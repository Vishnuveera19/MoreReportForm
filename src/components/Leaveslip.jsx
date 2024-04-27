




import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Paper, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const LeaveApplyForm = () => {
    const [leaveDetails, setLeaveDetails] = useState({
        SNo: '',
        CompanyId: '',
        BranchId: '',
        EmpCode: '',
        EmployeeId: '',
        EmployeeName: '',
        leaveId: '',
        leaveName: '',
        leaveCode: '',
        fromDate: '', 
        fromStatus: '',
        toDate: '', 
        status: '',
        Days: '',
        Reason: '',
        yearEnd: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLeaveDetails({
            ...leaveDetails,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log('Leave Details:', leaveDetails);
    };

    return (
        <Grid container justifyContent="center" style={{ marginTop: 50 }}>
            <Grid item xs={8}>
                <Paper elevation={3} style={{ padding: 20 }}>
                    <Typography variant="h5" align="center" gutterBottom>
                        Leave Application Form
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            {Object.entries(leaveDetails).map(([fieldName, fieldValue]) => (
                                <Grid item xs={12} sm={6} key={fieldName}>
                                    {fieldName === 'fromDate' || fieldName === 'toDate' ? (
                                        <TextField
                                            label={fieldName === 'fromDate' ? 'From Date' : 'To Date'}
                                            type="date"
                                            variant="outlined"
                                            fullWidth
                                            name={fieldName}
                                            value={fieldValue}
                                            onChange={handleChange}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    ) : fieldName === 'CompanyId' || fieldName === 'BranchId' ? (
                                        <FormControl variant="outlined" fullWidth>
                                            <InputLabel>{fieldName}</InputLabel>
                                            <Select
                                                name={fieldName}
                                                value={fieldValue}
                                                onChange={handleChange}
                                                label={fieldName}
                                            >
                                                <MenuItem value=""></MenuItem>
                                                
                                            </Select>
                                        </FormControl>
                                    ) : (
                                        <TextField
                                            label={fieldName}
                                            variant="outlined"
                                            fullWidth
                                            name={fieldName}
                                            value={fieldValue}
                                            onChange={handleChange}
                                        />
                                    )}
                                </Grid>
                            ))}
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" color="primary" fullWidth>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default LeaveApplyForm;

