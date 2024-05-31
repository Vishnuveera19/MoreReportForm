import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Typography } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

const WithdrawalForm = () => {
  const [formData, setFormData] = useState({
    employeeId: '',
    employeeName: '',
    mobileNo: '',
    designation: '',
    dateOfJoining: null,
    dateOfLeaving: null,
    panCardNo: '',
    aadharNo: '',
    accountNo: '',
    ifscNo: '',
    branchName: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDateChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <Typography variant="h4" gutterBottom >
        APPLICATION FOR WITHDRAWAL
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <TextField
                  fullWidth
                  label="Employee ID"
                  name="employeeId"
                  value={formData.employeeId}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell>
                <TextField
                  fullWidth
                  label="Employee Name"
                  name="employeeName"
                  value={formData.employeeName}
                  onChange={handleChange}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <TextField
                  fullWidth
                  label="Mobile No"
                  name="mobileNo"
                  value={formData.mobileNo}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell>
                <TextField
                  fullWidth
                  label="Designation"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    renderInput={(params) => <TextField {...params} />}
                    label="Date of Joining"
                    value={formData.dateOfJoining}
                    onChange={(newValue) => handleDateChange('dateOfJoining', newValue)}
                  />
                </LocalizationProvider>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    renderInput={(params) => <TextField {...params} />}
                    label="Date of Leaving"
                    value={formData.dateOfLeaving}
                    onChange={(newValue) => handleDateChange('dateOfLeaving', newValue)}
                  />
                </LocalizationProvider>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>
                <TextField
                  fullWidth
                  label="PAN Card No"
                  name="panCardNo"
                  value={formData.panCardNo}
                  onChange={handleChange}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>
                <TextField
                  fullWidth
                  label="Aadhar No"
                  name="aadharNo"
                  value={formData.aadharNo}
                  onChange={handleChange}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>
                <TextField
                  fullWidth
                  label="Account No"
                  name="accountNo"
                  value={formData.accountNo}
                  onChange={handleChange}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>
                <TextField
                  fullWidth
                  label="IFSC No"
                  name="ifscNo"
                  value={formData.ifscNo}
                  onChange={handleChange}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>
                <TextField
                  fullWidth
                  label="Branch Name"
                  name="branchName"
                  value={formData.branchName}
                  onChange={handleChange}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>
                <TextField
                  fullWidth
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default WithdrawalForm;
