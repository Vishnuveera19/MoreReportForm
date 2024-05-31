import React, { useState } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Grid, Button } from '@mui/material';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Medical = ({ employeeDetails }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    
    if (!selectedFile) {
      console.error('No file selected');
      return;
    }


    const reader = new FileReader();

  
    reader.onloadend = () => {
      
      const fileBlob = new Blob([reader.result], { type: selectedFile.type });

     
      const anchor = document.createElement('a');

      
      anchor.href = URL.createObjectURL(fileBlob);

    
      anchor.download = selectedFile.name;

      
      anchor.click();
    };

    
    reader.readAsArrayBuffer(selectedFile);
  };
  
  const downloadAsPDF = () => {
    const input = document.getElementById('pdf-content');

    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const width = pdf.internal.pageSize.getWidth();
        const height = pdf.internal.pageSize.getHeight();

        pdf.addImage(imgData, 'PNG', 0, 0, width, height);
        pdf.save('medical_expenses.pdf');
      });
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <Grid>
      <Typography variant="h6" gutterBottom >
            Data Test
      </Typography>
      <Typography varient="h2" >
      Worked Hours Details For the Date of 29/04/2009    
        </Typography>
     
      <Grid item xs={12}>
        <TableContainer component={Paper} style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1100px' }}>
          <Table>
            <TableRow >
                <TableCell style={{ backgroundColor: '', color: 'black', padding: '10px', width: '100px' }}>s.no</TableCell>
                <TableCell style={{ backgroundColor: '', color: 'black', padding: '10px', width: '100px' }}>EMP CODE</TableCell>
                <TableCell style={{ backgroundColor: '', color: 'black', padding: '10px', width: '100px' }}>EMP name</TableCell>
                <TableCell style={{ backgroundColor: '', color: 'black', padding: '10px', width: '100px' }}>Date</TableCell>
                <TableCell style={{ backgroundColor: '', color: 'black', padding: '10px', width: '200px' }}>shift</TableCell>
                <TableCell style={{ backgroundColor: '', color: 'black', padding: '10px', width: '200px' }}>intime |</TableCell>
                <TableCell style={{ backgroundColor: '', color: 'black', padding: '10px', width: '200px' }}>outtime |</TableCell>
                <TableCell style={{ backgroundColor: '', color: 'black', padding: '10px', width: '200px' }}>intime ||</TableCell>
                <TableCell style={{ backgroundColor: '', color: 'black', padding: '10px', width: '200px' }}>outtime ||</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>1</TableCell> 
                <TableCell>0031</TableCell>   
                <TableCell >sanjeev</TableCell>
                <TableCell>20/08/2024</TableCell> 
                <TableCell>G</TableCell> 
                <TableCell>08:31</TableCell>   
                <TableCell >13:31</TableCell>
                <TableCell>13:17</TableCell>   
                <TableCell>17:17</TableCell>    
            </TableRow>                 
            <TableRow>
                <TableCell>2</TableCell> 
                <TableCell>0031</TableCell>   
                <TableCell >sanjeev</TableCell>
                <TableCell>20/08/2024</TableCell> 
                <TableCell>G</TableCell> 
                <TableCell>08:31</TableCell>   
                <TableCell >13:31</TableCell>
                <TableCell>13:17</TableCell>   
                <TableCell>17:17</TableCell>    
            </TableRow>   
            <TableRow>
                <TableCell>3</TableCell> 
                <TableCell>0031</TableCell>   
                <TableCell >sanjeev</TableCell>
                <TableCell>20/08/2024</TableCell> 
                <TableCell>G</TableCell> 
                <TableCell>08:31</TableCell>   
                <TableCell >13:31</TableCell>
                <TableCell>13:17</TableCell>   
                <TableCell>17:17</TableCell>    
            </TableRow>   
            <TableRow>
                <TableCell>4</TableCell> 
                <TableCell>0031</TableCell>   
                <TableCell >sanjeev</TableCell>
                <TableCell>20/08/2024</TableCell> 
                <TableCell>G</TableCell> 
                <TableCell>08:31</TableCell>   
                <TableCell >13:31</TableCell>
                <TableCell>13:17</TableCell>   
                <TableCell>17:17</TableCell>    
            </TableRow>   
            <TableRow>
                <TableCell>5</TableCell> 
                <TableCell>0031</TableCell>   
                <TableCell >sanjeev</TableCell>
                <TableCell>20/08/2024</TableCell> 
                <TableCell>G</TableCell> 
                <TableCell>08:31</TableCell>   
                <TableCell >13:31</TableCell>
                <TableCell>13:17</TableCell>   
                <TableCell>17:17</TableCell>    
            </TableRow>   
            <TableRow>
                <TableCell>6</TableCell> 
                <TableCell>0031</TableCell>   
                <TableCell >sanjeev</TableCell>
                <TableCell>20/08/2024</TableCell> 
                <TableCell>G</TableCell> 
                <TableCell>08:31</TableCell>   
                <TableCell >13:31</TableCell>
                <TableCell>13:17</TableCell>   
                <TableCell>17:17</TableCell>    
            </TableRow>   
            <TableRow>
                <TableCell>7</TableCell> 
                <TableCell>0031</TableCell>   
                <TableCell >sanjeev</TableCell>
                <TableCell>20/08/2024</TableCell> 
                <TableCell>G</TableCell> 
                <TableCell>08:31</TableCell>   
                <TableCell >13:31</TableCell>
                <TableCell>13:17</TableCell>   
                <TableCell>17:17</TableCell>    
            </TableRow>   
            <TableRow>
                <TableCell>8</TableCell> 
                <TableCell>0031</TableCell>   
                <TableCell >sanjeev</TableCell>
                <TableCell>20/08/2024</TableCell> 
                <TableCell>G</TableCell> 
                <TableCell>08:31</TableCell>   
                <TableCell >13:31</TableCell>
                <TableCell>13:17</TableCell>   
                <TableCell>17:17</TableCell>    
            </TableRow>   
            <TableRow>
                <TableCell>9</TableCell> 
                <TableCell>0031</TableCell>   
                <TableCell >sanjeev</TableCell>
                <TableCell>20/08/2024</TableCell> 
                <TableCell>G</TableCell> 
                <TableCell>08:31</TableCell>   
                <TableCell >13:31</TableCell>
                <TableCell>13:17</TableCell>   
                <TableCell>17:17</TableCell>    
            </TableRow>   
            <TableRow>
                <TableCell>10</TableCell> 
                <TableCell>0031</TableCell>   
                <TableCell >sanjeev</TableCell>
                <TableCell>20/08/2024</TableCell> 
                <TableCell>G</TableCell> 
                <TableCell>08:31</TableCell>   
                <TableCell >13:31</TableCell>
                <TableCell>13:17</TableCell>   
                <TableCell>17:17</TableCell>    
            </TableRow>   
            <TableRow>
                <TableCell>11</TableCell> 
                <TableCell>0031</TableCell>   
                <TableCell >sanjeev</TableCell>
                <TableCell>20/08/2024</TableCell> 
                <TableCell>G</TableCell> 
                <TableCell>08:31</TableCell>   
                <TableCell >13:31</TableCell>
                <TableCell>13:17</TableCell>   
                <TableCell>17:17</TableCell>    
            </TableRow>   
            <TableRow>
                <TableCell>12</TableCell> 
                <TableCell>0031</TableCell>   
                <TableCell >sanjeev</TableCell>
                <TableCell>20/08/2024</TableCell> 
                <TableCell>G</TableCell> 
                <TableCell>08:31</TableCell>   
                <TableCell >13:31</TableCell>
                <TableCell>13:17</TableCell>   
                <TableCell>17:17</TableCell>    
            </TableRow>   
            <TableRow>
                <TableCell>13</TableCell> 
                <TableCell>0031</TableCell>   
                <TableCell >sanjeev</TableCell>
                <TableCell>20/08/2024</TableCell> 
                <TableCell>G</TableCell> 
                <TableCell>08:31</TableCell>   
                <TableCell >13:31</TableCell>
                <TableCell>13:17</TableCell>   
                <TableCell>17:17</TableCell>    
            </TableRow>   

            {/* <TableRow>
                <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '200px' }} ></TableCell> 
                <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '200px' }} >Total</TableCell>  
                <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '100px' }}> </TableCell>
                <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '200px' }}></TableCell>
                <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '100px' }} ></TableCell> 
            </TableRow> */}
          </Table>
        </TableContainer>
      </Grid>
      <br></br>
      
     
      </Grid>
    </div>
  );
}

export default Medical;
